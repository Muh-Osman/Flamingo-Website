import './HowItWorks.css'
import { HowItWorksItem } from '../../Components'


const HowItWorks = () => {
    return (
        <section className="how-it-works-section">
            <div className="how-it-works">

                <div className="how-it-works-title">How it works</div>

                <div className="how-box">

                    <HowItWorksItem />

                    {/* <div className="how one">
                        <img loading="lazy" src="images/how it works/1.jpg" alt="" />
                        <h2><mark>Try the latest technology before anyone.</mark></h2>
                    </div> */}

                    {/* <div className="how two">
                        <img loading="lazy" src="images/how it works/2.jpg" alt="" />
                        <h2><mark>Rent your electronics and earn money.</mark></h2>
                    </div> */}

                    {/* <div className="how three">
                        <img loading="lazy" src="images/how it works/3.jpg" alt="" />
                        <h2><mark>We save your right through our program.</mark></h2>
                    </div> */}

                </div>

                <div className="more-details-link">
                    <a href='/#'>More details</a>
                </div>

            </div>
        </section>
    )
}

export default HowItWorks