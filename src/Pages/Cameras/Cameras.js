import "./Cameras.css";
import { useState, useEffect } from "react";
import { Button } from "../../Components";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../rtk/slices/products-slice";
import { shelvesDataloop } from "../../Utils";

export default function Cameras() {
  // fetch Data from Redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts("cameras"));
  }, []);
  const data = useSelector((data) => data.products);

  // Hide Big more Button & add components
  const [state, setState] = useState(false);

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
      {shelvesDataloop(shelvesObj, data)}

      {/* Hide Big more Button & add components */}
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
