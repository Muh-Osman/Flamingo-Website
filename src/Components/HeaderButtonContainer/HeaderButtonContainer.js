import './HeaderButtonContainer.css'

const HeaderButtonContainer = (props) => {
  return (
    <div className="btn-box">
        {props.children}
    </div>
  )
}

export default HeaderButtonContainer