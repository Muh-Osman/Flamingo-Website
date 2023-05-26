import "./Tablets.css";
import { useState, useEffect } from "react";
import { Button } from "../../Components";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../rtk/slices/products-slice";
import { shelvesDataloop } from "../../Utils";

export default function Tablets() {
  // fetch Data from Redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts("tablets"));
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
    samsung: {
      href: "https://www.google.com/",
      title: "Samsung",
      dataName: "samsung",
      extraPath: "",
    },
    realme: {
      href: "https://www.google.com/",
      title: "realme",
      dataName: "realme",
      extraPath: "",
    },
    amazon: {
      href: "https://www.google.com/",
      title: "Amazon",
      dataName: "amazon",
      extraPath: "",
    },
    microsoft: {
      href: "https://www.google.com/",
      title: "Microsoft",
      dataName: "microsoft",
      extraPath: "",
    },
    lenovo: {
      href: "https://www.google.com/",
      title: "Lenovo",
      dataName: "lenovo",
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
        //  <Big More Button
        <Button
          onClick={() => setState(true)}
          className={"big-more-btn"}
          title={"More"}
        />
      )}
    </>
  );
}
