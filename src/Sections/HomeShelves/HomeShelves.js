import { useState } from 'react';
import { ShelvesBox, ShelveConainer, ItemShelves, BigMoreButton } from '../../Components'

import ForYouItemsData from '../../Data/ForYouData'
import MobilePhonesItemsData from '../../Data/MobilePhonesData'
import GamingItemsData from '../../Data/GamingData'
import SmartWatchesItemsData from '../../Data/SmartWatchesData'
import CamerasItemsData from '../../Data/CamerasData'
import ComputersItemsData from '../../Data/ComputersData'
import TabletsItemsData from '../../Data/TabletsData'
import TvsItemsData from '../../Data/TvsData'
import './HomeShelves.css'

const HomeShelves = () => {

    const [state, setState] = useState(false)

    const forYouItems = ForYouItemsData.map(forYouItems => {
        return <ItemShelves
            className='item-cards'
            key={forYouItems.id}
            href={forYouItems.href}
            imgSrc={forYouItems.imgSrc}
            imgAlt={forYouItems.imgAlt}
            itemDescription={forYouItems.itemDescription}
            price={forYouItems.price}
            currency={forYouItems.currency}
            period={forYouItems.period}
        />
    })

    const mobilePhonesItems = MobilePhonesItemsData.map(mobilePhonesItems => {
        return <ItemShelves
            className='item-cards'
            key={mobilePhonesItems.id}
            href={mobilePhonesItems.href}
            imgSrc={mobilePhonesItems.imgSrc}
            imgAlt={mobilePhonesItems.imgAlt}
            itemDescription={mobilePhonesItems.itemDescription}
            price={mobilePhonesItems.price}
            currency={mobilePhonesItems.currency}
            period={mobilePhonesItems.period}
        />
    })

    const gamingItems = GamingItemsData.map(gamingItems => {
        return <ItemShelves
            className='item-cards'
            key={gamingItems.id}
            href={gamingItems.href}
            imgSrc={gamingItems.imgSrc}
            imgAlt={gamingItems.imgAlt}
            itemDescription={gamingItems.itemDescription}
            price={gamingItems.price}
            currency={gamingItems.currency}
            period={gamingItems.period}
        />
    })

    const smartWatchesItems = SmartWatchesItemsData.map(smartWatchesItems => {
        return <ItemShelves
            className='item-cards'
            key={smartWatchesItems.id}
            href={smartWatchesItems.href}
            imgSrc={smartWatchesItems.imgSrc}
            imgAlt={smartWatchesItems.imgAlt}
            itemDescription={smartWatchesItems.itemDescription}
            price={smartWatchesItems.price}
            currency={smartWatchesItems.currency}
            period={smartWatchesItems.period}
        />
    })

    const camerasItems = CamerasItemsData.map(camerasItems => {
        return <ItemShelves
            className='item-cards'
            key={camerasItems.id}
            href={camerasItems.href}
            imgSrc={camerasItems.imgSrc}
            imgAlt={camerasItems.imgAlt}
            itemDescription={camerasItems.itemDescription}
            price={camerasItems.price}
            currency={camerasItems.currency}
            period={camerasItems.period}
        />
    })

    const computersItems = ComputersItemsData.map(computersItems => {
        return <ItemShelves
            className='item-cards'
            key={computersItems.id}
            href={computersItems.href}
            imgSrc={computersItems.imgSrc}
            imgAlt={computersItems.imgAlt}
            itemDescription={computersItems.itemDescription}
            price={computersItems.price}
            currency={computersItems.currency}
            period={computersItems.period}
        />
    })

    const tabletsItems = TabletsItemsData.map(tabletsItems => {
        return <ItemShelves
            className='item-cards'
            key={tabletsItems.id}
            href={tabletsItems.href}
            imgSrc={tabletsItems.imgSrc}
            imgAlt={tabletsItems.imgAlt}
            itemDescription={tabletsItems.itemDescription}
            price={tabletsItems.price}
            currency={tabletsItems.currency}
            period={tabletsItems.period}
        />
    })

    const tvsItems = TvsItemsData.map(tvsItems => {
        return <ItemShelves
            className='item-cards'
            key={tvsItems.id}
            href={tvsItems.href}
            imgSrc={tvsItems.imgSrc}
            imgAlt={tvsItems.imgAlt}
            itemDescription={tvsItems.itemDescription}
            price={tvsItems.price}
            currency={tvsItems.currency}
            period={tvsItems.period}
        />
    })


    const handleClick = (e) => {
        e.preventDefault()
    }

    return (

        <ShelvesBox>

            {/* <!-- For You shelve --> */}
            <ShelveConainer
                onClick={handleClick}
                href='/#'
                title='For you'
            >
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






            {
                state ? (
                    <>
                        {/* Tablets Shelve */}
                        < ShelveConainer href='/Tablets' title='Tablets'>
                            {tabletsItems}
                        </ShelveConainer>

                        {/* Tvs Shelve */}
                        <ShelveConainer href='/Tvs' title='TVs'>
                            {tvsItems}
                        </ShelveConainer>
                    </>
                ) : (
                    null
                )
            }

            <BigMoreButton onClick={() => setState(true)} />



        </ShelvesBox >

    )
}

export default HomeShelves