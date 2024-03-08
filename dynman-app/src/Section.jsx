import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import renderComponentByType from "./renderComponentByType";

const Section = ({ section }) => {
  if (!section) {
    return <p>načítám...</p>;
  }

  return (
    <>
      <Link to="/">zpět</Link>

      <h1>{section.name}</h1>

      {section.content.map((c, i) => {
        return <div key={i}>{renderComponentByType(c)}</div>;
      })}
    </>
  );
};

Section.propTypes = {
  section: PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired,
  }),
};

export default Section;
