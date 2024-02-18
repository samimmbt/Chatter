import { useState } from 'react'
import './index.css'
import Login from './components/Login'
import Signup from './components/Signup'
import InputComp from './components/Input/InputComp'
function App() {
  let usr = localStorage.getItem("usr")
  // console.log(usr);
  if (usr != null) {
    console.log("sign up" + usr);
    return (
      <Signup />
    )
  } else if (usr == null || usr.logged == false) {
    console.log("log in" + usr);
    return (
        <Login />
    )
  } else if (usr != null && usr.logged == true) {
    console.log("App" + usr);

    return (
      <>

        <InputComp />
      </>
    )
  }

}

export default App
