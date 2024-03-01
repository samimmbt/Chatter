import InputComp from "./Input/InputComp"
import Button from "./Button/Button"
import Verfier from "./Verifier/Verifier"
import { useState, useEffect } from "react"
import sendTo from './Verifier/EmailHandler'
import { Link } from "react-router-dom"
const Signup = () => {
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
    const style = {
        h1: {
            textAlign: "center",
            fontSize: "6em"
        },
        h6: {
            marginLeft: "8%"
        }
    }

    const sendCode = () => {
        setCodeSent(true)
        sendTo().then().catch();
    }
    const timer = (state) => {
        setDisabled(state)
        console.log(state);
    }
    const email = (value) => {
        setemailin(value)
        //get mail
    }
    return (
        <>
            <div className="parent_parent">
                <h1 style={style.h1}>CHATTER</h1>
                <Verfier id="email" getVerifedValue={email} timeout={timer} />
                <Button id="signin" value='SignIN'/* click={singIn} */ disable={disabled} />
                <h6 id="h6-login-signup"><div className="link"><Link to={'../'}>Login</Link></div> Here! </h6>
            </div>
        </>
    )
}

export default Signup