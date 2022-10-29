import './ShelvesBox.css'

const ShelvesBox = (props) => {
    return (
        
        <section className="shelves-box">
            <div className="contin-product">

                {props.children}

            </div>
        </section>

    )
}

export default ShelvesBox