import './ItemShelves.css'

const ItemShelves = () => {
    return (
        <div>
            <a href='https://www.google.com/' className="item-cards">
                <div className="img-of-item">
                    <img src="images/product images/for you/ps5.jpg" alt="" />
                </div>
                <div className="item-description">
                    <h4>Sony PlayStation 5 DualSense Controller with DualSense Controller</h4>
                    <h5>
                        <span className="price">99</span>
                        <span className="currency">SAR</span>
                        <span className="week">/week</span>
                    </h5>
                </div>
            </a>
        </div>
    )
}

export default ItemShelves