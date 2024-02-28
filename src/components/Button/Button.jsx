let Button = ({id,value,click,disable,small})=>{
    const handelClick = ()=>{
        click()
    }
return (
    <div className="inp-btn-p">
        {<input id={id} className={small? "inp-btn-small":"inp-btn"} value={value} type="button" onClick={handelClick} disabled={disable}/>}
    </div>
)
}

export default Button