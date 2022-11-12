import { NavLink } from 'react-router-dom'
import './NavbarCategoryLink.css'


const NavbarCategoryLink = (props) => {
    return (
        <NavLink to={props.to}>
            <div className="cat">
                <div aria-label={props.title} title={props.title}>
                    {props.svg}
                </div>
                <div className="text">{props.title}</div>
            </div>
        </NavLink>
    )
}

export default NavbarCategoryLink