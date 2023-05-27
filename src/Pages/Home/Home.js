import "./Home.css";
import { useState, useEffect } from "react";
import { BigMoreBtn } from "../../Components";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../rtk/slices/products-slice";
import { shelvesDataloop } from "../../Utils";

export default function Home() {
  // fetch Data from Redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts("home"));
  }, []);
  const data = useSelector((data) => data.products);

  // For hide Big more Button & add component
  const [state, setState] = useState(false);

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
      {shelvesDataloop(shelvesObj, data)}

      {/* Hide Big more Button & add component */}
      {state ? (
        shelvesDataloop(extraShelvesObj, data)
      ) : (
        <BigMoreBtn onClick={() => setState(true)} />
      )}
    </>
  );
}
