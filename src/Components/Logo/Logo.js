import { Link } from 'react-router-dom'
import './Logo.css'


const Logo = () => {
    return (
        <div className="logo">
            <Link to="/" className="logo-link">Flaming
                <span className='parant-hashtag'>
                    <apan  className='first-hash'></apan>
                    <apan className='secound-hash'></apan>
                    <apan className='third-hash'></apan>
                    <apan className='fourth-hash'></apan>
                </span>
            </Link>
        </div>
    )
}

export default Logo