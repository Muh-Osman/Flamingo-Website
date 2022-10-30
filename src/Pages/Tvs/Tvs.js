import './Tvs.css'
import { useState } from 'react'
import LgTvsItemsData from '../../Data/TVsData/LGTVsData'
import { ShelveConainer, ItemShelves, BigMoreButton } from '../../Components'



const Tvs = () => {




  // Hide Big more Button & add components
  const [state, setState] = useState(false)


  // Loop on Data
  const lgTvsItems = LgTvsItemsData.map(lgTvsItems => {
    return <ItemShelves
      className='item-cards'
      key={lgTvsItems.id}
      href={lgTvsItems.href}
      imgSrc={lgTvsItems.imgSrc}
      imgAlt={lgTvsItems.imgAlt}
      itemDescription={lgTvsItems.itemDescription}
      price={lgTvsItems.price}
      currency={lgTvsItems.currency}
      period={lgTvsItems.period}
    />
  })


  return (
    <>

      <ShelveConainer href='https://www.google.com/' title='LG'>
        {lgTvsItems}
      </ShelveConainer>




      {/* Hide Big more Button & add components */}

      {
        state ? (
          <>
            < ShelveConainer href='https://www.google.com/' title='Samsung'>
              { }
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='Sony'>
              { }
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='TCL'>
              { }
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='Panasonic '>
              { }
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='Hisense'>
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

export default Tvs