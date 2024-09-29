import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import DocumentRoom from './pages/DocumentRoom';

function App() {

  const flag = 1;


  return flag == 0 ? (
    <div>
      <Header />
      {/* <!-- Page Sidebar Ends--> */}
      <MainPage />
      {/* <!-- footer start--> */}
      <Footer />

    </div>
  ) : (

    <DocumentRoom />

  );
}

export default App;
