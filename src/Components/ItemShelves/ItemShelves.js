import './ItemShelves.css'

const ItemShelves = (props) => {

    return (
        <div>
            <a href={props.href} className={props.className}>
                <div className="img-of-item">
                    <img loading="lazy" src={props.imgSrc} alt={props.imgAlt} />
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
        </div>
    )
}

export default ItemShelves