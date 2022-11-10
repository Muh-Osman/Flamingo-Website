import Anchor from '../Anchor/Anchor'

import './TopBrandsItem.css'



const TopBrandsItem = (props) => {

    return (
        <Anchor
            href={props.brand.id}
            className={props.brand.divClassName}
            aClassName={props.brand.aClassName}
            title={props.brand.svg} />
    )
}

export default TopBrandsItem