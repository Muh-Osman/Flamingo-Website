import "./Phones.css";
import { useState, useEffect } from "react";
import { ShelveConainer, ItemShelves, Button } from "../../Components";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from "../../rtk/slices/products-slice";

const Phones = () => {
  // fetch Data from Redux
  const dispatch = useDispatch()
  useEffect(() => {dispatch(fetchProducts("phones"))}, [])
  const data = useSelector(data => data.products)

  // Hide Big more Button & add component
  const [state, setState] = useState(false);

  return (
    <>
      <ShelveConainer href="https://www.google.com/" title="Apple">
        {data?.apple?.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />)}
      </ShelveConainer>

      <ShelveConainer href="https://www.google.com/" title="Samsung">
        {data?.samsung?.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />)}
      </ShelveConainer>

      <ShelveConainer href="https://www.google.com/" title="Google">
        {data?.google?.map((item) => <ItemShelves className={"item-cards"} key={item.id} item={item} />)}
      </ShelveConainer>

      {/* For hide Big more Button & add component */}
      {state ? (
        <>
          <ShelveConainer href="https://www.google.com/" title="Xiaomi">
            {}
          </ShelveConainer>

          <ShelveConainer href="https://www.google.com/" title="Oppo">
            {}
          </ShelveConainer>

          <ShelveConainer href="https://www.google.com/" title="Vivo">
            {}
          </ShelveConainer>

          <ShelveConainer href="https://www.google.com/" title="Realme">
            {}
          </ShelveConainer>

          <ShelveConainer href="https://www.google.com/" title="Lenovo">
            {}
          </ShelveConainer>

          <ShelveConainer href="https://www.google.com/" title="Huawei">
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

export default Phones;