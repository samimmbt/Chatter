import { Link,useNavigate } from "react-router-dom"
import Button from "./Button/Button"
import Verfier from "./Verifier/Verifier"
import { useState,useEffect } from "react"
import socketIO from 'socket.io-client';
// const socket = socketIO.connect('http://localhost:3000');
const Login = () => {
    const [emailin, setemailin] = useState()
    const [disabled, setDisabled] = useState(true)
    const [codeSent, setCodeSent] = useState(false)
    const usr = localStorage.getItem('usr');
    const userObj = JSON.parse(usr);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userObj || !userObj.logged) {
            console.log('Not logged in');
            navigate('/'); // Redirect to login page
        } else {
            console.log('User is logged in');
            navigate('/app');
        }
    }, []);
    const sendCode = () => {
        setCodeSent(true)
    }
    const timer = (state) => {
        setDisabled(state)
        console.log(state);
    }
    const email = (value) => {
        setemailin(value)
        //get mail
    }
    const style = {
        h1: {
            textAlign: "center",
            fontSize: "6em"
        },
        h6: {
            marginLeft: "8%"
        }
    }
    return (
        <div className="parent_parent">
            <h1 style={style.h1}>CHATTER</h1>
            <Verfier id="email" getVerifedValue={email} timeout={timer} />
            {emailin && <Button id="login" value='Login' click={sendCode} disable={disabled} />}
            <h6 id="h6-login-signup" style={style.h6}>No account yet? <div className="link"><Link to={'signup'}>Sing up</Link></div></h6>
        </div>
    )
}

export default Login