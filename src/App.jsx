import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login/login';
import Main from './Pages/main';
import './App.css'


function App() {
  
  const isLoggedIn = () => {
    return sessionStorage.getItem('loggedIn') === 'true';
  };
  

  return (
    <>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={isLoggedIn() ? <Main /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
       </div>
    </>
  )
}

export default App
