const BurgerMenu = ({open}) => {
    return (<>
        <input type="checkbox" id="checkbox" onChange={open}/>
        <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
        </label></>
    )
}
export default BurgerMenu