import { useState, useEffect } from 'react';
import { TimerSec } from "../Timer/Timer"

const Alert = ({ title, message, duration, timeout }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        let num = 100
        TimerSec(duration, (time) => {
            // let num = Math.round(Number(time))
            num = num - 10
            if (num === 0) {
                timeout(true)
            }
            setWidth(num);
        });
    }, [duration], [width]);
    let style = {
        width: `calc( ${width}%)`
    }

    return (
        <div className="alert">
            <div className="title">{title}</div>
            <div id="alertBox">{message}</div>
            <div className="timeline" style={style}></div>
        </div>
    )
}

export default Alert;
