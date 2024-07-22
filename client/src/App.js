import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';

// pages
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import LoginPage from './pages/LoginPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage></HomePage>;
      case 'login':
        return <LoginPage></LoginPage>
      case 'users':
        return <UsersPage></UsersPage>;
      default:
        return <HomePage></HomePage>
    }
  }

  return (
    <>
      <NavBar setCurrentPage={setCurrentPage}></NavBar>
      {renderPage()}
    </>

  );
}

export default App;
