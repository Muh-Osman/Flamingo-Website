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
                {data?.foryou?.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />)}
            </ShelveConainer>

            {/* <!-- Mobile Phones shelve --> */}
            <ShelveConainer href='/phones' title='Mobile Phones'>
                {data?.mobilephones?.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />)}
            </ShelveConainer>

            {/* <!-- Gaming & VR shelve --> */}
            <ShelveConainer href='/gaming' title='Gaming & VR'>
                {data?.gaming?.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />)}
            </ShelveConainer>

            {/* <!-- Smart Watches shelve --> */}
            <ShelveConainer href='/watches' title='Smart Watches'>
                {data?.smartwatches?.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />)}
            </ShelveConainer>

            {/* <!-- Cameras Shelve --> */}
            <ShelveConainer href='/cameras' title='Cameras'>
                {data?.cameras?.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />)}
            </ShelveConainer>

            {/* <!-- Computers Shelve --> */}
            <ShelveConainer href='/computers' title='Computers'>
                {data?.computers?.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />)}
            </ShelveConainer>



            {/* For hide Big more Button & add component */}
            {
                state ? (
                    <>
                        {/* Tablets Shelve */}
                        < ShelveConainer href='/tablets' title='Tablets'>
                            {data?.tablets?.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />)}
                        </ShelveConainer>

                        {/* Tvs Shelve */}
                        <ShelveConainer href='/tvs' title='TVs'>
                            {data?.tvs?.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />)}
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