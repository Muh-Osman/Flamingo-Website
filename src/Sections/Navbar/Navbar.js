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







                    {/* <!-- Three dots icon (appears only in screen under 13 inch) --> */}
                    <div className="nine-dots-box">

                        <div aria-label="More" title="More" className="nine-dots">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" data-testid="category-menu-icon">
                                <path
                                    d="M7.58594 7.21875C7.2207 7.69336 6.64648 8 6 8C5.54883 8 5.13281 7.85156 4.79688 7.59961C4.3125 7.23438 4 6.6543 4 6C4 4.89453 4.89453 4 6 4C7.10547 4 8 4.89453 8 6C8 6.45898 7.8457 6.88281 7.58594 7.21875Z"
                                    className="group-one"></path>
                                <path
                                    d="M13.5859 7.21875C13.2207 7.69336 12.6465 8 12 8C11.5488 8 11.1328 7.85156 10.7969 7.59961C10.3125 7.23438 10 6.6543 10 6C10 4.89453 10.8945 4 12 4C13.1055 4 14 4.89453 14 6C14 6.45898 13.8457 6.88281 13.5859 7.21875Z"
                                    className="group-one"></path>
                                <path
                                    d="M19.5859 7.21875C19.2207 7.69336 18.6465 8 18 8C17.5488 8 17.1328 7.85156 16.7969 7.59961C16.3125 7.23438 16 6.6543 16 6C16 4.89453 16.8945 4 18 4C19.1055 4 20 4.89453 20 6C20 6.45898 19.8457 6.88281 19.5859 7.21875Z"
                                    className="group-one"></path>
                                <path
                                    d="M8 12C8 13.1055 7.10547 14 6 14C4.89453 14 4 13.1055 4 12C4 10.8945 4.89453 10 6 10C6.64062 10 7.21094 10.3008 7.57617 10.7695C7.8418 11.1094 8 11.5352 8 12Z"
                                    className="group-two"></path>
                                <path
                                    d="M14 12C14 13.1055 13.1055 14 12 14C10.8945 14 10 13.1055 10 12C10 10.8945 10.8945 10 12 10C12.6406 10 13.2109 10.3008 13.5762 10.7695C13.8418 11.1094 14 11.5352 14 12Z"
                                    className="group-two"></path>
                                <path
                                    d="M20 12C20 13.1055 19.1055 14 18 14C16.8945 14 16 13.1055 16 12C16 10.8945 16.8945 10 18 10C18.6406 10 19.2109 10.3008 19.5762 10.7695C19.8418 11.1094 20 11.5352 20 12Z"
                                    className="group-two"></path>
                                <path
                                    d="M7.70117 19.0527C7.89062 18.748 8 18.3867 8 18C8 16.8945 7.10547 16 6 16C4.89453 16 4 16.8945 4 18C4 19.1055 4.89453 20 6 20C6.71875 20 7.34961 19.6211 7.70117 19.0527Z"
                                    className="group-three"></path>
                                <path
                                    d="M13.7012 19.0527C13.8906 18.748 14 18.3867 14 18C14 16.8945 13.1055 16 12 16C10.8945 16 10 16.8945 10 18C10 19.1055 10.8945 20 12 20C12.7188 20 13.3496 19.6211 13.7012 19.0527Z"
                                    className="group-three"></path>
                                <path
                                    d="M19.7012 19.0527C19.8906 18.748 20 18.3867 20 18C20 16.8945 19.1055 16 18 16C16.8945 16 16 16.8945 16 18C16 19.1055 16.8945 20 18 20C18.7188 20 19.3496 19.6211 19.7012 19.0527Z"
                                    className="group-three"></path>
                            </svg>
                        </div>

                        {/* <!-- Search icon in drop list --> */}
                        <div className="drop-list">

                            <div aria-label="Search" title="Search" className="">
                                <a className="search-icon-drop-nav" href='https://www.google.com/'>
                                    <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                                </a>
                            </div>

                            {/* <!-- User icon in drop list --> */}
                            <div aria-label="User" title="User" className="">
                                <a href='https://www.google.com/'>
                                    <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"></path></g></svg>
                                </a>
                            </div>

                            {/* <!-- Love icon in drop list --> */}
                            <div aria-label="Loved" title="Loved" className="">
                                <a href='https://www.google.com/'>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.3783 5.88622C9.66902 4.10486 6.79049 4.0794 4.92308 5.90387C4.91717 5.90965 4.91116 5.91534 4.90506 5.92092C3.09331 7.58038 3.06654 10.3577 4.92308 12.1716L4.92796 12.1763L11.9374 19.1469L19.0769 12.1716C19.0828 12.1658 19.0888 12.1601 19.0949 12.1545C20.9067 10.495 20.9335 7.71772 19.0769 5.90387C17.2195 4.08919 14.3268 4.08919 12.4694 5.90387C12.3227 6.04722 12.125 6.12596 11.9202 6.12264C11.7154 6.11933 11.5204 6.03424 11.3783 5.88622ZM11.9465 4.31813C9.59468 2.40387 6.12292 2.58601 3.85838 4.79012C1.36802 7.08049 1.39686 10.8778 3.84702 13.2742C3.84785 13.275 3.84869 13.2759 3.84952 13.2767L11.391 20.7763C11.689 21.0727 12.1688 21.0748 12.4694 20.7811L20.1419 13.2851C22.6328 10.9939 22.603 7.19491 20.1505 4.79876C17.8724 2.57305 14.397 2.41284 11.9465 4.31813Z" />
                                    </svg>
                                </a>
                            </div>

                            {/* <!-- Notification icon in drop list --> */}
                            <div aria-label="Notification" title="Notification" className="">
                                <a href='https://www.google.com/'>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.45936 7.47338C5.38513 4.15829 8.53385 2 12 2C15.4661 2 18.6149 4.15829 19.5406 7.47338C19.7632 8.27041 19.9705 9.07181 20.1262 9.78929C20.4897 11.4638 20.7927 13.6989 20.9801 15.2464C21.1565 16.7027 20.1399 18.0373 18.6471 18.271C16.8578 18.5511 14.0966 18.9231 12 18.9231C9.90339 18.9231 7.14215 18.5511 5.35286 18.271C3.86011 18.0373 2.84345 16.7027 3.01986 15.2464C3.20731 13.6989 3.51032 11.4638 3.87376 9.78929C4.02949 9.07181 4.23678 8.27041 4.45936 7.47338ZM12 3.53846C9.18994 3.53846 6.70482 5.28252 5.98001 7.87798C5.76175 8.65952 5.56284 9.43008 5.41567 10.1082C5.0683 11.7085 4.77207 13.8834 4.58509 15.427C4.50681 16.0733 4.95347 16.6503 5.60249 16.7519C7.38794 17.0315 10.0404 17.3846 12 17.3846C13.9596 17.3846 16.6121 17.0315 18.3975 16.7519C19.0465 16.6503 19.4932 16.0733 19.4149 15.427C19.2279 13.8834 18.9317 11.7085 18.5843 10.1082C18.4372 9.43008 18.2382 8.65952 18.02 7.87798C17.2952 5.28252 14.8101 3.53846 12 3.53846Z" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.89849 17.3846C10.3337 17.3846 10.6866 17.729 10.6866 18.1538V19.1795C10.6866 19.8875 11.2746 20.4615 12 20.4615C12.7254 20.4615 13.3134 19.8875 13.3134 19.1795V18.1538C13.3134 17.729 13.6663 17.3846 14.1015 17.3846C14.5367 17.3846 14.8896 17.729 14.8896 18.1538V19.1795C14.8896 20.7372 13.5959 22 12 22C10.4041 22 9.11042 20.7372 9.11042 19.1795V18.1538C9.11042 17.729 9.46325 17.3846 9.89849 17.3846Z" />
                                    </svg>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>


                {/* <!-- Start Nav Categories --> */}
                <div className="categories-box">

                    <NavbarCategoryLink to={'/'} title={'Home'} svg={IconsData[4].svg} />
                    <NavbarCategoryLink to={'/phones'} title={'Phones'} svg={IconsData[5].svg} />
                    <NavbarCategoryLink to={'/gaming'} title={'Gaming'} svg={IconsData[6].svg} />
                    <NavbarCategoryLink to={'/watches'} title={'Watches'} svg={IconsData[7].svg} />
                    <NavbarCategoryLink to={'/cameras'} title={'Cameras'} svg={IconsData[8].svg} />
                    <NavbarCategoryLink to={'/computers'} title={'Computers'} svg={IconsData[9].svg} />
                    <NavbarCategoryLink to={'/tablets'} title={'Tablets'} svg={IconsData[10].svg} />
                    <NavbarCategoryLink to={'/tvs'} title={'TVs'} svg={IconsData[11].svg} />


                    {/* Hide Big more Button & add components */}

                    {
                        state ? (
                            <NavbarCategoryLink to={'/tools'} title={'Tools'} svg={IconsData[12].svg} />
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