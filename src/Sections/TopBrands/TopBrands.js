import Hr from '../Hr/Hr'
import { TopBrandsItem } from '../../Components'
import { topBrandSvgIcon } from '../../Assets/Icons/topBrandSvgIcon'
import './TopBrands.css'



const TopBrands = () => {

  const brands = topBrandSvgIcon.map(brand => {

    return <TopBrandsItem
      key={brand.id}
      brand={brand}
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