import PropTypes from "prop-types";

const TipComponent = ({ item }) => {
  return <p style={{ border: "3px solid black" }}>{item.text}</p>;
};

TipComponent.propTypes = {
  item: PropTypes.object.isRequired,
};

export default TipComponent;
