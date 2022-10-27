import { Link } from 'react-router-dom'
import './Anchor.css'


const Anchor = (props) => {
    return (
        <div className={props.className}>
            <a href={props.href} id={props.id}>{props.title}</a>
        </div>
    )
}

export default Anchor