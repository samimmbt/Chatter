import InputComp from "../Input/InputComp";
import '../../index.css'
import { useState, useEffect } from 'react'
export default function Verifier({ id, getVerifedValue, timeout }) {
    let [getCode, setGetCode] = useState(false)
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
        getVerifedValue(e.email)
        timeout(e.isTimeout)
        setGetCode(e.isValid)
        console.log(e);
        // if (e.email.length >= 5) {
        //     setGetCode(true)
        // } else {
        //     setGetCode(false)
        // }
    };

    return (
        <>
            {!getCode && <InputComp className="inp" inpData={setData} callback={codeSent} />}
            {getCode && <InputComp className="inp code" inpData={setData1} callback={codeSent} />}
        </>
    )
}