import { Link } from 'react-router-dom'
import './Anchor.css'


const Anchor = (props) => {

    return (
        <div className={props.className}>
            <Link onClick={props.onClick} to={props.href} id={props.id}>{props.title}</Link>
        </div>
    )
}

export default Anchor