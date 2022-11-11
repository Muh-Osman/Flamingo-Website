import { useState } from 'react'
import { ShelveConainer, ItemShelves, Button } from "../../Components"
import './Phones.css'

import ApplePhonesItemsData from '../../Data/PhonesData/ApplePhonesData'
import SamsungPhonesItemsData from '../../Data/PhonesData/SamsungPhonesData'
import GooglePhonesItemsData from '../../Data/PhonesData/GooglePhonesData'




const Phones = () => {


    // For hide Big more Button & add component
    const [state, setState] = useState(false)


    // Loop on Data
    const googlePhonesItems = GooglePhonesItemsData.map(item => {
        return <ItemShelves
            className={'item-cards'}
            key={item.id}
            item={item}
        />
    })

    const samsungPhonesItems = SamsungPhonesItemsData.map(item => {
        return <ItemShelves
            className={'item-cards'}
            key={item.id}
            item={item}
        />
    })


    const applePhonesItems = ApplePhonesItemsData.map(item => {
        return <ItemShelves
            className={'item-cards'}
            key={item.id}
            item={item}
        />
    })





    return (

        <>

            <ShelveConainer href='https://www.google.com/' title='Google'>
                {googlePhonesItems}
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='Samsung'>
                {samsungPhonesItems}
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='Apple'>
                {applePhonesItems}
            </ShelveConainer>





            {/* For hide Big more Button & add component */}

            {
                state ? (
                    <>
                        < ShelveConainer href='https://www.google.com/' title='Xiaomi'>
                            { }
                        </ShelveConainer>

                        <ShelveConainer href='https://www.google.com/' title='Oppo'>
                            { }
                        </ShelveConainer>

                        <ShelveConainer href='https://www.google.com/' title='Vivo'>
                            { }
                        </ShelveConainer>

                        <ShelveConainer href='https://www.google.com/' title='Realme'>
                            { }
                        </ShelveConainer>

                        <ShelveConainer href='https://www.google.com/' title='Lenovo'>
                            { }
                        </ShelveConainer>

                        <ShelveConainer href='https://www.google.com/' title='Huawei'>
                            { }
                        </ShelveConainer>

                    </>

                ) : (

                    //  <Big More Button 
                    <Button onClick={() => setState(true)} className='big-more-btn' title='More' />

                )
            }


        </>

    )
}

export default Phones
