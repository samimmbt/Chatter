import { Link, useNavigate } from "react-router-dom"
import Button from "./Button/Button"
import Verfier from "./Verifier/Verifier"
import { useState, useEffect } from "react"
import socketIO from 'socket.io-client';
// const socket = socketIO.connect('http://localhost:3000');
const Login = ({ socket }) => {
    const [disabled, setDisabled] = useState(true)
    const [codeSent, setCodeSent] = useState()
    const [mail, setmail] = useState()
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
        // console.log('clicke');
        if (codeSent.input === codeSent.main + '') {
            // console.log('clicke1');
            localStorage.setItem('profile', true)
            navigate('/profile', {
                 state: { value:  codeSent.email }
                })
        }
    }
    const codeData = (v) => {
        setCodeSent(v)
        console.log(v);
    }


    const timer = (state) => {
        setDisabled(state)
        // console.log(state);
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
            <Verfier id="email" timeout={timer} codeEvent={codeData} />
            <Button id="login" value='Login' click={sendCode} disable={disabled} />
            <h6 id="h6-login-signup" style={style.h6}>
                <p>No account yet?-
                    <div className="link"><Link to={'signup'}> Sing up</Link>
                    </div></p>
            </h6>
        </div>
    )
}

export default Login