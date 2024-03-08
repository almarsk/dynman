import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import mySlugify from "./mySlugify";

const Brick = ({ section }) => {
  return (
    <Link to={`/${mySlugify(section.name)}`} className="brick">
      {section.name}
    </Link>
  );
};

Brick.propTypes = {
  section: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Brick;
