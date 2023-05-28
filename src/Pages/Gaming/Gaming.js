import "./Gaming.css";
import { useState, useEffect } from "react";
import { BigMoreBtn } from "../../Components";
// // My utils function
import { shelvesDataloop } from "../../Utils";
// Redux toolkit
import { fetchProducts } from "../../rtk/slices/products-slice";
import { useSelector, useDispatch } from "react-redux";
import { hideGamingMoreBtn, selectGamingBtn } from "../../rtk/slices/bigMoreBtn-slice";

export default function Gaming() {
  // fetch Data from Redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts("gaming"));
  }, []);
  const data = useSelector((data) => data.products);

  // show/hide Big more Button & add Extra Component
  const moreBtnState = useSelector(selectGamingBtn);

  // shelves data
  const [shelvesObj, setShelvesObj] = useState({
    sony: {
      href: "https://www.google.com/",
      title: "Sony",
      dataName: "sony",
      extraPath: "",
    },
  });

  // shelves data that appear after click 'More' button
  const [extraShelvesObj, setExtraShelvesObj] = useState({
    microsoft: {
      href: "https://www.google.com/",
      title: "Microsoft",
      dataName: "microsoft",
      extraPath: "",
    },
    nintendo: {
      href: "https://www.google.com/",
      title: "Nintendo",
      dataName: "nintendo",
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
        <BigMoreBtn onClick={() => dispatch(hideGamingMoreBtn())} />
      )}
    </>
  );
}
