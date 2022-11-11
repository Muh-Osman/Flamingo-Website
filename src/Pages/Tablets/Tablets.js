import './Tablets.css'
import { useState } from 'react'
import AppleTabletsItemsData from '../../Data/TabletsData/AppleTabletsData'
import { ShelveConainer, ItemShelves, Button } from '../../Components'

const Tablets = () => {



  // Hide Big more Button & add components
  const [state, setState] = useState(false)


  // Loop on Data
  const appleTabletsItems = AppleTabletsItemsData.map(item => {
    return <ItemShelves
      className={'item-cards'}
      key={item.id}
      item={item}
    />
  })




  return (
    <>

      <ShelveConainer href='https://www.google.com/' title='Apple'>
        {appleTabletsItems}
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
          <Button onClick={() => setState(true)} className='big-more-btn' title='More' />

        )
      }

    </>
  )
}

export default Tablets