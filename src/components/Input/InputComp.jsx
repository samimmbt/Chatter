import '../../index.css'
import { useState, useEffect } from 'react'
import { TimerMin } from '../Timer/Timer';
const InputComp = ({ type, id, placeholder, value, labell, timer, isEmail }) => {
  const [emailValid, setEmailValid] = useState(true);
  const [mytimer, setMyTimer] = useState("1:00")
  const [timeOut, setTimeout] = useState(false)

  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  const handleInputChange = (e) => {
    const email = e.target.value
    const isValid = validateEmail(email)

    setEmailValid(isValid)

    if (isValid) {
      isEmail(email)
      // start Timer 
      TimerMin(0, (time) => {
        setMyTimer(time)
        // checking if time is out
        if (time === "0:0") {
          setTimeout(true)
        }
      })
    }
  }

  return (
    <div className='inp-p'>
      {labell && <label htmlFor={id} className='inp-label'>{labell}</label>}
      <input id={id} className="inp" disabled={timeOut} type={type} value={value} placeholder={placeholder} onBlur={handleInputChange} />{timer && <div id='timer'>{mytimer}</div>}
      {/*
		<p class="helper helper1">email@domain.com1</p>
		<p class="helper helper2">email@domain.com2</p> */}
    </div>
  )
}
export default InputComp