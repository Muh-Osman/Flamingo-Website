import "./Tvs.css";
import { useState, useEffect } from "react";
import { ShelveConainer, ItemShelves, Button } from "../../Components";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from "../../rtk/slices/products-slice";

const Tvs = () => {
  // fetch Data from Redux
  const dispatch = useDispatch()
  useEffect(() => {dispatch(fetchProducts("tvs"))}, [])
  const data = useSelector(data => data.products)

  // Hide Big more Button & add components
  const [state, setState] = useState(false);


  return (
    <>
      {/* LG */}
      <ShelveConainer href="https://www.google.com/" title="LG">
        {data?.lg?.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />)}
      </ShelveConainer>


      {/* Hide Big more Button & add components */}

      {state ? (
        <>
          <ShelveConainer href="https://www.google.com/" title="Samsung">
            {}
          </ShelveConainer>

          <ShelveConainer href="https://www.google.com/" title="Sony">
            {}
          </ShelveConainer>

          <ShelveConainer href="https://www.google.com/" title="TCL">
            {}
          </ShelveConainer>

          <ShelveConainer href="https://www.google.com/" title="Panasonic ">
            {}
          </ShelveConainer>

          <ShelveConainer href="https://www.google.com/" title="Hisense">
            {}
          </ShelveConainer>
        </>
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
};

export default Tvs;
