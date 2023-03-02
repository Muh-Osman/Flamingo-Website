import { useState } from 'react'
import { ShelveConainer, ItemShelves, Button } from '../../Components'
import './Home.css'

import ForYouItemsData from '../../Data/HomeData/ForYouData'
import MobilePhonesItemsData from '../../Data/HomeData/MobilePhonesData'
import GamingItemsData from '../../Data/HomeData/GamingData'
import SmartWatchesItemsData from '../../Data/HomeData/SmartWatchesData'
import CamerasItemsData from '../../Data/HomeData/CamerasData'
import ComputersItemsData from '../../Data/HomeData/ComputersData'
import TabletsItemsData from '../../Data/HomeData/TabletsData'
import TvsItemsData from '../../Data/HomeData/TvsData'


const Home = () => {

    // For hide Big more Button & add component
    const [state, setState] = useState(false)

    // Loop on Data
    const forYouItems = ForYouItemsData.map(item => {
        return <ItemShelves
            className={'item-cards'}
            key={item.id}
            item={item}
        />
    })

    const mobilePhonesItems = MobilePhonesItemsData.map(item => {
        return <ItemShelves
            className={'item-cards'}
            key={item.id}
            item={item}
        />
    })

    const gamingItems = GamingItemsData.map(item => {
        return <ItemShelves
            className={'item-cards'}
            key={item.id}
            item={item}
        />
    })

    const smartWatchesItems = SmartWatchesItemsData.map(item => {
        return <ItemShelves
            className={'item-cards'}
            key={item.id}
            item={item}
        />
    })

    const camerasItems = CamerasItemsData.map(item => {
        return <ItemShelves
            className={'item-cards'}
            key={item.id}
            item={item}
        />
    })

    const computersItems = ComputersItemsData.map(item => {
        return <ItemShelves
            className={'item-cards'}
            key={item.id}
            item={item}
        />
    })







    return (
        <>

            {/* <!-- For You shelve --> */}
            <ShelveConainer href='/' title='For you'>
                {forYouItems}
            </ShelveConainer>

            {/* <!-- Mobile Phones shelve --> */}
            <ShelveConainer href='/Phones' title='Mobile Phones'>
                {mobilePhonesItems}
            </ShelveConainer>

            {/* <!-- Gaming & VR shelve --> */}
            <ShelveConainer href='/Gaming' title='Gaming & VR'>
                {gamingItems}
            </ShelveConainer>

            {/* <!-- Smart Watches shelve --> */}
            <ShelveConainer href='/Watches' title='Smart watches'>
                {smartWatchesItems}
            </ShelveConainer>

            {/* <!-- Cameras Shelve --> */}
            <ShelveConainer href='/Cameras' title='Cameras'>
                {camerasItems}
            </ShelveConainer>

            {/* <!-- Computers Shelve --> */}
            <ShelveConainer href='/Computers' title='Computers'>
                {computersItems}
            </ShelveConainer>




            {/* For hide Big more Button & add component */}

            {
                state ? (
                    <>
                        {/* Tablets Shelve */}
                        < ShelveConainer href='/Tablets' title='Tablets'>
                            {TabletsItemsData.map(item => {
                                return <ItemShelves
                                        className={'item-cards'}
                                        key={item.id}
                                        item={item}
                                        />
                            })}
                        </ShelveConainer>

                        {/* Tvs Shelve */}
                        <ShelveConainer href='/Tvs' title='TVs'>
                            {TvsItemsData.map(item => {
                                return <ItemShelves
                                        className={'item-cards'}
                                        key={item.id}
                                        item={item}
                                        />
                            })}
                        </ShelveConainer>
                    </>
                ) : (
                    //  <Big More Button 
                    <Button onClick={() => setState(true)} className={'big-more-btn'} title={'More'} />
                )
            }

        </>
    )
}

export default Home