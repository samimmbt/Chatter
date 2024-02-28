import InputComp from "./Input/InputComp"

const Signup = () => {
    return (
        <>
        <div className="parent_parent">
            <h1 style={style.h1}>CHATTER</h1>
            <Verfier id="email" getVerifedValue={email} timeout={timer}/>
            <Button id="signin" value='SignIN' click={singIn} disable={disabled} />
            <h6 id="h6-login-signup"><div className="link">LogIn</div> Here! </h6>
        </div>
        </>
    )
}

export default Signup