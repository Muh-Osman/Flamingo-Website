import './HeaderContainer.css'

const HeaderContainer = (props) => {
    return (
        <header>
            <div className="container-box">
                {props.children}
            </div>
        </header>
    )
}

export default HeaderContainer