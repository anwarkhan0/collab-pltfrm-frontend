import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import DocumentRoom from './pages/DocumentRoom';
import Login from './pages/Login';
import Register from './pages/Register';

import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoutes';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<DocumentRoom />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </AuthProvider>

  );
}

export default App;
