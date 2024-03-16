import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import mySlugify from "../mySlugify";

const LinkComponent = ({ item }) => {
  return (
    <Link to={"/" + mySlugify(item.name)} style={{ textDecoration: "none" }}>
      <div style={{ display: "inline-block" }}>
        <p className="manual-link">{item.name}</p>
      </div>
    </Link>
  );
};

LinkComponent.propTypes = {
  item: PropTypes.object.isRequired,
};

export default LinkComponent;
