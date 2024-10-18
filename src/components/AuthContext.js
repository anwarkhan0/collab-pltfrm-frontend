import { createContext, useReducer, useContext, useEffect } from 'react';
import axios from 'axios';

// Initial State
const initialState = {
  user: null,
  token: null,
  loading: true,
  error: null
};

// Action Types
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT = 'LOGOUT';
const AUTH_ERROR = 'AUTH_ERROR';

// Reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        loading: false
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

// Create Auth Context
const AuthContext = createContext();

// Provide Auth Context to components
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check localStorage for token (persist login state)
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (token && user) {
      dispatch({ type: LOGIN_SUCCESS, payload: { token, user } });
    } else {
      dispatch({ type: AUTH_ERROR, payload: 'No token found' });
    }
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:4000/api/auth/login', { email, password });
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      dispatch({ type: LOGIN_SUCCESS, payload: { token, user } });
      // Redirect to home page after successful login
      window.location.href = '/';
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error.message });
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {state.loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

// Hook to access auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
