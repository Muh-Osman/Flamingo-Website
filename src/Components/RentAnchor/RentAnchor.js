import IconsData from '../../Assets/Icons/IconsData'
import Anchor from '../Anchor/Anchor'

import './RentAnchor.css'

const RentAnchor = () => {
    return (
        <>

            {/* <!-- Rent Button text appear in > 13 inch screen --> */}
            <Anchor href={'/rent'} className={'rent-box rent-text-box'} aClassName={'rent-btn-text'} id={'rent'} title={'Rent'} />

            {/* <!-- Rent Button icon appear in < 13 inch screen --> */}
            <Anchor href={'/rent'} className={'rent-box rent-icon-box'} aClassName={'rent-btn-icon'} accessibility={'Rent'} title={IconsData[14].svg} />

        </>
    )
}

export default RentAnchor