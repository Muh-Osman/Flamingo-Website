import { Link } from 'react-router-dom'
import './Anchor.css'


const Anchor = (props) => {

    return (
        <div className={props.className}>
            <Link to={props.href} className={props.aClassName}>{props.title}</Link>
        </div>
    )
}

export default Anchor