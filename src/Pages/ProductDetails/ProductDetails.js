import ".//ProductDetails.css";
import Button from "../../Components/Button/Button";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../rtk/slices/products-slice";

const ProductDetails = () => {
  // Back to last page
  const navigate = useNavigate();
  // Get URL then split it ex: (http://localhost:3000/phones/apple/2) => ["", "phones", "apple", "1"]
  let category = useLocation().pathname.split("/")[1];
  let brand = useLocation().pathname.split("/")[2];
  let index = useLocation().pathname.split("/")[3] - 1;

  // fetch Data from Redux
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) {
      dispatch(fetchProducts(category));
    }

    // Apply some CSS Style onmount <ProductDetails /> Component
    const webStyle = document.getElementById("root");
    webStyle.classList.add("style-onclick-item");
    // CleanUp (remove class onUnmount)
    return () => {
      webStyle.classList.remove("style-onclick-item");
    };
  }, []);

  //   Get Data from Redux
  let data = useSelector((data) => data.products[brand][index]);


  return (
    <>
      <Button
        onClick={() => navigate(-1)}
        accessibility={"Back"}
        title={"Back"}
      />

      {/* <h1>Product Details</h1>
      <div>Product ID: {data.id} </div>
      <div>Product Image-src: {data.src} </div>
      <div>Product Description: {data.description}</div>
      <div>Product price: {data.price} </div>
      <div>Product Currency: {data.currency} </div>
      <div>Product Period: {data.period} </div> */}
    </>
  );
};

export default ProductDetails;
