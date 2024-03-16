import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import renderComponentByType from "./renderComponentByType";

const Section = ({ section }) => {
  if (!section) {
    return <p>načítám...</p>;
  }

  return (
    <>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div style={{ display: "inline-block" }}>
          <p className="manual-link">zpět</p>
        </div>
      </Link>

      <h1>{section.name}</h1>

      {section.content.map((item, i) => {
        return <div key={i}>{renderComponentByType(item, [])}</div>;
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
