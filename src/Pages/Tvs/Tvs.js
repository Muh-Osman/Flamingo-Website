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
  useEffect(() => {
    dispatch(fetchProducts("tvs"));
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
      {shelvesDataloop(shelvesObj, data)}

      {/* Hide Big more Button & add components */}

      {moreBtnState ? (
        shelvesDataloop(extraShelvesObj, data)
      ) : (
        <BigMoreBtn onClick={() => dispatch(hideTvsMoreBtn())} />
      )}
    </>
  );
}
