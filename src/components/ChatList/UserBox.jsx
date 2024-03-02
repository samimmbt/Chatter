import { useState } from "react"
export default function UserBox({ click, data ,selected}) {
   
    const onclickBox = () => {
        click(data.name)
    }
    return (
        <div className={selected ? "userBox-container selected" : "userBox-container"} onClick={onclickBox}>
            <div className="userBox-userName">{data.name}</div>
        </div>
    )
}