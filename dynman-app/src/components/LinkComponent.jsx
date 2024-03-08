import PropTypes from "prop-types";

const LinkComponent = ({ item }) => {
  return (
    <p>
      {item.name} {item.type}
    </p>
  );
};

LinkComponent.propTypes = {
  item: PropTypes.object.isRequired,
};

export default LinkComponent;
