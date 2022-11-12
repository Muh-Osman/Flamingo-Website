import './Gaming.css'
import { useState } from 'react'

import PlaystationsItemsData from '../../Data/Gaming/PlaystationsData'
import { ShelveConainer, ItemShelves, Button } from '../../Components'




const Gaming = () => {


  // Hide Big more Button & add components
  const [state, setState] = useState(false)


  // Loop on Data
  const playstationsItems = PlaystationsItemsData.map(item => {
    return <ItemShelves
      className={'item-cards'}
      key={item.id}
      item={item}
    />
  })



  return (
    <>

      <ShelveConainer href='https://www.google.com/' title='PlayStation'>
        {playstationsItems}
      </ShelveConainer>




      {/* Hide Big more Button & add components */}

      {
        state ? (
          <>

            < ShelveConainer href='https://www.google.com/' title='Xbox'>
              { }
            </ShelveConainer>


            <ShelveConainer href='https://www.google.com/' title='Nintendo'>
              { }
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='VR'>
              { }
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='Blu-ray'>
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