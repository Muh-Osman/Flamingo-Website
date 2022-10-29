import { NewSectionContainer, ItemShelves } from '../../Components'
import OnRiseData from '../../Data/NewSectionData/OnRiseData'
import MostPopularData from '../../Data/NewSectionData/MostPopularData'
import AddedRecentlyData from '../../Data/NewSectionData/AddedRecentlyData'
import './NewSectionShelves.css'



const NewSectionShelves = () => {


  const onRiseItems = OnRiseData.map(onRiseItem => {
    return <ItemShelves
      className='item-cards-down'
      key={onRiseItem.id}
      href={onRiseItem.href}
      imgSrc={onRiseItem.imgSrc}
      imgAlt={onRiseItem.imgAlt}
      itemDescription={onRiseItem.itemDescription}
      price={onRiseItem.price}
      currency={onRiseItem.currency}
      period={onRiseItem.period}
    />
  })

  const mostPopular = MostPopularData.map(mostPopularItem => {
    return <ItemShelves
      className='item-cards-down'
      key={mostPopularItem.id}
      href={mostPopularItem.href}
      imgSrc={mostPopularItem.imgSrc}
      imgAlt={mostPopularItem.imgAlt}
      itemDescription={mostPopularItem.itemDescription}
      price={mostPopularItem.price}
      currency={mostPopularItem.currency}
      period={mostPopularItem.period}
    />
  })

  const addedRecently = AddedRecentlyData.map(addedRecentlyItem => {
    return <ItemShelves
      className='item-cards-down'
      key={addedRecentlyItem.id}
      href={addedRecentlyItem.href}
      imgSrc={addedRecentlyItem.imgSrc}
      imgAlt={addedRecentlyItem.imgAlt}
      itemDescription={addedRecentlyItem.itemDescription}
      price={addedRecentlyItem.price}
      currency={addedRecentlyItem.currency}
      period={addedRecentlyItem.period}
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