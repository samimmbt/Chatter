import '../../index.css'
import { useState, useEffect } from 'react'
import { TimerMin } from '../Timer/Timer';
import Button from '../Button/Button';
import Alert from '../Bubble/Alert';
const InputComp = ({ inpData, callback}) => {
  let [mytimer, setMyTimer] = useState("01:00")
  let [emailValid, setEmailValid] = useState(false);
  let [timer, setTimer] = useState(false)
  let [email, setEmail] = useState(null)
  let [timeOut, setTimeout] = useState(false)
  const [alertMessage, setAlertMessage] = useState(null);
  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  const timerCode = () => {
    const userinp = document.getElementById(inpData().id).value
    const valid = validateEmail(userinp)

    if (valid) {
      setEmail(userinp)
      setEmailValid(valid)// set this to true
      const data = {
        email: email,
        istimeout: timeOut,
        valid: emailValid
      }
      console.log(data);
      callback(data)
      setTimer(true)

      // Start Timer 
      TimerMin(0, (time) => {
        setMyTimer(time)
        // checking if time is out
        if (time.match("0:0")) {
          setTimeout(true)
          data.istimeout = true
          setTimer(false)
          callback(data)
        }
      })
    }else{
      setAlertMessage("Invalid email address")
    }
    // if (timeOut) {

    // }
  }
  const removeError = (erorr)=>{
    if(erorr){
      setAlertMessage(null)
    }
  }

  return (
    <div className='inp-p_container'>
    <div className='inp-p'>
      {inpData().labell && <label htmlFor={inpData().id} className='inp-label'>{inpData().labell}</label>}
      <input id={inpData().id} className="inp" type={inpData().type} value={inpData().value} placeholder={inpData().placeholder} />
      {inpData().timer && <div id='timer'>{mytimer}</div>}
      {!inpData().timer && <Button value={timeOut ? "Resend" : "Send Code"} small={true} click={timerCode} />}
      {/*
		<p class="helper helper1">email@domain.com1</p>
		<p class="helper helper2">email@domain.com2</p> */}
    </div>
    {alertMessage && <Alert title='Error' message={alertMessage} duration={30} timeout={removeError}/>}
    </div>
  )
}
export default InputComp