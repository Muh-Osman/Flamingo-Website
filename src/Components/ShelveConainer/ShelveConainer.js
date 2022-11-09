import { motion } from "framer-motion"
import { cont } from '../../animation'

import { Anchor } from '../../Components'

import './ShelveConainer.css'

const ShelveConainer = (props) => {
    return (
        <motion.div
            variants={cont}
            initial='hidden'
            animate='show'

            className="shelves"
        >
            <div className="shelve-cont">


                <Anchor className='shelve-title' href={props.href} title={props.title} />

                <div className="items-scroller" tabIndex="0">

                    {props.children}

                </div>
            </div>
        </motion.div>
    )
}

export default ShelveConainer