import { Link } from 'react-router-dom'
import './Anchor.css'


const Anchor = (props) => {

    return (
        <div className={props.className}>

            <Link to={props.href}
                className={props.aClassName}
                id={props.id}
                aria-label={props.accessibility} title={props.accessibility}
            >
                {props.title}
            </Link>

        </div>
    )
}

export default Anchor