import { Anchor } from '../../Components'
import './ShelveConainer.css'

const ShelveConainer = (props) => {
    return (
        <div className="shelves">
            <div className="shelve-cont">


                <Anchor onClick={props.onClick} className='shelve-title' href={props.href} title={props.title} />

                <div className="items-scroller" tabIndex="0">

                    {props.children}

                </div>
            </div>
        </div>
    )
}

export default ShelveConainer