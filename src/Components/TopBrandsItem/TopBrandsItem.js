import './TopBrandsItem.css'


const TopBrandsItem = (props) => {

    return (
        <div className={props.divClassName + ` brand`}>
            <a href='/#' className={props.aClassName + ` uniform`}>

                {props.svg}

            </a>
        </div>
    )
}

export default TopBrandsItem