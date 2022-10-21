import './ShelveConainer.css'

const ShelveConainer = (props) => {
    return (
        <div className="for-you shelves">
            <div className="shelve-cont">
                <div className="shelve-title">
                    <a href='https://www.google.com/'>For you</a>
                </div>
                <div className="items-scroller" tabIndex="0">

                    { props.children}

                </div>
            </div>
        </div>
    )
}

export default ShelveConainer