import PropTypes from "prop-types";

const ImageComponent = ({ item }) => {
  return (
    <p>
      {" "}
      {item.name} {item.type}{" "}
    </p>
  );
};

ImageComponent.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ImageComponent;
