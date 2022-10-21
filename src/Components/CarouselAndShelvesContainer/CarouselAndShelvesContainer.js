import './CarouselAndShelvesContainer.css'

const CarouselAndShelvesContainer = (props) => {
    return (
        <section className="carousel-section">
            {props.children}
        </section>
    )
}

export default CarouselAndShelvesContainer