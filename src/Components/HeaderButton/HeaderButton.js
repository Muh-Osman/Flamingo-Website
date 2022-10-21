import './HeaderButton.css'

const HeaderButton = (props) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

export default HeaderButton