import "./ItemShelves.css";
import { Link } from "react-router-dom";

const ItemShelves = ({ className, extraPath = "", item }) => {
  // extraPath for home page only (extraPath="home/" otherwise "")
  return (
    <Link to={extraPath + item.shelve + `/` + item.id} className={className}>
      <div className="img-of-item">
        <img src={item.src} alt={item.description} />
      </div>
      <div className="item-description">
        <h4>{item.description}</h4>
        <h5>
          <span className="price">{item.price}</span>
          <span className="currency">{item.currency}</span>
          <span className="week">{`/` + item.period}</span>
        </h5>
      </div>
    </Link>
  );
};

export default ItemShelves;
