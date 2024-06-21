import React from 'react'
import { useNavigate } from 'react-router-dom';

const Main = () => {

  React.useEffect(() => {
    if (sessionStorage.getItem('loggedIn') === 'false') {
      navigate('/login');
    }
  }, [navigate]);
  return (
    <div>
        <h1>Hell yeah</h1>
    </div>
  )
}
export default Main;
