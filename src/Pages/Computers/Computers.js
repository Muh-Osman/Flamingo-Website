import "./Computers.css";
import { useState, useEffect } from "react";
import { BigMoreBtn } from "../../Components";
// // My utils function
import { shelvesDataloop } from "../../Utils";
// Redux toolkit
import { fetchProducts } from "../../rtk/slices/products-slice";
import { useSelector, useDispatch } from "react-redux";
import { hideComputersMoreBtn, selectComputersBtn } from "../../rtk/slices/bigMoreBtn-slice";

export default function Computers() {
  // fetch Data from Redux
  const dispatch = useDispatch();
  const category = "computers"
  useEffect(() => {
    // Check if specific data for this category page exist (object key ex: home, phone..) in Redux data, if not exist fetch
    if (!(category in data.entities)) {
      dispatch(fetchProducts(category));
    }
  }, []);
  const data = useSelector((data) => data.products);

  // show/hide Big more Button & add Extra Component
  const moreBtnState = useSelector(selectComputersBtn);

  // shelves data
  const [shelvesObj, setShelvesObj] = useState({
    apple: {
      href: "https://www.google.com/",
      title: "Apple",
      dataName: "apple",
      extraPath: "",
    },
  });

  // shelves data that appear after click 'More' button
  const [extraShelvesObj, setExtraShelvesObj] = useState({
    hp: {
      href: "https://www.google.com/",
      title: "hp",
      dataName: "hp",
      extraPath: "",
    },
    lenovo: {
      href: "https://www.google.com/",
      title: "Lenovo",
      dataName: "lenovo",
      extraPath: "",
    },
    dell: {
      href: "https://www.google.com/",
      title: "Dell",
      dataName: "dell",
      extraPath: "",
    },
    asus: {
      href: "https://www.google.com/",
      title: "Asus",
      dataName: "asus",
      extraPath: "",
    },
    msi: {
      href: "https://www.google.com/",
      title: "MSI",
      dataName: "msi",
      extraPath: "",
    },
    acer: {
      href: "https://www.google.com/",
      title: "Acer",
      dataName: "acer",
      extraPath: "",
    },
  });

  return (
    <>
      {shelvesDataloop(shelvesObj, data, category)}

      {/* Hide Big more Button & add components */}
      {moreBtnState ? (
        shelvesDataloop(extraShelvesObj, data)
      ) : (
        <BigMoreBtn onClick={() => dispatch(hideComputersMoreBtn())} />
      )}
    </>
  );
}
