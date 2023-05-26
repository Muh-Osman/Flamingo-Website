import "./Phones.css";
import { useState, useEffect } from "react";
import { Button } from "../../Components";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../rtk/slices/products-slice";
import { shelvesDataloop } from "../../Utils";

export default function Phones() {
  // fetch Data from Redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts("phones"));
  }, []);
  const data = useSelector((data) => data.products);

  // Hide Big more Button & add component
  const [state, setState] = useState(false);

  // shelves data
  const [shelvesObj, setShelvesObj] = useState({
    apple: {
      href: "https://www.google.com/",
      title: "Apple",
      dataName: "apple",
      extraPath: "",
    },
    samsung: {
      href: "https://www.google.com/",
      title: "Samsung",
      dataName: "samsung",
      extraPath: "",
    },
    google: {
      href: "https://www.google.com/",
      title: "Google",
      dataName: "google",
      extraPath: "",
    },
  });

  // shelves data that appear after click 'More' button
  const [extraShelvesObj, setExtraShelvesObj] = useState({
    xiaomi: {
      href: "https://www.google.com/",
      title: "Xiaomi",
      dataName: "xiaomi",
      extraPath: "",
    },
    oppo: {
      href: "https://www.google.com/",
      title: "Oppo",
      dataName: "oppo",
      extraPath: "",
    },
    vivo: {
      href: "https://www.google.com/",
      title: "Vivo",
      dataName: "vivo",
      extraPath: "",
    },
    realme: {
      href: "https://www.google.com/",
      title: "Realme",
      dataName: "realme",
      extraPath: "",
    },
    lenovo: {
      href: "https://www.google.com/",
      title: "Lenovo",
      dataName: "lenovo",
      extraPath: "",
    },
    huawei: {
      href: "https://www.google.com/",
      title: "Huawei",
      dataName: "huawei",
      extraPath: "",
    },
  });

  return (
    <>
      {shelvesDataloop(shelvesObj, data)}

      {/* For hide Big more Button & add component */}
      {state ? (
        shelvesDataloop(extraShelvesObj, data)
      ) : (
        //  Big More Button
        <Button
          onClick={() => setState(true)}
          className={"big-more-btn"}
          title={"More"}
        />
      )}
    </>
  );
}
