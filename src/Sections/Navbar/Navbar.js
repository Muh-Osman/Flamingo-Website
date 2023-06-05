// React
import { useState, useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
// My components & Data
import './Navbar.css'
import { NavbarCategoryLink, Button, RentAnchor } from '../../Components'
import { svgIcon } from '../../Assets/Icons/svgIcon'
// Redux toolkit
import { useSelector, useDispatch } from "react-redux";
import { hideNavbarMoreBtn, selectNavbarBtn } from "../../rtk/slices/bigMoreBtn-slice";


const Navbar = () => {


    // Get URL then split it ex: (http://localhost:3000/phones/apple/2)
    let url = useLocation().pathname.split("/"); // ['...', 'phones', 'apple', '2']
    let [, category] = [...url];


    // Show Accessories category button in Navbar (for users who coming to accessories category useing direct link)
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        if (category === "accessories") {
            dispatch(hideNavbarMoreBtn())
        }
    }, [])

    // show/hide "More" Button & add "Accessories" Components
    const moreBtnState = useSelector(selectNavbarBtn);



    // Hide Notifiction Dot onClick
    const [isDot, setIsDot] = useState(true)

    useEffect(() => {
        isDot ? (
            document.getElementById('root').classList.remove('notif-dot')
        ) : (
            document.getElementById('root').classList.add('notif-dot')
        )
    }, [isDot])


    return (

        <nav>
            <div className="nav-box">

                {/* <!-- Min Navbar Icon --> */}
                <div className="mini-nav">

                    <Button className={'four-mini-nav'} accessibility={"Search"} title={svgIcon[0].svg} />
                    <Button className={'four-mini-nav'} accessibility={"User"} title={svgIcon[1].svg} />
                    <Button className={'four-mini-nav'} accessibility={"Loved"} title={svgIcon[2].svg} />
                    <Button className={'four-mini-nav not-dot'} accessibility={"Notification"} title={svgIcon[3].svg}
                        onClick={() => { setIsDot(false) }}
                    />



                    {/* Three dots icon (appears only in screen under 13 inch) */}
                    <div className="nine-dots-box">

                        <Button className={'nine-dots'} accessibility={"More"} title={svgIcon[4].svg} />

                        {/* <!-- Search icon in drop list --> */}
                        <div className="drop-list">
                            <Button accessibility={"Search"} title={svgIcon[0].svg} id={'search-icon-drop-nav'} />
                            <Button accessibility={"User"} title={svgIcon[1].svg} />
                            <Button accessibility={"Loved"} title={svgIcon[2].svg} />
                            <Button className={'not-dot'} accessibility={"Notification"} title={svgIcon[3].svg}
                                onClick={() => { setIsDot(false) }}
                            />
                        </div>

                    </div>

                </div>


                {/* <!-- Start Nav Categories --> */}
                <div className="categories-box">

                    <NavbarCategoryLink to={'/'} title={'Home'} cat={"home"} svg={svgIcon[5].svg} />
                    <NavbarCategoryLink to={'/phones'} title={'Phones'} cat={"phones"} svg={svgIcon[6].svg} />
                    <NavbarCategoryLink to={'/gaming'} title={'Gaming'} cat={"gaming"} svg={svgIcon[7].svg} />
                    <NavbarCategoryLink to={'/watches'} title={'Watches'} cat={"watches"} svg={svgIcon[8].svg} />
                    <NavbarCategoryLink to={'/cameras'} title={'Cameras'} cat={"cameras"} svg={svgIcon[9].svg} />
                    <NavbarCategoryLink to={'/computers'} title={'Computers'} cat={"computers"} svg={svgIcon[10].svg} />
                    <NavbarCategoryLink to={'/tablets'} title={'Tablets'} cat={"tablets"} svg={svgIcon[11].svg} />
                    <NavbarCategoryLink to={'/tvs'} title={'TVs'} cat={"tvs"} svg={svgIcon[12].svg} />


                    {/* Hide "More" Button & add Components */}

                    {
                        moreBtnState ? (
                            <NavbarCategoryLink to={'/accessories'} title={'Accessories'} cat={"accessories"} svg={svgIcon[13].svg} />
                        ) : (
                            // More Button in Nav
                            < Button onClick={() => dispatch(hideNavbarMoreBtn())} className='more-btn-nav-box' title='More' />
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