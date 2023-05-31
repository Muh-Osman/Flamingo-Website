import "./NavbarCategoryLink.css";
import { NavLink } from "react-router-dom";
// Redux toolkit
import { fetchProducts } from "../../rtk/slices/products-slice";
import { useSelector, useDispatch } from "react-redux";

const NavbarCategoryLink = (props) => {

  // fetch Data in Redux on hover on any category before click (fetch is also avilable in direct category link & direct product link)
  const dispatch = useDispatch();
  const fetchDataOnHover = ()=> {
      // Check if specific data for this category page exist (object key ex: home, phone..) in Redux data, if not exist fetch
      if (!(props.cat in data.entities)) {
      dispatch(fetchProducts(props.cat));
    }
  }
  const data = useSelector((data) => data.products);



  return (
    <NavLink to={props.to} onMouseEnter={()=>fetchDataOnHover()}>
      <div className="cat">
        <div aria-label={props.title} title={props.title}>
          {props.svg}
        </div>
        <div className="text">{props.title}</div>
      </div>
    </NavLink>
  );
};

export default NavbarCategoryLink;
