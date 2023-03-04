import './Tablets.css'
import { useState, useEffect } from 'react'
import { ShelveConainer, ItemShelves, Button } from '../../Components'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from "../../rtk/slices/products-slice";


const Tablets = () => {
  // fetch Data from Redux
  const dispatch = useDispatch()
  useEffect(() => {dispatch(fetchProducts("tablets"))}, [])
  const data = useSelector(data => data.products)

  // Hide Big more Button & add components
  const [state, setState] = useState(false)

  return (
    <>
      <ShelveConainer href='https://www.google.com/' title='Apple'>
        {data?.apple?.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />)}
      </ShelveConainer>


      {/* Hide Big more Button & add components */}
      {
        state ? (
          <>
            < ShelveConainer href='https://www.google.com/' title='Samsung'>
              { }
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='realme'>
              { }
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='Amazon'>
              { }
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='Microsoft'>
              { }
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='Lenovo'>
              { }
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

export default Tablets