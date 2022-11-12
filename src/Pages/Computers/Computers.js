import './Computers.css'
import { useState } from 'react'
import AppleComputersItemsData from '../../Data/ComputersData/AppleComputersData'
import { ShelveConainer, ItemShelves, Button } from '../../Components'

const Computers = () => {


  // Hide Big more Button & add components
  const [state, setState] = useState(false)


  // Loop on Data
  const appleComputersItems = AppleComputersItemsData.map(item => {
    return <ItemShelves
      className={'item-cards'}
      key={item.id}
      item={item}
    />
  })





  return (
    <>

      <ShelveConainer href='https://www.google.com/' title='Apple'>
        {appleComputersItems}
      </ShelveConainer>




      {/* Hide Big more Button & add components */}

      {
        state ? (
          <>
            < ShelveConainer href='https://www.google.com/' title='HP'>
              { }
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='Lenovo'>
              { }
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='Dell'>
              { }
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='Asus'>
              { }
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='MSI'>
              { }
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='Acer'>
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

export default Computers