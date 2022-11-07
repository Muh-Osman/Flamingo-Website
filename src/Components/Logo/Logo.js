import { Link } from 'react-router-dom'
import './Logo.css'


const Logo = () => {
    return (
        <div className="logo">
            <Link to="/" className="logo-link">Flaming
                <span className='parant-hashtag'>
                    <span  className='first-hash'></span>
                    <span className='secound-hash'></span>
                    <span className='third-hash'></span>
                    <span className='fourth-hash'></span>
                </span>
            </Link>
        </div>
    )
}

export default Logo