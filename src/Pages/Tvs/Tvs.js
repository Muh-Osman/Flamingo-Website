import "./Tvs.css";
import { useState, useEffect } from "react";
import { Button } from "../../Components";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../rtk/slices/products-slice";
import { shelvesDataloop } from "../../Utils";

export default function Tvs() {
  // fetch Data from Redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts("tvs"));
  }, []);
  const data = useSelector((data) => data.products);

  // Hide Big more Button & add components
  const [state, setState] = useState(false);

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

      {state ? (
        shelvesDataloop(extraShelvesObj, data)
      ) : (
        // Big More Button
        <Button
          onClick={() => setState(true)}
          className={"big-more-btn"}
          title={"More"}
        />
      )}
    </>
  );
}
