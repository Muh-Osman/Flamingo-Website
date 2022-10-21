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
                    <a href='/#'>Log in</a>
                </HeaderButton>

                <HeaderButton className='sign-up-box'>
                    <a href='/#'>Sign up</a>
                </HeaderButton>

            </HeaderButtonContainer>

        </HeaderContainer>
    )
}

export default Header