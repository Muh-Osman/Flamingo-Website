import "./Tvs.css";
import "../../Components/ItemShelves/ItemShelves.css";

import { useState, useEffect } from "react";
import { ShelveConainer, ItemShelves, Button } from "../../Components";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../rtk/slices/products-slice";
import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";

const Tvs = () => {
  // fetch Data from Redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts("tvs"));
  }, []);
  const data = useSelector((data) => data.products);
  console.log(data);


  // Hide Big more Button & add components
  const [state, setState] = useState(false);


  if (data == null) {
    var xxx = [...Array(5)].map((e, i) => (
      <Link key={i} className={"item-cards"}>
        <div className={"img-of-item"}>
          <Skeleton
            animation={false}
            variant="rectangular"
            width={`${100}%`}
            height={`${100}%`}
          />
        </div>
        <div className="item-description">
          <Skeleton animation={false} width={`${100}%`} height={`${100}%`} />
          <h5>
            <Skeleton
              animation={false}
              width={`${50}%`}
              height={`${100}%`}
              className="price"
            />
          </h5>
        </div>
      </Link>
    ));
  }

  return (
    <>
      {/* LG */}
      <ShelveConainer href="https://www.google.com/" title="LG">
        {xxx}
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
