import { NewSectionContainer, NewSectionItem } from '../../Components'
import OnRiseData from '../../Data/OnRiseData'
import MostPopularData from '../../Data/MostPopularData'
import AddedRecentlyData from '../../Data/AddedRecentlyData'
import './NewSectionShelves.css'



const NewSectionShelves = () => {


  const onRiseItems = OnRiseData.map(onRiseItem => {
    return <NewSectionItem
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
    return <NewSectionItem
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
    return <NewSectionItem
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

      <NewSectionContainer title={'On rise ⚡'}>
        {onRiseItems}
      </NewSectionContainer>

      <NewSectionContainer title={'Most popular'}>
        {mostPopular}
      </NewSectionContainer>

      <NewSectionContainer title={'Added recently'}>
        {addedRecently}
      </NewSectionContainer>

    </section>

  )
}

export default NewSectionShelves