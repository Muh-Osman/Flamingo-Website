import './Header.css'
import { HeaderContainer, Logo, SearchBox, HeaderButtonContainer, DarkmodeToggle, Anchor } from '../../Components'

const Header = () => {
    return (

        <HeaderContainer>

            <Logo />

            <SearchBox />

            <HeaderButtonContainer>

                <DarkmodeToggle />

                <Anchor className='log-in-box' href='https://www.google.com/' title='Log in' />

                <Anchor className='sign-up-box' href='https://www.google.com/' title='Sign up' />

            </HeaderButtonContainer>

        </HeaderContainer>
    )
}

export default Header