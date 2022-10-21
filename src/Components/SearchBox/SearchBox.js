import './SearchBox.css'

const SearchBox = () => {
    return (
        <div className="search-box">
            <div className="search-div">
                <form autoComplete="off" action="" method="get">
                    <input className="input-search" type="search" placeholder="Search" autoComplete="off"
                        name="hidden" autofill="off" />
                </form>
            </div>
            <div aria-label="Search" title="Search" className="search-icon">
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
    )
}

export default SearchBox