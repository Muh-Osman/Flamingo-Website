import { useState } from 'react';
import { ShelveConainer, ItemShelves, BigMoreButton } from "../../Components"
import './Phones.css'


import ApplePhonesItemsData from '../../Data/PhonesData/ApplePhonesData'
import SamsungPhonesItemsData from '../../Data/PhonesData/SamsungPhonesData'




const Phones = () => {


    // For hide Big more Button & add component
    const [state, setState] = useState(false)


    // Loop on Data
    const applePhonesItems = ApplePhonesItemsData.map(applePhonesItems => {
        return <ItemShelves
            className='item-cards'
            key={applePhonesItems.id}
            href={applePhonesItems.href}
            imgSrc={applePhonesItems.imgSrc}
            imgAlt={applePhonesItems.imgAlt}
            itemDescription={applePhonesItems.itemDescription}
            price={applePhonesItems.price}
            currency={applePhonesItems.currency}
            period={applePhonesItems.period}
        />
    })

    const samsungPhonesItems = SamsungPhonesItemsData.map(samsungPhonesItems => {
        return <ItemShelves
            className='item-cards'
            key={samsungPhonesItems.id}
            href={samsungPhonesItems.href}
            imgSrc={samsungPhonesItems.imgSrc}
            imgAlt={samsungPhonesItems.imgAlt}
            itemDescription={samsungPhonesItems.itemDescription}
            price={samsungPhonesItems.price}
            currency={samsungPhonesItems.currency}
            period={samsungPhonesItems.period}
        />
    })



    return (

        <>

            <ShelveConainer href='https://www.google.com/' title='Apple'>
                {applePhonesItems}
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='Samsung'>
                {samsungPhonesItems}
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='Google'>
                <ItemShelves />
            </ShelveConainer>







            {/* For hide Big more Button & add component */}

            {
                state ? (
                    <>
                        {/* Tablets Shelve */}
                        < ShelveConainer href='/Tablets' title='Tablets'>
                            {/* {tabletsItems} */}
                        </ShelveConainer>

                        {/* Tvs Shelve */}
                        <ShelveConainer href='/Tvs' title='TVs'>
                            {/* {tvsItems} */}
                        </ShelveConainer>

                    </>

                ) : (

                    <BigMoreButton onClick={() => setState(true)} />

                )
            }


        </>

    )
}

export default Phones
