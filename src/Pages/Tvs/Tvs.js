import './Tvs.css'
import { useState } from 'react'
import LgTvsItemsData from '../../Data/TVsData/LGTVsData'
import { ShelveConainer, ItemShelves, BigMoreButton } from '../../Components'



const Tvs = () => {



  // Hide Big more Button & add components
  const [state, setState] = useState(false)


  // Loop on Data
  const lgTvsItems = LgTvsItemsData.map(item => {
    return <ItemShelves
      className={'item-cards'}
      key={item.id}
      item={item}
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