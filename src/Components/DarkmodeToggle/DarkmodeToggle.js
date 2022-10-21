import './DarkmodeToggle.css'

const DarkmodeToggle = () => {
    return (
        <div className="dark-box">
            <input type="checkbox" className="dark dark-mode-toggle" id="dark-mode-toggle" />
            <label className="slider" htmlFor="dark-mode-toggle">
                <div className="before"></div>
            </label>
        </div>
    )
}

export default DarkmodeToggle