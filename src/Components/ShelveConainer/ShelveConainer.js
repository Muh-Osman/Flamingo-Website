import './ShelveConainer.css'
import { Anchor } from '../../Components'


const ShelveConainer = (props) => {

    return (
        <div className="shelves">
            <div className="shelve-cont">

                <Anchor className='shelve-title' href={props.href} title={props.title} />

                <div className="items-scroller" tabIndex="0">

                    {props.children}

                </div>
            </div>
        </div>
    )
}

export default ShelveConainer