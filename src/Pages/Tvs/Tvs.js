import "./Tvs.css";
import { useState, useEffect } from "react";
import { BigMoreBtn } from "../../Components";
// // My utils function
import { shelvesDataloop } from "../../Utils";
// Redux toolkit
import { fetchProducts } from "../../rtk/slices/products-slice";
import { useSelector, useDispatch } from "react-redux";
import { hideTvsMoreBtn, selectTvsBtn } from "../../rtk/slices/bigMoreBtn-slice";

export default function Tvs() {
  // fetch Data from Redux
  const dispatch = useDispatch();
  const category = "tvs"
  useEffect(() => {
    // Check if specific data for this category page exist (object key ex: home, phone..) in Redux data, if not exist fetch
    if (!(category in data.entities)) {
      dispatch(fetchProducts(category));
    }
  }, []);
  const data = useSelector((data) => data.products);

  // show/hide Big more Button & add Extra Component
  const moreBtnState = useSelector(selectTvsBtn);

  // shelves data
  const [shelvesObj, setShelvesObj] = useState({
    lg: {
      href: "https://www.google.com/",
      title: "LG",
      dataName: "lg",
      extraPath: "",
    },
  });

  // shelves data that appear after click 'More' button
  const [extraShelvesObj, setExtraShelvesObj] = useState({
    samsung: {
      href: "https://www.google.com/",
      title: "Samsung",
      dataName: "samsung",
      extraPath: "",
    },
    sony: {
      href: "https://www.google.com/",
      title: "Sony",
      dataName: "sony",
      extraPath: "",
    },
    tcl: {
      href: "https://www.google.com/",
      title: "TCL",
      dataName: "tcl",
      extraPath: "",
    },
    panasonic: {
      href: "https://www.google.com/",
      title: "Panasonic",
      dataName: "panasonic",
      extraPath: "",
    },
    hisense: {
      href: "https://www.google.com/",
      title: "Hisense",
      dataName: "hisense",
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
        <BigMoreBtn onClick={() => dispatch(hideTvsMoreBtn())} />
      )}
    </>
  );
}
