import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import mySlugify from "../mySlugify";

const LinkComponent = ({ item }) => {
  return <Link to={"/" + mySlugify(item.name)}>{item.name}</Link>;
};

LinkComponent.propTypes = {
  item: PropTypes.object.isRequired,
};

export default LinkComponent;
