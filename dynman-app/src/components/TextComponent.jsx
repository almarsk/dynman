import PropTypes from "prop-types";

const TextComponent = ({ item }) => {
  return (
    <p>
      {" "}
      {item.name} {item.type}{" "}
    </p>
  );
};

TextComponent.propTypes = {
  item: PropTypes.object.isRequired,
};

export default TextComponent;
