import './FloatSearchMobile.css'

const FloatSearchMobile = () => {
    return (
        <section className="search-input-mobile">

            <div className="search-box-mob">
                <div className="search-div-mob">
                    <form className="search-mob-form" autoComplete="off" action="" method="get">
                        <input className="input-search-in" type="search" placeholder="Search" autoComplete="off"
                            name="hidden" autofill="off" />
                    </form>
                </div>

                <div className="search-icon" aria-label="Search" title="Search">


                    <svg width="29" height="30" fill="none" viewBox="0 0 29 30">
                        <path
                            fill="currentColor"
                            d="M19.738 18l8.518 8.519a1.936 1.936 0 01-2.737 2.737L17 20.738 19.738 18z"
                        ></path>
                        <circle
                            cx="11.5"
                            cy="11.5"
                            r="10.5"
                            stroke="currentColor"
                            strokeWidth="2"
                        ></circle>
                    </svg>
                    
                </div>
            </div>

        </section>
    )
}

export default FloatSearchMobile