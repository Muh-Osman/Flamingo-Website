import './Home.css'
import { useState, useEffect } from 'react'
import { ShelveConainer, ItemShelves, Button } from '../../Components'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from "../../rtk/slices/products-slice";


const Home = () => {
    // fetch Data from Redux
    const dispatch = useDispatch()
    useEffect(() => {dispatch(fetchProducts("home"))}, [])
    const data = useSelector(data => data.products)

    // For hide Big more Button & add component
    const [state, setState] = useState(false)

    return (
        <>

            {/* <!-- For You shelve --> */}
            <ShelveConainer href='/' title='For you'>
                {data? data.foryoudata.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />): null}
            </ShelveConainer>

            {/* <!-- Mobile Phones shelve --> */}
            <ShelveConainer href='/Phones' title='Mobile Phones'>
                {data? data.mobilephonesdata.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />): null}
            </ShelveConainer>

            {/* <!-- Gaming & VR shelve --> */}
            <ShelveConainer href='/Gaming' title='Gaming & VR'>
                {data? data.gamingdata.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />): null}
            </ShelveConainer>

            {/* <!-- Smart Watches shelve --> */}
            <ShelveConainer href='/Watches' title='Smart watches'>
                {data? data.smartwatchesdata.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />): null}
            </ShelveConainer>

            {/* <!-- Cameras Shelve --> */}
            <ShelveConainer href='/Cameras' title='Cameras'>
                {data? data.camerasdata.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />): null}
            </ShelveConainer>

            {/* <!-- Computers Shelve --> */}
            <ShelveConainer href='/Computers' title='Computers'>
                {data? data.computersdata.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />): null}
            </ShelveConainer>



            {/* For hide Big more Button & add component */}
            {
                state ? (
                    <>
                        {/* Tablets Shelve */}
                        < ShelveConainer href='/Tablets' title='Tablets'>
                            {data? data.tabletsdata.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />): null}
                        </ShelveConainer>

                        {/* Tvs Shelve */}
                        <ShelveConainer href='/Tvs' title='TVs'>
                            {data? data.tvsdata.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />): null}
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