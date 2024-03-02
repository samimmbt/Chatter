import { useState } from "react"
export default function UserBox({ click, data }) {
    const [slected, setSelected] = useState(false)
    const onclickBox = () => {
        click()
        setSelected(slected ? false : true)
    }
    return (
        <div className={slected ? "userBox-container selected" : "userBox-container"} onClick={onclickBox}>
            <div className="userBox-userName">{data.name}</div>
        </div>
    )
}