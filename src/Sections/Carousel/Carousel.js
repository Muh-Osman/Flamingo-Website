import CarouselOne from '../../Assets/Images/Carousel/1.webp'
import CarouselTwo from '../../Assets/Images/Carousel/2.webp'
import CarouselThree from '../../Assets/Images/Carousel/3.webp'
import './Carousel.css'


const Carousel = () => {
    return (
        <section className="img-box">

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                {/* <!-- Carousel indicators --> */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active" aria-current="true" aria-label="Slide 1">
                        <span></span>
                    </button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2">
                        <span></span>
                    </button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3">
                        <span></span>
                    </button>
                </div>
                {/* <!-- Carousel images --> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={CarouselOne} className="" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src={CarouselTwo} className="" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src={CarouselThree} className="" alt="" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Carousel