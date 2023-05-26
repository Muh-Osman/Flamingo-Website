import "./Watches.css";
import { Button } from "../../Components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../rtk/slices/products-slice";
import { shelvesDataloop } from "../../Utils";

export default function Watches() {
  // fetch Data from Redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts("watches"));
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
    fitbit: {
      href: "https://www.google.com/",
      title: "Fitbit",
      dataName: "fitbit",
      extraPath: "",
    },
    garmin: {
      href: "https://www.google.com/",
      title: "Garmin",
      dataName: "garmin",
      extraPath: "",
    },
    google: {
      href: "https://www.google.com/",
      title: "Google",
      dataName: "google",
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
