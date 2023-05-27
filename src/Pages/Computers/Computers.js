import "./Computers.css";
import { useState, useEffect } from "react";
import { BigMoreBtn } from "../../Components";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../rtk/slices/products-slice";
import { shelvesDataloop } from "../../Utils";

export default function Computers() {
  // fetch Data from Redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts("computers"));
  }, []);
  const data = useSelector((data) => data.products);

  // Hide Big more Button & add components
  const [state, setState] = useState(false);

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
      {shelvesDataloop(shelvesObj, data)}

      {/* Hide Big more Button & add components */}
      {state ? (
        shelvesDataloop(extraShelvesObj, data)
      ) : (
        <BigMoreBtn onClick={() => setState(true)} />
      )}
    </>
  );
}
