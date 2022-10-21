import './NewSectionContainer.css'

const NewSectionContainer = (props) => {
    return (
        <div className="shelves-down">
            <div className="shelve-title">
                <a href='/#'>{props.title}</a>
            </div>
            <div className="items-down-scroller" tabIndex="0">

            {props.children}

            </div>
        </div>
    )
}

export default NewSectionContainer