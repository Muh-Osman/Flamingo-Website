import { Link } from 'react-router-dom'
import './Logo.css'


const Logo = () => {
    return (
        <div className="logo">
            <Link to="/" className="logo-link" translate="no">Flamingo</Link>
        </div>
    )
}

export default Logo