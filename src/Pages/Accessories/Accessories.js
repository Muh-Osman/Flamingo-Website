import "./Accessories.css";
import { useState, useEffect } from "react";
import { Button } from "../../Components";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../rtk/slices/products-slice";
import { shelvesDataloop } from "../../Utils";

export default function Accessories() {
  // fetch Data from Redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts("accessories"));
  }, []);
  const data = useSelector((data) => data.products);

  // Hide Big more Button & add components
  const [state, setState] = useState(false);

  // shelves data
  const [shelvesObj, setShelvesObj] = useState({
    tools: {
      href: "https://www.google.com/",
      title: "Tools",
      dataName: "tools",
      extraPath: "",
    },
  });

  // shelves data that appear after click 'More' button
  const [extraShelvesObj, setExtraShelvesObj] = useState({
    apple: {
      href: "https://www.google.com/",
      title: "Apple",
      dataName: "apple",
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
