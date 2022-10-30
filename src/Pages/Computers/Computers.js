import './Computers.css'
import { useState } from 'react'
import AppleComputersItemsData from '../../Data/ComputersData/AppleComputersData'
import { ShelveConainer, ItemShelves, BigMoreButton } from '../../Components'

const Computers = () => {


  // Hide Big more Button & add components
  const [state, setState] = useState(false)


  // Loop on Data
  const appleComputersItems = AppleComputersItemsData.map(appleComputersItems => {
    return <ItemShelves
      className='item-cards'
      key={appleComputersItems.id}
      href={appleComputersItems.href}
      imgSrc={appleComputersItems.imgSrc}
      imgAlt={appleComputersItems.imgAlt}
      itemDescription={appleComputersItems.itemDescription}
      price={appleComputersItems.price}
      currency={appleComputersItems.currency}
      period={appleComputersItems.period}
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

          <BigMoreButton onClick={() => setState(true)} />

        )
      }

    </>
  )
}

export default Computers