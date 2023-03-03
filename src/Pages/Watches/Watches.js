import './Watches.css'
import { ShelveConainer, ItemShelves, Button } from '../../Components'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from "../../rtk/slices/products-slice";

const Watches = () => {
  // fetch Data from Redux
  const dispatch = useDispatch()
  useEffect(() => {dispatch(fetchProducts("watches"))}, [])
  const data = useSelector(data => data.products)

  
  // Hide Big more Button & add components
  const [state, setState] = useState(false)

  return (
    <>
      <ShelveConainer href='https://www.google.com/' title='Apple'>
        {data? data.applewatchesdata.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />): null}
      </ShelveConainer>


      {/* Hide Big more Button & add components */}

      {
        state ? (
          <>
            < ShelveConainer href='https://www.google.com/' title='Samsung'>
              { }
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='Fitbit'>
              { }
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='Garmin'>
              { }
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='Google'>
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

export default Watches