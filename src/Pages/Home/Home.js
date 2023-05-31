import "./Home.css";
import { useState, useEffect } from "react";
import { BigMoreBtn } from "../../Components";
// My utils function
import { shelvesDataloop } from "../../Utils";
// Redux toolkit
import { fetchProducts } from "../../rtk/slices/products-slice";
import { useSelector, useDispatch } from "react-redux";
import { hideHomeMoreBtn, selectHomeBtn } from "../../rtk/slices/bigMoreBtn-slice";

export default function Home() {
  // fetch Data from Redux
  const dispatch = useDispatch();
  const category = "home"
  useEffect(() => {
    // Check if specific data for this category page exist (object key ex: home, phone..) in Redux data, if not exist fetch
    if (!(category in data.entities)) {
      dispatch(fetchProducts(category));
    }
  }, []);
  const data = useSelector((data) => data.products);

  // show/hide Big more Button & add Extra Component
  const moreBtnState = useSelector(selectHomeBtn);

  // shelves data
  const [shelvesObj, setShelvesObj] = useState({
    foryou: {
      href: "/",
      title: "For you",
      dataName: "foryou",
      extraPath: "home/",
    },
    mobilephones: {
      href: "/phones",
      title: "Mobile Phones",
      dataName: "mobilephones",
      extraPath: "home/",
    },
    gaming: {
      href: "/gaming",
      title: "Gaming & VR",
      dataName: "gaming",
      extraPath: "home/",
    },
    smartwatches: {
      href: "/watches",
      title: "Smart Watches",
      dataName: "smartwatches",
      extraPath: "home/",
    },
    cameras: {
      href: "/cameras",
      title: "Cameras",
      dataName: "cameras",
      extraPath: "home/",
    },
    computers: {
      href: "/computers",
      title: "Computers",
      dataName: "computers",
      extraPath: "home/",
    },
  });
  // shelves data that appear after click 'More' button
  const [extraShelvesObj, setExtraShelvesObj] = useState({
    tablets: {
      href: "/tablets",
      title: "Tablets",
      dataName: "tablets",
      extraPath: "home/",
    },
    tvs: {
      href: "/tvs",
      title: "TVs",
      dataName: "tvs",
      extraPath: "home/",
    },
  });

  return (
    <>
      {shelvesDataloop(shelvesObj, data, category)}

      {/* Hide Big more Button & add component */}
      {moreBtnState ? (
        shelvesDataloop(extraShelvesObj, data, category)
      ) : (
        <BigMoreBtn onClick={() => dispatch(hideHomeMoreBtn())} />
      )}
    </>
  );
}
