import InputComp from "../Input/InputComp";
import '../../index.css'
import { useState, useEffect } from 'react'
import sendTo from './EmailHandler'
import gnerateCode from './code'
export default function Verifier({ id, timeout, codeEvent}) {
    const [getCode, setGetCode] = useState(false)
    const [code, setCode] = useState()
    const [usercode, setuserCode] = useState()
    const [mail, setmail] = useState()

    const data = {
        email: {
            type: "email",
            id: id,
            placeholder: "Email Address",
            labell: "Email",
            timer: false
        }, code: {
            type: "text",
            id: id,
            placeholder: "Code",
            labell: "Code",
            timer: true
        }
    }, setData = () => {
        return (data.email)
    }, setData1 = () => {
        return (data.code)
    };

    const codeSent = (e) => {

        timeout(e.isTimeout)
        setGetCode(e.isValid)
        if (!e.isTimeout && e.isValid) {
            const code = gnerateCode();
            setCode(code)
            sendTo(e.email,code) //send an random code to verifoed code
        }
        // console.log(e);
    };

    const setcodeEvent = (e) => {
        if (getCode) {
            codeEvent({
                input: e,
                main: code,
                email: mail
            })
        } else {
            // console.log(e);
            setmail(e)
        }
    }
    return (
        <>
            {!getCode && <InputComp className="inp" inpData={setData} callback={codeSent} val={setcodeEvent} />}
            {getCode && <InputComp className="inp code" inpData={setData1} callback={codeSent} val={setcodeEvent} />}
        </>
    )
}