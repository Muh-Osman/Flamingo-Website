import './Cameras.css'
import { useState } from 'react'
import CanonItemsData from '../../Data/CamerasData/CanonCamerasData'
import { ShelveConainer, ItemShelves, Button } from '../../Components'





const Cameras = () => {



  // Hide Big more Button & add components
  const [state, setState] = useState(false)


  // Loop on Data
  const canonItems = CanonItemsData.map(item => {
    return <ItemShelves
      className={'item-cards'}
      key={item.id}
      item={item}
    />
  })




  return (

    <>


      <ShelveConainer href='https://www.google.com/' title='Canon'>
        {canonItems}
      </ShelveConainer>




      {/* Hide Big more Button & add components */}

      {
        state ? (
          <>
            < ShelveConainer href='https://www.google.com/' title='Nikon'>
              { }
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='Sony'>
              { }
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='GoPro'>
              { }
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='Lenses'>
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

export default Cameras