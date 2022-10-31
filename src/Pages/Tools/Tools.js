import './Tools.css'
import { useState } from 'react'
import ElectronicsRepairToolsItemsData from '../../Data/ToolsData/ElectronicsRepairToolsData'
import { ShelveConainer, ItemShelves, BigMoreButton } from '../../Components'

const Tools = () => {



  // Hide Big more Button & add components
  const [state, setState] = useState(false)


  // Loop on Data
  const electronicsRepairToolsItems = ElectronicsRepairToolsItemsData.map(electronicsRepairToolsItems => {
    return <ItemShelves
      className='item-cards'
      key={electronicsRepairToolsItems.id}
      href={electronicsRepairToolsItems.href}
      imgSrc={electronicsRepairToolsItems.imgSrc}
      imgAlt={electronicsRepairToolsItems.imgAlt}
      itemDescription={electronicsRepairToolsItems.itemDescription}
      price={electronicsRepairToolsItems.price}
      currency={electronicsRepairToolsItems.currency}
      period={electronicsRepairToolsItems.period}
    />
  })





  return (
    <>

      <ShelveConainer href='https://www.google.com/' title='Electronics repair tools'>
        {electronicsRepairToolsItems}
      </ShelveConainer>




      {/* Hide Big more Button & add components */}

      {
        state ? (
          <>
            < ShelveConainer href='https://www.google.com/' title='Home tools'>
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

export default Tools