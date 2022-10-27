import './Button.css'

const Button = (props) => {
    return (

        <div className={props.className}>
            <button id={props.id}>{props.title}</button>
        </div>

    )
}

export default Button