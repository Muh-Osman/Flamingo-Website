import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    return (
        <nav>

            <div className="nav-box">
                {/* <!-- Mini Notification Box --> */}
                <div className="mini-nav">
                    {/* <!-- Search icon--> */}
                    <div className="four-mini-nav">
                        <a aria-label="Search" title="Search" href='/#'>
                            <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                        </a>
                    </div>
                    {/* <!-- User icon --> */}
                    <div className="four-mini-nav">
                        <a aria-label="User" title="User" href='/#'>
                            <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"></path></g></svg>
                        </a>
                    </div>
                    {/* <!-- Love icon --> */}
                    <div className="four-mini-nav">
                        <a aria-label="Loved" title="Loved" href='/#'>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.3783 5.88622C9.66902 4.10486 6.79049 4.0794 4.92308 5.90387C4.91717 5.90965 4.91116 5.91534 4.90506 5.92092C3.09331 7.58038 3.06654 10.3577 4.92308 12.1716L4.92796 12.1763L11.9374 19.1469L19.0769 12.1716C19.0828 12.1658 19.0888 12.1601 19.0949 12.1545C20.9067 10.495 20.9335 7.71772 19.0769 5.90387C17.2195 4.08919 14.3268 4.08919 12.4694 5.90387C12.3227 6.04722 12.125 6.12596 11.9202 6.12264C11.7154 6.11933 11.5204 6.03424 11.3783 5.88622ZM11.9465 4.31813C9.59468 2.40387 6.12292 2.58601 3.85838 4.79012C1.36802 7.08049 1.39686 10.8778 3.84702 13.2742C3.84785 13.275 3.84869 13.2759 3.84952 13.2767L11.391 20.7763C11.689 21.0727 12.1688 21.0748 12.4694 20.7811L20.1419 13.2851C22.6328 10.9939 22.603 7.19491 20.1505 4.79876C17.8724 2.57305 14.397 2.41284 11.9465 4.31813Z" />
                            </svg>
                        </a>
                    </div>
                    {/* <!-- Notification icon --> */}
                    <div className="four-mini-nav">
                        <span className="notifi-dot"></span>
                        <a id='dot-func' aria-label="Notification" title="Notification" href='/#'>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.45936 7.47338C5.38513 4.15829 8.53385 2 12 2C15.4661 2 18.6149 4.15829 19.5406 7.47338C19.7632 8.27041 19.9705 9.07181 20.1262 9.78929C20.4897 11.4638 20.7927 13.6989 20.9801 15.2464C21.1565 16.7027 20.1399 18.0373 18.6471 18.271C16.8578 18.5511 14.0966 18.9231 12 18.9231C9.90339 18.9231 7.14215 18.5511 5.35286 18.271C3.86011 18.0373 2.84345 16.7027 3.01986 15.2464C3.20731 13.6989 3.51032 11.4638 3.87376 9.78929C4.02949 9.07181 4.23678 8.27041 4.45936 7.47338ZM12 3.53846C9.18994 3.53846 6.70482 5.28252 5.98001 7.87798C5.76175 8.65952 5.56284 9.43008 5.41567 10.1082C5.0683 11.7085 4.77207 13.8834 4.58509 15.427C4.50681 16.0733 4.95347 16.6503 5.60249 16.7519C7.38794 17.0315 10.0404 17.3846 12 17.3846C13.9596 17.3846 16.6121 17.0315 18.3975 16.7519C19.0465 16.6503 19.4932 16.0733 19.4149 15.427C19.2279 13.8834 18.9317 11.7085 18.5843 10.1082C18.4372 9.43008 18.2382 8.65952 18.02 7.87798C17.2952 5.28252 14.8101 3.53846 12 3.53846Z" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.89849 17.3846C10.3337 17.3846 10.6866 17.729 10.6866 18.1538V19.1795C10.6866 19.8875 11.2746 20.4615 12 20.4615C12.7254 20.4615 13.3134 19.8875 13.3134 19.1795V18.1538C13.3134 17.729 13.6663 17.3846 14.1015 17.3846C14.5367 17.3846 14.8896 17.729 14.8896 18.1538V19.1795C14.8896 20.7372 13.5959 22 12 22C10.4041 22 9.11042 20.7372 9.11042 19.1795V18.1538C9.11042 17.729 9.46325 17.3846 9.89849 17.3846Z" />
                            </svg>
                        </a>
                    </div>
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
                                <a className="search-icon-drop-nav" href='/#'>
                                    <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                                </a>
                            </div>

                            {/* <!-- User icon in drop list --> */}
                            <div aria-label="User" title="User" className="">
                                <a href='/#'>
                                    <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"></path></g></svg>
                                </a>
                            </div>

                            {/* <!-- Love icon in drop list --> */}
                            <div aria-label="Loved" title="Loved" className="">
                                <a href='/#'>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.3783 5.88622C9.66902 4.10486 6.79049 4.0794 4.92308 5.90387C4.91717 5.90965 4.91116 5.91534 4.90506 5.92092C3.09331 7.58038 3.06654 10.3577 4.92308 12.1716L4.92796 12.1763L11.9374 19.1469L19.0769 12.1716C19.0828 12.1658 19.0888 12.1601 19.0949 12.1545C20.9067 10.495 20.9335 7.71772 19.0769 5.90387C17.2195 4.08919 14.3268 4.08919 12.4694 5.90387C12.3227 6.04722 12.125 6.12596 11.9202 6.12264C11.7154 6.11933 11.5204 6.03424 11.3783 5.88622ZM11.9465 4.31813C9.59468 2.40387 6.12292 2.58601 3.85838 4.79012C1.36802 7.08049 1.39686 10.8778 3.84702 13.2742C3.84785 13.275 3.84869 13.2759 3.84952 13.2767L11.391 20.7763C11.689 21.0727 12.1688 21.0748 12.4694 20.7811L20.1419 13.2851C22.6328 10.9939 22.603 7.19491 20.1505 4.79876C17.8724 2.57305 14.397 2.41284 11.9465 4.31813Z" />
                                    </svg>
                                </a>
                            </div>

                            {/* <!-- Notification icon in drop list --> */}
                            <div aria-label="Notification" title="Notification" className="">
                                <a href='/#'>
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

                    {/* <!-- Home --> */}
                    <div>
                        <Link to="/" className="cat-items active-btn" id="home">
                            <div className="cat">
                                <div className="" aria-label="Home" title="Home">
                                    <svg className="big-nav-icon" width="56" height="54" viewBox="0 0 56 54" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 21V51.0317C7 51.5538 7.20593 52.0544 7.57247 52.4235C7.93902 52.7926 8.43617 53 8.95455 53H20.6818V36.2698C20.6818 35.4868 20.9907 34.7359 21.5405 34.1822C22.0903 33.6285 22.8361 33.3175 23.6136 33.3175H33.3864C34.1639 33.3175 34.9096 33.6285 35.4595 34.1822C36.0093 34.7359 36.3182 35.4868 36.3182 36.2698V53H48.0455C48.5638 53 49.061 52.7926 49.4275 52.4235C49.7941 52.0544 50 51.5538 50 51.0317V22"
                                            stroke="white" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path
                                            d="M55 26L29.3126 1.47871C28.71 0.844041 27.3009 0.836829 26.6874 1.47871L1 26"
                                            stroke="white" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path d="M46 17V2H40V11" stroke="white" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="text">Home</div>
                            </div>
                        </Link>
                    </div>

                    {/* <!-- Phones --> */}
                    <div>
                        <Link to="/phones" className="cat-items" id="phone">
                            <div className="cat">
                                <div className="" aria-label="Phones" title="Phones">
                                    <svg className="big-nav-icon" width="43" height="76" viewBox="0 0 43 76" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M34.3125 1H8.6875C4.44181 1 1 4.31309 1 8.4V67.6C1 71.6869 4.44181 75 8.6875 75H34.3125C38.5582 75 42 71.6869 42 67.6V8.4C42 4.31309 38.5582 1 34.3125 1Z"
                                            stroke="white" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path
                                            d="M9 1H12.75C13.0815 1 13.3995 1.14048 13.6339 1.39052C13.8683 1.64057 14 1.97971 14 2.33333C14 3.04058 14.2634 3.71885 14.7322 4.21895C15.2011 4.71905 15.837 5 16.5 5H26.5C27.163 5 27.7989 4.71905 28.2678 4.21895C28.7366 3.71885 29 3.04058 29 2.33333C29 1.97971 29.1317 1.64057 29.3661 1.39052C29.6005 1.14048 29.9185 1 30.25 1H34"
                                            stroke="white" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <rect x="11" y="71" width="22" height="1" rx="0.5" fill="white" />
                                    </svg>
                                </div>
                                <div className="text">Phones</div>
                            </div>
                        </Link>
                    </div>

                    {/* <!-- Computers --> */}
                    <div>
                        <Link to="/computers" className="cat-items" id="computer">
                            <div className="cat">
                                <div className="" aria-label="Computers" title="Computers">
                                    <svg className="big-nav-icon" width="71" height="43" viewBox="0 0 71 43" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect x="8" y="1" width="55" height="36" rx="6" stroke="white"
                                            strokeWidth="2" />
                                        <rect x="0.719595" y="40.7196" width="69.5608" height="1.43919"
                                            rx="0.719595" fill="white" />
                                        <rect x="0.719595" y="40.7196" width="69.5608" height="1.43919"
                                            rx="0.719595" stroke="white" strokeWidth="1.43919" />
                                    </svg>
                                </div>
                                <div className="text">Computers</div>
                            </div>
                        </Link>
                    </div>

                    {/* <!-- Watches --> */}
                    <div>
                        <Link to="/watches" className="cat-items" id="watch">
                            <div className="cat">
                                <div className="" aria-label="Watches" title="Watches">
                                    <svg className="big-nav-icon" width="44" height="64" viewBox="0 0 44 64" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 12V2.1C12 1.80826 12.1086 1.52847 12.302 1.32218C12.4954 1.11589 12.7577 1 13.0312 1H31.5938C31.8673 1 32.1296 1.11589 32.323 1.32218C32.5164 1.52847 32.625 1.80826 32.625 2.1V12"
                                            stroke="white" strokeWidth="2" strokeLinejoin="round" />
                                        <path
                                            d="M32.625 52V61.9C32.625 62.1917 32.5164 62.4715 32.323 62.6778C32.1296 62.8841 31.8673 63 31.5938 63H13.0312C12.7577 63 12.4954 62.8841 12.302 62.6778C12.1086 62.4715 12 62.1917 12 61.9V52"
                                            stroke="white" strokeWidth="2" strokeLinejoin="round" />
                                        <path
                                            d="M21 31H33C33.5523 31 34 31.4477 34 32C34 32.5523 33.5523 33 33 33H21V31Z"
                                            fill="white" />
                                        <path
                                            d="M21 18C21 17.4477 21.4477 17 22 17C22.5523 17 23 17.4477 23 18V33H21V18Z"
                                            fill="white" />
                                        <path
                                            d="M33.6667 11H10.3333C5.17868 11 1 15.1787 1 20.3333V43.6667C1 48.8213 5.17868 53 10.3333 53H33.6667C38.8213 53 43 48.8213 43 43.6667V20.3333C43 15.1787 38.8213 11 33.6667 11Z"
                                            stroke="white" strokeWidth="2" strokeLinejoin="round" />
                                        <circle cx="22" cy="32" r="2" fill="white" />
                                    </svg>
                                </div>
                                <div className="text">Watches</div>
                            </div>
                        </Link>
                    </div>

                    {/* <!-- Cameras --> */}
                    <div>
                        <Link to="/cameras" className="cat-items" id="camera">
                            <div className="cat">
                                <div className="" aria-label="Cameras" title="Cameras">
                                    <svg className="big-nav-icon" width="71" height="37" viewBox="0 0 71 37" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M53.3621 12.4527V13.2431L54.0762 12.9045L69.3739 5.65291C69.3745 5.65262 69.3752 5.65233 69.3758 5.65204C69.494 5.59766 69.632 5.56709 69.7759 5.56709C69.916 5.56709 70.0506 5.59609 70.1667 5.64785C70.2779 5.7081 70.3609 5.78435 70.4156 5.86375C70.4697 5.94216 70.4957 6.02238 70.5 6.09815V30.4231C70.4957 30.4988 70.4697 30.5791 70.4156 30.6575C70.3617 30.7357 70.2803 30.8108 70.1716 30.8707C70.0521 30.92 69.9164 30.9472 69.7759 30.9472C69.6314 30.9472 69.4919 30.9184 69.3699 30.8664L54.0762 23.6167L53.3621 23.2781V24.0685V33.4778C53.3621 34.1188 53.0555 34.7574 52.4674 35.2448C51.8766 35.7345 51.0582 36.0212 50.1897 36.0212H11.0172C8.20069 36.0212 5.51416 35.0932 3.54592 33.462C1.58038 31.8331 0.5 29.6462 0.5 27.3909V3.04343C0.5 2.40244 0.806555 1.76377 1.39467 1.27638C1.98549 0.786754 2.80383 0.5 3.67241 0.5H42.8448C45.6614 0.5 48.3479 1.42805 50.3161 3.05919C52.2817 4.68808 53.3621 6.87497 53.3621 9.1303V12.4527ZM11.0158 34.9923H11.0172H50.1897C50.6197 34.9923 51.0468 34.8515 51.3743 34.5801C51.7045 34.3065 51.9138 33.913 51.9138 33.4778L51.9138 9.1303L51.9138 9.12816C51.905 7.08152 50.9195 5.14458 49.2141 3.7313C47.5114 2.32021 45.2214 1.53595 42.8463 1.52896H42.8448H3.67241C3.24235 1.52896 2.81524 1.66973 2.48777 1.94111C2.15761 2.21473 1.94828 2.60821 1.94828 3.04343L1.94827 27.3909L1.94828 27.3931C1.95705 29.4397 2.94257 31.3766 4.64793 32.7899C6.35064 34.201 8.64067 34.9853 11.0158 34.9923ZM68.3379 29.1363L69.0517 29.474V28.6844V7.83684V7.04719L68.3379 7.38487L53.6483 14.334L53.3621 14.4694V14.786V21.7352V22.0518L53.6483 22.1872L68.3379 29.1363Z"
                                            fill="white" stroke="white" />
                                    </svg>
                                </div>
                                <div className="text">Cameras</div>
                            </div>
                        </Link>
                    </div>

                    {/* <!-- Gaming --> */}
                    <div>
                        <Link to="/gaming" className="cat-items" id="gaming">
                            <div className="cat">
                                <div className="" aria-label="Gaming" title="Gaming">
                                    <svg className="big-nav-icon" width="68" height="49" viewBox="0 0 68 49" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M64.9608 23.4458C62.2585 11.2294 58.2505 3.43671 51.8265 1.53773C50.5824 1.17479 49.2923 0.993735 47.9963 1.0002C44.0471 1.0002 40.9306 3.35005 33.8971 3.35005C26.8637 3.35005 23.7413 1.0002 19.798 1.0002C18.4479 0.993206 17.1034 1.17412 15.8032 1.53773C9.37049 3.43671 5.39629 11.2368 2.66311 23.4458C-0.127345 35.9162 0.377875 45.7694 5.83248 47.661C9.651 48.9828 13.0656 46.2497 16.2996 42.227C19.9713 37.6448 24.4933 36.2349 33.8971 36.2349C43.301 36.2349 47.6467 37.6448 51.3243 42.227C54.5553 46.2526 58.0963 48.952 61.8134 47.6845C67.8379 45.627 67.7527 36.063 64.9608 23.4458Z"
                                            stroke="white" strokeWidth="2" strokeMiterlimit="10" />
                                        <path d="M19 14V27.5" stroke="white" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path d="M25.5 21H12" stroke="white" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path
                                            d="M44 24C45.1046 24 46 23.1046 46 22C46 20.8954 45.1046 20 44 20C42.8954 20 42 20.8954 42 22C42 23.1046 42.8954 24 44 24Z"
                                            fill="white" />
                                        <path
                                            d="M54 24C53.6042 24 53.2173 23.8826 52.8883 23.6626C52.5593 23.4426 52.303 23.13 52.1518 22.7642C52.0005 22.3985 51.9612 21.9961 52.0388 21.608C52.1164 21.2199 52.3074 20.8635 52.5876 20.584C52.8678 20.3045 53.2246 20.1144 53.6129 20.0378C54.0012 19.9612 54.4035 20.0015 54.7688 20.1537C55.1342 20.3058 55.4462 20.5629 55.6654 20.8925C55.8845 21.2221 56.001 21.6092 56 22.005C55.9987 22.5346 55.7874 23.042 55.4124 23.416C55.0375 23.79 54.5296 24 54 24Z"
                                            fill="white" />
                                        <path
                                            d="M49 20C50.1046 20 51 19.1046 51 18C51 16.8954 50.1046 16 49 16C47.8954 16 47 16.8954 47 18C47 19.1046 47.8954 20 49 20Z"
                                            fill="white" />
                                        <path
                                            d="M49 28C50.1046 28 51 27.1046 51 26C51 24.8954 50.1046 24 49 24C47.8954 24 47 24.8954 47 26C47 27.1046 47.8954 28 49 28Z"
                                            fill="white" />
                                    </svg>
                                </div>
                                <div className="text">Gaming</div>
                            </div>
                        </Link>
                    </div>

                    {/* <!-- Tablets --> */}
                    <div>
                        <Link to="/tablets" className="cat-items" id="tablet">
                            <div className="cat">
                                <div className="" aria-label="Tablets" title="Tablets">
                                    <svg className="big-nav-icon" width="57" height="38" viewBox="0 0 57 38" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect x="5" y="15" width="1" height="8" fill="white" />
                                        <path
                                            d="M53 19C53 20.6569 51.6569 22 50 22C48.3431 22 47 20.6569 47 19C47 17.3431 48.3431 16 50 16C51.6569 16 53 17.3431 53 19Z"
                                            fill="white" />
                                        <rect x="1" y="1" width="55" height="36" rx="6" stroke="white"
                                            strokeWidth="2" />
                                    </svg>
                                </div>
                                <div className="text">Tablets</div>
                            </div>
                        </Link>
                    </div>

                    {/* <!-- TVs --> */}
                    <div>
                        <Link to="/tvs" className="cat-items" id="tv">
                            <div className="cat">
                                <div className="" aria-label="TVs" title="TVs">
                                    <svg className="big-nav-icon" width="61" height="58" viewBox="0 0 61 58" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M53.5 15.5833H6.83333C3.61167 15.5833 1 17.6976 1 20.3056V46.2778C1 48.8858 3.61167 51 6.83333 51H53.5C56.7217 51 59.3333 48.8858 59.3333 46.2778V20.3056C59.3333 17.6976 56.7217 15.5833 53.5 15.5833Z"
                                            stroke="white" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path d="M44.75 1L30.1667 15.5833L15.5834 1" stroke="white" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                        <rect x="11" y="55" width="37" height="3" rx="1.5" fill="white" />
                                        <rect x="27" y="51" width="5" height="7" fill="white" />
                                    </svg>
                                </div>
                                <div className="text">TVs</div>
                            </div>
                        </Link>
                    </div>

                    {/* <!-- More Button in Nav --> */}
                    <div className="more-btn-nav-box">
                        <a href='/#' className="more">More</a>
                    </div>

                    {/* <!-- Rent Button --> */}
                    <div className="rent-btn-nav-box">

                        {/* <!-- Rent Button text appear in > 13 inch screen --> */}
                        <a className="rent-btn-text" href='/#' id="rent">Rent</a>

                        {/* <!-- Rent Button icon appear in < 13 inch screen --> */}
                        <a className="rent-btn-icon" href='/#' aria-label="Rent" title="Rent">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path
                                    d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM224 368C237.3 368 248 357.3 248 344V280H312C325.3 280 336 269.3 336 256C336 242.7 325.3 232 312 232H248V168C248 154.7 237.3 144 224 144C210.7 144 200 154.7 200 168V232H136C122.7 232 112 242.7 112 256C112 269.3 122.7 280 136 280H200V344C200 357.3 210.7 368 224 368z" />
                            </svg>
                        </a>

                    </div>
                </div>
            </div>



        </nav>
    )
}

export default Navbar