import './NewSectionContainer.css'
import Anchor from '../Anchor/Anchor'


const NewSectionContainer = (props) => {
    return (
        <div className="shelves-down">

            <Anchor className="shelve-title" href={props.href} title={props.title} />

            <div className="items-down-scroller" tabIndex="0">

                {props.children}

            </div>
        </div>
    )
}

export default NewSectionContainer