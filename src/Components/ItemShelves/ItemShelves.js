import "./ItemShelves.css";
import { Link } from "react-router-dom";

const ItemShelves = (props) => {


  return (
    <Link to={props.item.shelve + `/` + props.item.id} className={props.className}>
      <div className="img-of-item">
        <img src={props.item.src} alt={props.item.description} />
      </div>
      <div className="item-description">
        <h4>{props.item.description}</h4>
        <h5>
          <span className="price">{props.item.price}</span>
          <span className="currency">{props.item.currency}</span>
          <span className="week">{`/` + props.item.period}</span>
        </h5>
      </div>
    </Link>
  );
};

export default ItemShelves;
