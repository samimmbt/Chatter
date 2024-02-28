import { useState } from 'react'
import './index.css'
import Login from './components/Login'
import Signup from './components/Signup'
import InputComp from './components/Input/InputComp'
import { Outlet } from "react-router-dom";
function App() {
  let usr = localStorage.getItem("usr")
  // console.log(usr);
  if (usr == null || usr.logged == false) {
    return <Navigate to="/" replace />
  } else {
    return (
      <>
        <Outlet/>
      </>
    )
  }

}

export default App
