import './ItemShelves.css'

import { motion } from "framer-motion"
import { it } from '../../animation'

const ItemShelves = (props) => {

    return (
        <motion.div variants={it}>
            <a href={props.href} className={props.className}>
                <div className="img-of-item">
                    <img src={props.imgSrc} alt={props.imgAlt} />
                </div>
                <div className="item-description">
                    <h4>{props.itemDescription}</h4>
                    <h5>
                        <span className="price">{props.price}</span>
                        <span className="currency">{props.currency}</span>
                        <span className="week">{`/` + props.period}</span>
                    </h5>
                </div>
            </a>
        </motion.div>

    )
}

export default ItemShelves