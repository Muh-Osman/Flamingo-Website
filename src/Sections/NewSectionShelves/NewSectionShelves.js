import "./NewSectionShelves.css";
import { useEffect, useState, useRef } from "react";
import { NewSectionContainer, ItemShelves } from "../../Components";
// Redux toolkit
import { useSelector, useDispatch } from "react-redux";
import { fetchNewSecProducts } from "../../rtk/slices/newSecProducts-slice";

export default function NewSectionShelves() {

  // fetch Data from Redux
  const myRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    // Delay fetch until scroll to "New Section"
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        observer.unobserve(myRef.current); // Stop watch scroll
        dispatch(fetchNewSecProducts("newSection")); // Fetch data
      }
    });
    observer.observe(myRef.current);
  }, []);
  const data = useSelector((data) => data.newSecProducts);

  // shelves data
  const [shelvesObj, setShelvesObj] = useState({
    onRise: {
      href: "https://www.google.com/",
      title: "On rise ⚡",
      dataName: "onRise",
      extraPath: "",
    },
    mostPopular: {
      href: "https://www.google.com/",
      title: "Most popular",
      dataName: "mostPopular",
      extraPath: "",
    },
    addedRecently: {
      href: "https://www.google.com/",
      title: "Added recently",
      dataName: "addedRecently",
      extraPath: "",
    },
  });

  const shelvesDataloop = () => {
    return Object.values(shelvesObj).map(
      ({ href, title, dataName, extraPath }) => (
        <NewSectionContainer href={href} title={title} key={title}>
          {data?.[dataName]?.map((item) => (
            <ItemShelves
              className={"item-cards-down"}
              extraPath={extraPath}
              item={item}
              key={item.id}
            />
          ))}
        </NewSectionContainer>
      )
    );
  };

  return (
    <section ref={myRef} className="new-sec">
      {shelvesDataloop()}
    </section>
  );
}
