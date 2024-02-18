import Button from "./Button/Button"
import InputComp from "./Input/InputComp"
import Verfier from "./Verifier/Verifier"
const Login = ()=>{
    return (
        <>
        <Verfier id="email"/>
        <Button id="login" value='Login'/>
        <h6 id="h6-login-signup">No account yet? <div className="link">Sing up</div></h6>
        </>
    )
}

export default Login