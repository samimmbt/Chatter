const Menu = ({ menuEvent,itemEvent}) => {
    let i = 0;
    const items = [
        {name:'settings'},
        {name:'About Chatter'}
]
    return (
        <>
            <div className="menuBackground" onClick={menuEvent}>
            </div>
            <div className="menuPage">
            {items.map((item)=>{
                i++
                return (
                    <div key={i} className="menuItem" onClick={(e)=>itemEvent(e.target.innerText)}>{item.name}</div>
                )
            })}
            </div>
        </>
    )
}
export default Menu