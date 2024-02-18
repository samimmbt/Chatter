import InputComp from "../Input/InputComp";
import '../../index.css'
import { useState, useEffect } from 'react'
export default function Verifier({id, timerin}) {
    let [timer, setTimer] = useState()

    useEffect(() => {
        if (timerin) {
            setTimer(true)
        }else{
            setTimer(false)
        }
    }, [timerin])

    return(
        <>
            <InputComp id={id} className="inp" type='email' placeholder='Email Address' timer={timer} labell='Email' />
        </>
    )
}