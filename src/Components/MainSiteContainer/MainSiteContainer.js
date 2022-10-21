import './MainSiteContainer.css'

const MainSiteContainer = (props) => {
    return (
        <section className="body-site">
            {props.children}
        </section>
    )
}

export default MainSiteContainer