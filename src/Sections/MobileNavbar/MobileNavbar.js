import './MobileNavbar.css'

const MobileNavbar = () => {
    return (
        <nav className="mob-phone-nav">
            <div className="navigation">
                <ul>
                    <li className="list act" aria-label="Home" title="Home">
                        <a href='https://www.google.com/'>
                            <span className="icon">
                                <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z"></path><path d="M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z"></path></g></svg>
                            </span>
                            <span className="text-mob-nav">Home</span>
                        </a>
                    </li>

                    <li className="list search-in-mob-nav" aria-label="Search" title="Search">
                        <a className="search-icon-nav-mob-link" href='https://www.google.com/'>
                            <span className="icon">
                                <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                            </span>
                            <span className="text-mob-nav">Search</span>
                        </a>
                    </li>

                    <li className="list" aria-label="Rent" title="Rent">
                        <a href='https://www.google.com/'>
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path
                                        d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM224 368C237.3 368 248 357.3 248 344V280H312C325.3 280 336 269.3 336 256C336 242.7 325.3 232 312 232H248V168C248 154.7 237.3 144 224 144C210.7 144 200 154.7 200 168V232H136C122.7 232 112 242.7 112 256C112 269.3 122.7 280 136 280H200V344C200 357.3 210.7 368 224 368z" />
                                </svg>
                            </span>
                            <span className="text-mob-nav">Rent</span>
                        </a>
                    </li>

                    <li className="list category-btn-in-mob-nav" aria-label="Category" title="Category">
                        <a href='https://www.google.com/'>
                            <span className="icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 9.69231C9.80429 9.69231 6.79854 9.86404 4.95178 9.98536C4.35535 10.0245 3.8832 10.4754 3.81879 11.0569C3.68541 12.2608 3.53846 13.8676 3.53846 15.0769C3.53846 16.2862 3.68541 17.8931 3.81879 19.097C3.8832 19.6784 4.35535 20.1293 4.95178 20.1685C6.79854 20.2898 9.80429 20.4615 12 20.4615C14.1957 20.4615 17.2015 20.2898 19.0482 20.1685C19.6447 20.1293 20.1168 19.6784 20.1812 19.097C20.3146 17.8931 20.4615 16.2862 20.4615 15.0769C20.4615 13.8676 20.3146 12.2608 20.1812 11.0569C20.1168 10.4754 19.6447 10.0245 19.0482 9.98536C17.2015 9.86404 14.1957 9.69231 12 9.69231ZM4.85093 8.4502C6.69825 8.32885 9.74878 8.15385 12 8.15385C14.2512 8.15385 17.3018 8.32885 19.1491 8.4502C20.477 8.53744 21.5624 9.55217 21.7103 10.8875C21.8444 12.0977 22 13.7766 22 15.0769C22 16.3772 21.8444 18.0561 21.7103 19.2664C21.5624 20.6017 20.477 21.6164 19.1491 21.7036C17.3018 21.825 14.2512 22 12 22C9.74878 22 6.69825 21.825 4.85093 21.7036C3.52304 21.6164 2.43761 20.6017 2.28968 19.2664C2.1556 18.0561 2 16.3772 2 15.0769C2 13.7766 2.1556 12.0978 2.28968 10.8875C2.43761 9.55217 3.52304 8.53744 4.85093 8.4502Z" fill="#fff" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 6.61539C10.3995 6.61539 8.248 6.69061 6.79989 6.75004C6.21382 6.77409 5.76196 7.18453 5.69116 7.70434C5.63175 8.14046 5.58974 8.57653 5.58974 8.92308C5.58974 9.34791 5.24535 9.69231 4.82051 9.69231C4.39568 9.69231 4.05128 9.34791 4.05128 8.92308C4.05128 8.47393 4.1039 7.95828 4.16677 7.4967C4.34645 6.17764 5.4686 5.26491 6.73681 5.21287C8.18625 5.15339 10.3652 5.07692 12 5.07692C13.6348 5.07692 15.8138 5.15339 17.2632 5.21287C18.5314 5.26491 19.6536 6.17764 19.8332 7.4967C19.8961 7.95828 19.9487 8.47393 19.9487 8.92308C19.9487 9.34791 19.6043 9.69231 19.1795 9.69231C18.7547 9.69231 18.4103 9.34791 18.4103 8.92308C18.4103 8.57653 18.3682 8.14046 18.3088 7.70434C18.238 7.18453 17.7862 6.77409 17.2001 6.75004C15.752 6.69061 13.6005 6.61539 12 6.61539Z" fill="#fff" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 3.53846C11.0449 3.53846 9.80589 3.59168 8.81793 3.64423C8.22109 3.67598 7.75986 4.11837 7.70772 4.67291C7.6686 5.08895 7.64103 5.50609 7.64103 5.84615C7.64103 6.27099 7.29663 6.61539 6.8718 6.61539C6.44696 6.61539 6.10256 6.27099 6.10256 5.84615C6.10256 5.43606 6.13507 4.96436 6.17601 4.52889C6.30333 3.17484 7.41874 2.17801 8.73621 2.10794C9.72881 2.05515 11.0018 2 12 2C12.9982 2 14.2712 2.05515 15.2638 2.10794C16.5813 2.17801 17.6967 3.17484 17.824 4.52889C17.8649 4.96436 17.8974 5.43606 17.8974 5.84615C17.8974 6.27099 17.553 6.61539 17.1282 6.61539C16.7034 6.61539 16.359 6.27099 16.359 5.84615C16.359 5.50609 16.3314 5.08895 16.2923 4.67291C16.2401 4.11837 15.7789 3.67598 15.1821 3.64423C14.1941 3.59168 12.9551 3.53846 12 3.53846Z" fill="#fff" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.17949 15.0769C9.17949 14.6521 9.52388 14.3077 9.94872 14.3077H14.0513C14.4761 14.3077 14.8205 14.6521 14.8205 15.0769C14.8205 15.5018 14.4761 15.8462 14.0513 15.8462H9.94872C9.52388 15.8462 9.17949 15.5018 9.17949 15.0769Z" fill="#fff" />
                                </svg>
                            </span>
                            <span className="text-mob-nav">Category</span>
                        </a>
                    </li>

                    <li className="list" aria-label="User" title="User">
                        <a href='https://www.google.com/'>
                            <span className="icon">
                                <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"></path></g></svg>
                            </span>
                            <span className="text-mob-nav">User</span>
                        </a>
                    </li>
                    <div className="indicat"></div>
                </ul>
            </div>

            {/* <!-- Category shelve under mobile Navbar --> */}
            <div className="cat-sec-under-nav-box">

                <div aria-label="Phones" title="Phones">
                    <a href='https://www.google.com/'>
                        <svg viewBox="0 0 43 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.3125 1H8.6875C4.44181 1 1 4.31309 1 8.4V67.6C1 71.6869 4.44181 75 8.6875 75H34.3125C38.5582 75 42 71.6869 42 67.6V8.4C42 4.31309 38.5582 1 34.3125 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M9 1H12.75C13.0815 1 13.3995 1.14048 13.6339 1.39052C13.8683 1.64057 14 1.97971 14 2.33333C14 3.04058 14.2634 3.71885 14.7322 4.21895C15.2011 4.71905 15.837 5 16.5 5H26.5C27.163 5 27.7989 4.71905 28.2678 4.21895C28.7366 3.71885 29 3.04058 29 2.33333C29 1.97971 29.1317 1.64057 29.3661 1.39052C29.6005 1.14048 29.9185 1 30.25 1H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <rect x="11" y="71" width="22" height="1" rx="0.5" fill="currentColor"></rect>
                        </svg>
                    </a>
                </div>
                <div aria-label="Computers" title="Computers">
                    <a href='https://www.google.com/'>
                        <svg viewBox="0 0 71 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="8" y="1" width="55" height="36" rx="6" stroke="currentColor" strokeWidth="2"></rect>
                            <rect x="0.719595" y="40.7196" width="69.5608" height="1.43919" rx="0.719595" fill="currentColor"></rect>
                            <rect x="0.719595" y="40.7196" width="69.5608" height="1.43919" rx="0.719595" stroke="currentColor" strokeWidth="1.43919"></rect>
                        </svg>
                    </a>
                </div>
                <div aria-label="Watches" title="Watches">
                    <a href='https://www.google.com/'>
                        <svg viewBox="0 0 44 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12V2.1C12 1.80826 12.1086 1.52847 12.302 1.32218C12.4954 1.11589 12.7577 1 13.0312 1H31.5938C31.8673 1 32.1296 1.11589 32.323 1.32218C32.5164 1.52847 32.625 1.80826 32.625 2.1V12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
                            <path d="M32.625 52V61.9C32.625 62.1917 32.5164 62.4715 32.323 62.6778C32.1296 62.8841 31.8673 63 31.5938 63H13.0312C12.7577 63 12.4954 62.8841 12.302 62.6778C12.1086 62.4715 12 62.1917 12 61.9V52" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
                            <path d="M21 31H33C33.5523 31 34 31.4477 34 32C34 32.5523 33.5523 33 33 33H21V31Z" fill="currentColor"></path>
                            <path d="M21 18C21 17.4477 21.4477 17 22 17C22.5523 17 23 17.4477 23 18V33H21V18Z" fill="currentColor"></path>
                            <path d="M33.6667 11H10.3333C5.17868 11 1 15.1787 1 20.3333V43.6667C1 48.8213 5.17868 53 10.3333 53H33.6667C38.8213 53 43 48.8213 43 43.6667V20.3333C43 15.1787 38.8213 11 33.6667 11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
                            <circle cx="22" cy="32" r="2" fill="currentColor"></circle>
                        </svg>
                    </a>
                </div>
                <div aria-label="Cameras" title="Cameras">
                    <a href='https://www.google.com/'>
                        <svg viewBox="0 0 71 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M53.3621 12.4527V13.2431L54.0762 12.9045L69.3739 5.65291C69.3745 5.65262 69.3752 5.65233 69.3758 5.65204C69.494 5.59766 69.632 5.56709 69.7759 5.56709C69.916 5.56709 70.0506 5.59609 70.1667 5.64785C70.2779 5.7081 70.3609 5.78435 70.4156 5.86375C70.4697 5.94216 70.4957 6.02238 70.5 6.09815V30.4231C70.4957 30.4988 70.4697 30.5791 70.4156 30.6575C70.3617 30.7357 70.2803 30.8108 70.1716 30.8707C70.0521 30.92 69.9164 30.9472 69.7759 30.9472C69.6314 30.9472 69.4919 30.9184 69.3699 30.8664L54.0762 23.6167L53.3621 23.2781V24.0685V33.4778C53.3621 34.1188 53.0555 34.7574 52.4674 35.2448C51.8766 35.7345 51.0582 36.0212 50.1897 36.0212H11.0172C8.20069 36.0212 5.51416 35.0932 3.54592 33.462C1.58038 31.8331 0.5 29.6462 0.5 27.3909V3.04343C0.5 2.40244 0.806555 1.76377 1.39467 1.27638C1.98549 0.786754 2.80383 0.5 3.67241 0.5H42.8448C45.6614 0.5 48.3479 1.42805 50.3161 3.05919C52.2817 4.68808 53.3621 6.87497 53.3621 9.1303V12.4527ZM11.0158 34.9923H11.0172H50.1897C50.6197 34.9923 51.0468 34.8515 51.3743 34.5801C51.7045 34.3065 51.9138 33.913 51.9138 33.4778L51.9138 9.1303L51.9138 9.12816C51.905 7.08152 50.9195 5.14458 49.2141 3.7313C47.5114 2.32021 45.2214 1.53595 42.8463 1.52896H42.8448H3.67241C3.24235 1.52896 2.81524 1.66973 2.48777 1.94111C2.15761 2.21473 1.94828 2.60821 1.94828 3.04343L1.94827 27.3909L1.94828 27.3931C1.95705 29.4397 2.94257 31.3766 4.64793 32.7899C6.35064 34.201 8.64067 34.9853 11.0158 34.9923ZM68.3379 29.1363L69.0517 29.474V28.6844V7.83684V7.04719L68.3379 7.38487L53.6483 14.334L53.3621 14.4694V14.786V21.7352V22.0518L53.6483 22.1872L68.3379 29.1363Z" fill="currentColor" stroke="currentColor"></path>
                        </svg>
                    </a>
                </div>
                <div aria-label="Gaming" title="Gaming">
                    <a href='https://www.google.com/'>
                        <svg viewBox="0 0 68 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M64.9608 23.4458C62.2585 11.2294 58.2505 3.43671 51.8265 1.53773C50.5824 1.17479 49.2923 0.993735 47.9963 1.0002C44.0471 1.0002 40.9306 3.35005 33.8971 3.35005C26.8637 3.35005 23.7413 1.0002 19.798 1.0002C18.4479 0.993206 17.1034 1.17412 15.8032 1.53773C9.37049 3.43671 5.39629 11.2368 2.66311 23.4458C-0.127345 35.9162 0.377875 45.7694 5.83248 47.661C9.651 48.9828 13.0656 46.2497 16.2996 42.227C19.9713 37.6448 24.4933 36.2349 33.8971 36.2349C43.301 36.2349 47.6467 37.6448 51.3243 42.227C54.5553 46.2526 58.0963 48.952 61.8134 47.6845C67.8379 45.627 67.7527 36.063 64.9608 23.4458Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10"></path>
                            <path d="M19 14V27.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M25.5 21H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M44 24C45.1046 24 46 23.1046 46 22C46 20.8954 45.1046 20 44 20C42.8954 20 42 20.8954 42 22C42 23.1046 42.8954 24 44 24Z" fill="currentColor"></path>
                            <path d="M54 24C53.6042 24 53.2173 23.8826 52.8883 23.6626C52.5593 23.4426 52.303 23.13 52.1518 22.7642C52.0005 22.3985 51.9612 21.9961 52.0388 21.608C52.1164 21.2199 52.3074 20.8635 52.5876 20.584C52.8678 20.3045 53.2246 20.1144 53.6129 20.0378C54.0012 19.9612 54.4035 20.0015 54.7688 20.1537C55.1342 20.3058 55.4462 20.5629 55.6654 20.8925C55.8845 21.2221 56.001 21.6092 56 22.005C55.9987 22.5346 55.7874 23.042 55.4124 23.416C55.0375 23.79 54.5296 24 54 24Z" fill="currentColor"></path>
                            <path d="M49 20C50.1046 20 51 19.1046 51 18C51 16.8954 50.1046 16 49 16C47.8954 16 47 16.8954 47 18C47 19.1046 47.8954 20 49 20Z" fill="currentColor"></path>
                            <path d="M49 28C50.1046 28 51 27.1046 51 26C51 24.8954 50.1046 24 49 24C47.8954 24 47 24.8954 47 26C47 27.1046 47.8954 28 49 28Z" fill="currentColor"></path>
                        </svg>
                    </a>
                </div>
                <div aria-label="Tablets" title="Tablets">
                    <a href='https://www.google.com/'>
                        <svg viewBox="0 0 57 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="5" y="15" width="1" height="8" fill="currentColor"></rect>
                            <path d="M53 19C53 20.6569 51.6569 22 50 22C48.3431 22 47 20.6569 47 19C47 17.3431 48.3431 16 50 16C51.6569 16 53 17.3431 53 19Z" fill="currentColor"></path>
                            <rect x="1" y="1" width="55" height="36" rx="6" stroke="currentColor" strokeWidth="2"></rect>
                        </svg>
                    </a>
                </div>
                <div aria-label="TV's" title="TV's">
                    <a href='https://www.google.com/'>
                        <svg viewBox="0 0 61 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M53.5 15.5833H6.83333C3.61167 15.5833 1 17.6976 1 20.3056V46.2778C1 48.8858 3.61167 51 6.83333 51H53.5C56.7217 51 59.3333 48.8858 59.3333 46.2778V20.3056C59.3333 17.6976 56.7217 15.5833 53.5 15.5833Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M44.75 1L30.1667 15.5833L15.5834 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <rect x="11" y="55" width="37" height="3" rx="1.5" fill="currentColor"></rect>
                            <rect x="27" y="51" width="5" height="7" fill="currentColor"></rect>
                        </svg>
                    </a>
                </div>
                <div aria-label="More" title="More">
                    <a href='https://www.google.com/'>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 3.58824C5.76727 3.58824 4.73635 3.76289 4.052 3.89936C3.97331 3.91505 3.91505 3.97331 3.89936 4.052C3.76289 4.73635 3.58824 5.76727 3.58824 6.5C3.58824 7.23273 3.76289 8.26365 3.89936 8.948C3.91505 9.02669 3.97331 9.08495 4.052 9.10064C4.73635 9.23711 5.76727 9.41177 6.5 9.41177C7.23273 9.41177 8.26365 9.23711 8.948 9.10064C9.02669 9.08495 9.08495 9.02669 9.10064 8.948C9.23711 8.26365 9.41177 7.23273 9.41177 6.5C9.41177 5.76727 9.23711 4.73635 9.10064 4.052C9.08495 3.97331 9.02669 3.91505 8.948 3.89936C8.26365 3.76289 7.23273 3.58824 6.5 3.58824ZM3.7414 2.34179C4.42728 2.20502 5.59496 2 6.5 2C7.40504 2 8.57272 2.20502 9.2586 2.34179C9.96673 2.483 10.517 3.03328 10.6582 3.7414C10.795 4.42728 11 5.59496 11 6.5C11 7.40504 10.795 8.57272 10.6582 9.2586C10.517 9.96673 9.96672 10.517 9.2586 10.6582C8.57272 10.795 7.40504 11 6.5 11C5.59496 11 4.42728 10.795 3.7414 10.6582C3.03327 10.517 2.483 9.96672 2.34179 9.2586C2.20502 8.57272 2 7.40504 2 6.5C2 5.59496 2.20502 4.42728 2.34179 3.7414C2.483 3.03327 3.03328 2.483 3.7414 2.34179Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 14.5882C5.76727 14.5882 4.73635 14.7629 4.052 14.8994C3.97331 14.9151 3.91505 14.9733 3.89936 15.052C3.76289 15.7363 3.58824 16.7673 3.58824 17.5C3.58824 18.2327 3.76289 19.2637 3.89936 19.948C3.91505 20.0267 3.97331 20.0849 4.052 20.1006C4.73635 20.2371 5.76727 20.4118 6.5 20.4118C7.23273 20.4118 8.26365 20.2371 8.948 20.1006C9.02669 20.0849 9.08495 20.0267 9.10064 19.948C9.23711 19.2637 9.41177 18.2327 9.41177 17.5C9.41177 16.7673 9.23711 15.7363 9.10064 15.052C9.08495 14.9733 9.02669 14.9151 8.948 14.8994C8.26365 14.7629 7.23273 14.5882 6.5 14.5882ZM3.7414 13.3418C4.42728 13.205 5.59496 13 6.5 13C7.40504 13 8.57272 13.205 9.2586 13.3418C9.96673 13.483 10.517 14.0333 10.6582 14.7414C10.795 15.4273 11 16.595 11 17.5C11 18.405 10.795 19.5727 10.6582 20.2586C10.517 20.9667 9.96672 21.517 9.2586 21.6582C8.57272 21.795 7.40504 22 6.5 22C5.59496 22 4.42728 21.795 3.7414 21.6582C3.03327 21.517 2.483 20.9667 2.34179 20.2586C2.20502 19.5727 2 18.405 2 17.5C2 16.595 2.20502 15.4273 2.34179 14.7414C2.483 14.0333 3.03328 13.483 3.7414 13.3418Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.5 3.58824C16.7673 3.58824 15.7363 3.76289 15.052 3.89936C14.9733 3.91505 14.9151 3.97331 14.8994 4.052C14.7629 4.73635 14.5882 5.76727 14.5882 6.5C14.5882 7.23273 14.7629 8.26365 14.8994 8.948C14.9151 9.02669 14.9733 9.08495 15.052 9.10064C15.7363 9.23711 16.7673 9.41177 17.5 9.41177C18.2327 9.41177 19.2637 9.23711 19.948 9.10064C20.0267 9.08495 20.0849 9.02669 20.1006 8.948C20.2371 8.26365 20.4118 7.23273 20.4118 6.5C20.4118 5.76727 20.2371 4.73635 20.1006 4.052C20.0849 3.97331 20.0267 3.91505 19.948 3.89936C19.2637 3.76289 18.2327 3.58824 17.5 3.58824ZM14.7414 2.34179C15.4273 2.20502 16.595 2 17.5 2C18.405 2 19.5727 2.20502 20.2586 2.34179C20.9667 2.483 21.517 3.03328 21.6582 3.7414C21.795 4.42728 22 5.59496 22 6.5C22 7.40504 21.795 8.57272 21.6582 9.2586C21.517 9.96673 20.9667 10.517 20.2586 10.6582C19.5727 10.795 18.405 11 17.5 11C16.595 11 15.4273 10.795 14.7414 10.6582C14.0333 10.517 13.483 9.96672 13.3418 9.2586C13.205 8.57272 13 7.40504 13 6.5C13 5.59496 13.205 4.42728 13.3418 3.7414C13.483 3.03327 14.0333 2.483 14.7414 2.34179Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.5 14.5882C16.7673 14.5882 15.7363 14.7629 15.052 14.8994C14.9733 14.9151 14.9151 14.9733 14.8994 15.052C14.7629 15.7363 14.5882 16.7673 14.5882 17.5C14.5882 18.2327 14.7629 19.2637 14.8994 19.948C14.9151 20.0267 14.9733 20.0849 15.052 20.1006C15.7363 20.2371 16.7673 20.4118 17.5 20.4118C18.2327 20.4118 19.2637 20.2371 19.948 20.1006C20.0267 20.0849 20.0849 20.0267 20.1006 19.948C20.2371 19.2637 20.4118 18.2327 20.4118 17.5C20.4118 16.7673 20.2371 15.7363 20.1006 15.052C20.0849 14.9733 20.0267 14.9151 19.948 14.8994C19.2637 14.7629 18.2327 14.5882 17.5 14.5882ZM14.7414 13.3418C15.4273 13.205 16.595 13 17.5 13C18.405 13 19.5727 13.205 20.2586 13.3418C20.9667 13.483 21.517 14.0333 21.6582 14.7414C21.795 15.4273 22 16.595 22 17.5C22 18.405 21.795 19.5727 21.6582 20.2586C21.517 20.9667 20.9667 21.517 20.2586 21.6582C19.5727 21.795 18.405 22 17.5 22C16.595 22 15.4273 21.795 14.7414 21.6582C14.0333 21.517 13.483 20.9667 13.3418 20.2586C13.205 19.5727 13 18.405 13 17.5C13 16.595 13.205 15.4273 13.3418 14.7414C13.483 14.0333 14.0333 13.483 14.7414 13.3418Z" fill="currentColor" />
                        </svg>
                    </a>
                </div>

            </div>
        </nav>
    )
}

export default MobileNavbar