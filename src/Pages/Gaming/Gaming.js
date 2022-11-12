import './Gaming.css'
import { useState } from 'react'

import SonyItemsData from '../../Data/GamingData/SonyGamingData'
import { ShelveConainer, ItemShelves, Button } from '../../Components'




const Gaming = () => {


  // Hide Big more Button & add components
  const [state, setState] = useState(false)


  // Loop on Data
  const sonyItems = SonyItemsData.map(item => {
    return <ItemShelves
      className={'item-cards'}
      key={item.id}
      item={item}
    />
  })



  return (
    <>

      <ShelveConainer href='https://www.google.com/' title='Sony'>
        {sonyItems}
      </ShelveConainer>




      {/* Hide Big more Button & add components */}

      {
        state ? (
          <>

            < ShelveConainer href='https://www.google.com/' title='Microsoft'>
              { }
            </ShelveConainer>


            <ShelveConainer href='https://www.google.com/' title='Nintendo'>
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

export default Gaming