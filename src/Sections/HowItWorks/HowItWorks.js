import { HowItWorksItem, Anchor } from '../../Components'
import How1 from '../../Assets/Images/how it works/1.jpg'
import How2 from '../../Assets/Images/how it works/2.jpg'
import How3 from '../../Assets/Images/how it works/3.jpg'
import './HowItWorks.css'


const HowItWorks = () => {
    return (
        <section className="how-it-works-section">
            <div className="how-it-works">

                <h4 className="how-it-works-title">How it works</h4>

                <div className="how-box">

                    <HowItWorksItem
                        className='one'
                        src={How1}
                        alt=''
                        title='Try the latest technology before anyone.'
                    />

                    <HowItWorksItem
                        className='two'
                        src={How2}
                        alt=''
                        title='Rent your electronics and earn money.'
                    />

                    <HowItWorksItem
                        className='three'
                        src={How3}
                        alt=''
                        title='We save your right through our program.'
                    />

                </div>

                <Anchor className='more-details-link' href='https://www.google.com/' title='More details' />

            </div>
        </section>
    )
}

export default HowItWorks