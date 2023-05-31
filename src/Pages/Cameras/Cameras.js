import "./Cameras.css";
import { useState, useEffect } from "react";
import { BigMoreBtn } from "../../Components";
// // My utils function
import { shelvesDataloop } from "../../Utils";
// Redux toolkit
import { fetchProducts } from "../../rtk/slices/products-slice";
import { useSelector, useDispatch } from "react-redux";
import { hideCamerasMoreBtn, selectCamerasBtn } from "../../rtk/slices/bigMoreBtn-slice";

export default function Cameras() {
  // fetch Data from Redux
  const dispatch = useDispatch();
  const category = "cameras"
  useEffect(() => {
    // Check if specific data for this category page exist (object key ex: home, phone..) in Redux data, if not exist fetch
    if (!(category in data.entities)) {
      dispatch(fetchProducts(category));
    }
  }, []);
  const data = useSelector((data) => data.products);

  // show/hide Big more Button & add Extra Component
  const moreBtnState = useSelector(selectCamerasBtn);

  // shelves data
  const [shelvesObj, setShelvesObj] = useState({
    canon: {
      href: "https://www.google.com/",
      title: "Canon",
      dataName: "canon",
      extraPath: "",
    },
  });

  // shelves data that appear after click 'More' button
  const [extraShelvesObj, setExtraShelvesObj] = useState({
    nikon: {
      href: "https://www.google.com/",
      title: "Nikon",
      dataName: "nikon",
      extraPath: "",
    },
    sony: {
      href: "https://www.google.com/",
      title: "Sony",
      dataName: "sony",
      extraPath: "",
    },
    goPro: {
      href: "https://www.google.com/",
      title: "GoPro",
      dataName: "goPro",
      extraPath: "",
    },
    lenses: {
      href: "https://www.google.com/",
      title: "Lenses",
      dataName: "lenses",
      extraPath: "",
    },
  });

  return (
    <>
      {shelvesDataloop(shelvesObj, data, category)}

      {/* Hide Big more Button & add components */}
      {moreBtnState ? (
        shelvesDataloop(extraShelvesObj, data, category)
      ) : (
        <BigMoreBtn onClick={() => dispatch(hideCamerasMoreBtn())} />
      )}
    </>
  );
}
