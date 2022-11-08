import './Watches.css'
import { useState } from 'react'
import AppleWatchesItemsData from '../../Data/WatchesData/AppleWatchesData'
import { ShelveConainer, ItemShelves, BigMoreButton } from '../../Components'

const Watches = () => {


  // Hide Big more Button & add components
  const [state, setState] = useState(false)


  // Loop on Data
  const appleWatchesItems = AppleWatchesItemsData.map(item => {
    return <ItemShelves
      className={'item-cards'}
      key={item.id}
      item={item}
    />
  })




  return (

    <>
      <ShelveConainer href='https://www.google.com/' title='Apple'>
        {appleWatchesItems}
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

          <BigMoreButton onClick={() => setState(true)} />

        )
      }
    </>
  )
}

export default Watches