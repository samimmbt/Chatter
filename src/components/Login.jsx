import { Link } from "react-router-dom"
import Button from "./Button/Button"
import Verfier from "./Verifier/Verifier"
import { useState } from "react"
const Login = () => {
    const [emailin, setemailin] = useState()
    const [disabled, setDisabled] = useState()
    const [codeSent, setCodeSent] = useState(false)
    const sendCode = () => {
        setCodeSent(true)
    }
    const timer = (state) => {
        setDisabled(state)
    }
    const email = (value) => {
        setemailin(value)
        //get mail
    }
    const style = {
        h1: {
            textAlign: "center",
            fontSize: "6em"
        }
    }
    return (
        <div className="parent_parent">
            <h1 style={style.h1}>CHATTER</h1>
            <Verfier id="email" getVerifedValue={email} timeout={timer}/>
            <Button id="login" value='Login' click={sendCode} disable={disabled} />
            <h6 id="h6-login-signup">No account yet? <div className="link"><Link to={'../signup'}>Sing up</Link></div></h6>
        </div>
    )
}

export default Login