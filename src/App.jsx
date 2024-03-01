import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
  const usr = localStorage.getItem('usr');
  const userObj = JSON.parse(usr);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userObj || !userObj.logged) {
      console.log('Not logged in');
      navigate('/'); // Redirect to login page
    } else {
      console.log('User is logged in');
    }
  }, []); // Empty dependency array ensures this effect runs once on component mount

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
