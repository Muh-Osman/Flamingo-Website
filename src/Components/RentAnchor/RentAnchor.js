import { Link } from 'react-router-dom'
import IconsData from '../../Assets/Icons/IconsData'

import './RentAnchor.css'

const RentAnchor = () => {
    return (

        <div className="rent-btn-nav-box">

            {/* <!-- Rent Button text appear in > 13 inch screen --> */}
            <Link to='https://www.google.com/' className="rent-btn-text" id="rent">Rent</Link>

            {/* <!-- Rent Button icon appear in < 13 inch screen --> */}
            <Link to='https://www.google.com/' className="rent-btn-icon" aria-label="Rent" title="Rent">
                {IconsData[14].svg}
            </Link>

        </div>

    )
}

export default RentAnchor