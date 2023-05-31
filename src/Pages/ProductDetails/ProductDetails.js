import ".//ProductDetails.css";
import Button from "../../Components/Button/Button";
import { useEffect, useLayoutEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../rtk/slices/products-slice";

const ProductDetails = () => {
  // Back to last page
  const navigate = useNavigate();

  // Get URL then split it ex: (http://localhost:3000/phones/apple/2)
  let url = useLocation().pathname.split("/"); // ['...', 'phones', 'apple', '2']
  let [, category, brand, id] = [...url];

  // fetch Data from Redux
  const dispatch = useDispatch();

  useEffect(() => {
    if (data === undefined) {
      dispatch(fetchProducts(category));
    }
  }, []);



  useLayoutEffect(() => {
    // Apply some CSS Style onmount <ProductDetails /> Component
    const webStyle = document.getElementById("root");
    webStyle.classList.add("style-onclick-item");

    // Keep active style to home btn even after render <ProductDetails>
    if (category === "home") {
      webStyle.classList.add("active-home-btn");
    }

    // CleanUp (remove class onUnmount)
    return () => {
      webStyle.classList.remove("style-onclick-item");
      webStyle.classList.remove("active-home-btn");
    };
  }, [])

  
  //   Get Data from Redux (note: "products" word come from redux store file)
  let data = useSelector((data) => data?.products?.entities?.[category]?.[brand]?.[id - 1]);
  // let x = useSelector((data) => data?.products?.entities);
  // console.log(x)

  return (
    <>
      <Button
        onClick={() => navigate(-1)}
        accessibility={"Back"}
        title={"Back"}
      />

      <h1>Product Details</h1>
      <div>Product ID: {data?.id} </div>
      <div>Product Image-src: {data?.src} </div>
      <div>Product Description: {data?.description}</div>
      <div>Product price: {data?.price} </div>
      <div>Product Currency: {data?.currency} </div>
      <div>Product Period: {data?.period} </div>
    </>
  );
};

export default ProductDetails;
