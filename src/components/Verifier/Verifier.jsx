import InputComp from "../Input/InputComp";
import '../../index.css'
import { useState, useEffect } from 'react'
export default function Verifier({ id, timerin, getVerifedValue }) {
    let [timer, setTimer] = useState()

    useEffect(() => {
        if (timerin) {
            setTimer(true)
        } else {
            setTimer(false)
        }
    }, [timerin])
    
    const isValid = (validity) => {
        getVerifedValue(validity)
        if (validity) {
            setTimer(true)
        } else {
            setTimer(false)
        }
    }
    return (
        <>
            <InputComp id={id} className="inp" type='email' placeholder='Email Address' timer={timer} labell='Email' isEmail={isValid} />
        </>
    )
}