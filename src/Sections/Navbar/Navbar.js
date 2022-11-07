import { useState } from 'react'

import { NavbarCategoryLink, Button, RentAnchor } from '../../Components'
import IconsData from '../../Assets/Icons/IconsData'
import './Navbar.css'


const Navbar = () => {



    // Hide More Button & add components
    const [state, setState] = useState(false)


    return (

        <nav>
            <div className="nav-box">

                {/* <!-- Min Navbar Icon --> */}
                <div className="mini-nav">

                    <Button className={'four-mini-nav'} accessibility={"Search"} title={IconsData[0].svg} />
                    <Button className={'four-mini-nav'} accessibility={"User"} title={IconsData[1].svg} />
                    <Button className={'four-mini-nav'} accessibility={"Loved"} title={IconsData[2].svg} />
                    <Button className={'four-mini-nav'} accessibility={"Notification"} title={IconsData[3].svg} />


                    {/* Three dots icon (appears only in screen under 13 inch) */}
                    <div className="nine-dots-box">

                        <Button className={'nine-dots'} accessibility={"More"} title={IconsData[4].svg} />

                        {/* <!-- Search icon in drop list --> */}
                        <div className="drop-list">
                            <Button accessibility={"Search"} title={IconsData[0].svg} id={'search-icon-drop-nav'} />
                            <Button accessibility={"User"} title={IconsData[1].svg} />
                            <Button accessibility={"Loved"} title={IconsData[2].svg} />
                            <Button accessibility={"Notification"} title={IconsData[3].svg} />
                        </div>

                    </div>

                </div>


                {/* <!-- Start Nav Categories --> */}
                <div className="categories-box">

                    <NavbarCategoryLink to={'/'} title={'Home'} svg={IconsData[5].svg} />
                    <NavbarCategoryLink to={'/phones'} title={'Phones'} svg={IconsData[6].svg} />
                    <NavbarCategoryLink to={'/gaming'} title={'Gaming'} svg={IconsData[7].svg} />
                    <NavbarCategoryLink to={'/watches'} title={'Watches'} svg={IconsData[8].svg} />
                    <NavbarCategoryLink to={'/cameras'} title={'Cameras'} svg={IconsData[9].svg} />
                    <NavbarCategoryLink to={'/computers'} title={'Computers'} svg={IconsData[10].svg} />
                    <NavbarCategoryLink to={'/tablets'} title={'Tablets'} svg={IconsData[11].svg} />
                    <NavbarCategoryLink to={'/tvs'} title={'TVs'} svg={IconsData[12].svg} />


                    {/* Hide Big more Button & add components */}

                    {
                        state ? (
                            <NavbarCategoryLink to={'/tools'} title={'Tools'} svg={IconsData[13].svg} />
                        ) : (
                            // More Button in Nav
                            < Button onClick={() => setState(true)} className='more-btn-nav-box' title='More' />
                        )
                    }


                    {/* Rent Button */}
                    <RentAnchor />

                </div>

            </div>
        </nav >
    )
}

export default Navbar