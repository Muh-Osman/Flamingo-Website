import './Header.css'
import { HeaderContainer, Logo, SearchBox, HeaderButtonContainer, DarkmodeToggle, HeaderButton } from '../../Components'

const Header = () => {
    return (

        <HeaderContainer>

            <Logo />

            <SearchBox />

            <HeaderButtonContainer>

                <DarkmodeToggle />

                <HeaderButton className='log-in-box'>
                    <a href='https://www.google.com/'>Log in</a>
                </HeaderButton>

                <HeaderButton className='sign-up-box'>
                    <a href='https://www.google.com/'>Sign up</a>
                </HeaderButton>

            </HeaderButtonContainer>

        </HeaderContainer>
    )
}

export default Header