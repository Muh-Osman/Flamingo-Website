import './Accessories.css'
import { useState, useEffect } from 'react'
import { ShelveConainer, ItemShelves, Button } from '../../Components'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from "../../rtk/slices/products-slice";

const Accessories = () => {
  // fetch Data from Redux
  const dispatch = useDispatch()
  useEffect(() => {dispatch(fetchProducts("accessories"))}, [])
  const data = useSelector(data => data.products)


  // Hide Big more Button & add components
  const [state, setState] = useState(false)

  return (
    <>
      <ShelveConainer href='https://www.google.com/' title='Tools'>
        {data? data.toolsdata.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />): null}
      </ShelveConainer>


      {/* Hide Big more Button & add components */}
      {
        state ? (
          <>
            < ShelveConainer href='https://www.google.com/' title='Apple'>
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

export default Accessories