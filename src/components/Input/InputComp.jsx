import '../../index.css'
import { useState, useEffect } from 'react'
import { TimerMin } from '../Timer/Timer';
import Button from '../Button/Button';
import Alert from '../Bubble/Alert';
const InputComp = ({ inpData, callback, val }) => {
  let [mytimer, setMyTimer] = useState("01:00")
  let [validEmail, setValidEmail] = useState(false);
  let [email, setEmail] = useState(null)
  let [inputvalue, setinputValue] = useState()
  let [isTimeout, setIsTimeout] = useState(false)
  const [alertMessage, setAlertMessage] = useState(null);
  const [buttonText, setButtonText] = useState("Send Code");

  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  const timerCode = () => {
    const isValidEmail = validateEmail(inputvalue);
    // console.log(isValidEmail,userInput);
    if (isValidEmail) {
      setEmail(inputvalue);
      setValidEmail(true);
      setButtonText('resend')
      // const data = {
      //     email: userInput,
      //     isTimeout: isTimeout,
      //     isValid: validEmail
      // };

      // callback(data); // Send email and timer status to parent component
    } else {
      setAlertMessage("Invalid email address");
      // Additional error handling if needed
    }
  };

  useEffect(() => {
    if (inpData().timer) {
      TimerMin(0, (time) => { // Timer duration set to 1 minute (60 seconds)
        setMyTimer(time);
        if (time === "00:00") {
          setIsTimeout(true);
          const data = {
            email: email,
            isTimeout: isTimeout,
            isValid: validEmail
          };
          data.isTimeout = true;
          callback(data);
        }
      });
    }
  }, [inpData(), callback, isTimeout]);

  useEffect(() => {
    if (validEmail && !isTimeout) {
      const data = {
        email: email,
        isTimeout: isTimeout,
        isValid: validEmail
      };
      callback(data);
    }
  }, [validEmail, email, isTimeout, callback]);

  const removeError = (erorr) => {
    if (erorr) {
      setAlertMessage(null)
    }
  }

  return (
    <div className='inp-p_container'>
      <div className='inp-p'>
        {inpData().labell && <label htmlFor={inpData().id} className='inp-label'>{inpData().labell}</label>}

        <input id={inpData().id} className="inp" type={inpData().type} value={inpData().value} onBlur={e => { setinputValue(e.target.value); val(e.target.value) }} placeholder={inpData().placeholder} />
        {inpData().timer && <div id='timer'>{mytimer}</div>/*Show timer instead of button */}
        {!inpData().timer && <Button value={buttonText} small={true} click={timerCode} />}
      </div>{alertMessage && <Alert title='Error' message={alertMessage} duration={20} timeout={removeError} />}
    </div>
  )
}
export default InputComp