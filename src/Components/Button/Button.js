

import './Button.css'

const Button = (props) => {
    return (
        <div className={props.className}>
            <button
                id={props.id}
                onClick={props.onClick}
                title={props.accessibility}
                aria-label={props.accessibility}
            >
                {props.title}
            </button>
        </div>
    )
}

export default Button