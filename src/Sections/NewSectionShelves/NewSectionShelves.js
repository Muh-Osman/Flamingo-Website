import { NewSectionContainer, ItemShelves } from '../../Components'
import OnRiseData from '../../Data/NewSectionData/OnRiseData'
import MostPopularData from '../../Data/NewSectionData/MostPopularData'
import AddedRecentlyData from '../../Data/NewSectionData/AddedRecentlyData'
import './NewSectionShelves.css'



const NewSectionShelves = () => {


  const onRiseItems = OnRiseData.map(item => {
    return <ItemShelves
      className={'item-cards-down'}
      key={item.id}
      item={item}
    />
  })

  const mostPopular = MostPopularData.map(item => {
    return <ItemShelves
      className={'item-cards-down'}
      key={item.id}
      item={item}
    />
  })

  const addedRecently = AddedRecentlyData.map(item => {
    return <ItemShelves
      className={'item-cards-down'}
      key={item.id}
      item={item}
    />
  })


  return (

    <section className="new-sec">

      <NewSectionContainer href='https://www.google.com/' title={'On rise ⚡'}>
        {onRiseItems}
      </NewSectionContainer>

      <NewSectionContainer href='https://www.google.com/' title={'Most popular'}>
        {mostPopular}
      </NewSectionContainer>

      <NewSectionContainer href='https://www.google.com/' title={'Added recently'}>
        {addedRecently}
      </NewSectionContainer>

    </section>

  )
}

export default NewSectionShelves