import { ShelvesBox, ShelveConainer, ItemShelves, BigMoreButton } from '../../Components'
import ForYouItemsData from '../../Data/ForYouData'
import MobilePhonesItemsData from '../../Data/MobilePhonesData'
import GamingItemsData from '../../Data/GamingData'
import SmartWatchesItemsData from '../../Data/SmartWatchesData'
import CamerasItemsData from '../../Data/CamerasData'
import ComputersItemsData from '../../Data/ComputersData'
import './HomeShelves.css'

const HomeShelves = () => {

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




    return (

        <ShelvesBox>

            {/* <!-- For You shelve --> */}
            <ShelveConainer href='https://www.google.com/' title='For you'>
                {forYouItems}
            </ShelveConainer>

            {/* <!-- Mobile Phones shelve --> */}
            <ShelveConainer href='https://www.google.com/' title='Mobile Phones'>
                {mobilePhonesItems}
            </ShelveConainer>

            {/* <!-- Gaming & VR shelve --> */}
            <ShelveConainer href='https://www.google.com/' title='Gaming & VR'>
                {gamingItems}
            </ShelveConainer>

            {/* <!-- Smart Watches shelve --> */}
            <ShelveConainer href='https://www.google.com/' title='Smart watches'>
                {smartWatchesItems}
            </ShelveConainer>

            {/* <!-- Cameras Shelve --> */}
            <ShelveConainer href='https://www.google.com/' title='Cameras'>
                {camerasItems}
            </ShelveConainer>

            {/* <!-- Computers Shelve --> */}
            <ShelveConainer href='https://www.google.com/' title='Computers'>
                {computersItems}
            </ShelveConainer>


            <BigMoreButton />

        </ShelvesBox>

    )
}

export default HomeShelves