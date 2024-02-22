import Button from "./Button/Button"
import InputComp from "./Input/InputComp"
import Verfier from "./Verifier/Verifier"
import sendTo from './Verifier/EmailHandler'
import { useState } from "react"
const Login = () => {
    const [emailin, setemailin] = useState()
    // const sendCode = ()=>{
    //     sendTo()
    // }

    const email = (value) => {
        console.log(value);
        setemailin(value)
        
    }
    const style = {
        h1: {
            textAlign: "center",
            fontSize: "6em"
        }
    }
    return (
        <>
            <h1 style={style.h1}>CHATTER</h1>
            <Verfier id="email" getVerifedValue={email} />
            <Button id="login" value='Login' />
            <h6 id="h6-login-signup">No account yet? <div className="link">Sing up</div></h6>
        </>
    )
}

export default Login