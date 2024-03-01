export default function UserBox({click,data}){
    onclickBox = ()=>{
        click()
    }
    return(
        <>
        <div className="userBox-container" onClick={onclickBox}>
        <div className="userBox-userName">{data.name}</div>
        </div>
        </>
    )
}