import './Accessories.css'
import { useState } from 'react'
import ToolsItemsData from '../../Data/AccessoriesData/ToolsData'
import { ShelveConainer, ItemShelves, Button } from '../../Components'

const Accessories = () => {



  // Hide Big more Button & add components
  const [state, setState] = useState(false)


  // Loop on Data
  const toolsItems = ToolsItemsData.map(item => {
    return <ItemShelves
      className={'item-cards'}
      key={item.id}
      item={item}
    />
  })





  return (
    <>

      <ShelveConainer href='https://www.google.com/' title='Tools'>
        {toolsItems}
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