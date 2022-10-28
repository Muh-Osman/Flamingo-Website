import './Button.css'

const Button = (props) => {
    return (

        <div className={props.className}>
            <button onClick={props.onClick} id={props.id}>{props.title}</button>
        </div>

    )
}

export default Button