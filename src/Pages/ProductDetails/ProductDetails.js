import { useParams, useNavigate } from 'react-router-dom'
import Button from '../../Components/Button/Button';
import './ProductDetails.css'

const ProductDetails = (props) => {


    const params = useParams()
    const navigate = useNavigate()




    return (
        <>

            <Button onClick={() => navigate(-1)} accessibility={'Back'} title={'Back'} />
            <h1>Product Details</h1>
            <div>Product ID:          {props.item[params.productId -1].id}         </div>
            <div>Product Image-src:   {props.item[params.productId -1].src}        </div>
            <div>Product Description: {props.item[params.productId -1].description}</div>
            <div>Product price:       {props.item[params.productId -1].price}      </div>
            <div>Product Currency:    {props.item[params.productId -1].currency}   </div>
            <div>Product Period:      {props.item[params.productId -1].period}     </div>

            <div>Done my param page#    {params.page}</div>
            <div>Done my param ID#      {params.productId}</div>


        </>
    )
}

export default ProductDetails