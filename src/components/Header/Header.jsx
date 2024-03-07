import BurgerMenu from "./BurgerMenu"

const Header = ({menuEvent}) => {

    return (
        <div id="header">
            <BurgerMenu open={menuEvent}/>
        </div>
    )
}
export default Header