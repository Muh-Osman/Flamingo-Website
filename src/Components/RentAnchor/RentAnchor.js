import './RentAnchor.css'

const RentAnchor = () => {
    return (

        <div className="rent-btn-nav-box">

            {/* <!-- Rent Button text appear in > 13 inch screen --> */}
            <a className="rent-btn-text" href='https://www.google.com/' id="rent">Rent</a>

            {/* <!-- Rent Button icon appear in < 13 inch screen --> */}
            <a className="rent-btn-icon" href='https://www.google.com/' aria-label="Rent" title="Rent">
                <svg viewBox="0 0 448 512">
                    <path d="M384 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zM224 368c13.3 0 24-10.7 24-24v-64h64c13.3 0 24-10.7 24-24s-10.7-24-24-24h-64v-64c0-13.3-10.7-24-24-24s-24 10.7-24 24v64h-64c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64c0 13.3 10.7 24 24 24z"></path>
                </svg>
            </a>

        </div>

    )
}

export default RentAnchor