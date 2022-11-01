import './Cameras.css'
import { useState } from 'react'
import CanonItemsData from '../../Data/CamerasData/CanonData'
import { ShelveConainer, ItemShelves, BigMoreButton } from '../../Components'

const Cameras = () => {



  // Hide Big more Button & add components
  const [state, setState] = useState(false)


  // Loop on Data
  const canonItems = CanonItemsData.map(canonItems => {
    return <ItemShelves
      className='item-cards'
      key={canonItems.id}
      href={canonItems.href}
      imgSrc={canonItems.imgSrc}
      imgAlt={canonItems.imgAlt}
      itemDescription={canonItems.itemDescription}
      price={canonItems.price}
      currency={canonItems.currency}
      period={canonItems.period}
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

          <BigMoreButton onClick={() => setState(true)} />

        )
      }


    </>
  )
}

export default Cameras