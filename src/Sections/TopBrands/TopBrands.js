import Hr from '../Hr/Hr'
import { TopBrandsItem } from '../../Components'
import TopBrandsData from '../../Data/TopBrandsData/TopBrandsData'
import './TopBrands.css'



const TopBrands = () => {

  const brands = TopBrandsData.map(brand => {

    return <TopBrandsItem
      key={brand.id}
      divClassName={brand.divClassName}
      aClassName={brand.aClassName}
      svg={brand.svg}
    />

  })


  return (
    <>
      <Hr />

      <section className="brand-section">
        <div className="top-brands-shelve">

          <div>
            <h3>Top brands</h3>
          </div>

          <div className="brand-box">

            {brands}

          </div>

        </div>
      </section>

    </>
  )
}

export default TopBrands