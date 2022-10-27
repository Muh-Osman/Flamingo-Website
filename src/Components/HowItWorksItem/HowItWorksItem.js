import './HowItWorksItem.css'

const HowItWorksItem = (props) => {
    return (
        <div className={`how ` + props.className}>
            <img loading="lazy" src={props.src} alt={props.alt} />
            <h2><mark>{props.title}</mark></h2>
        </div>
    )
}

export default HowItWorksItem