import PropTypes from "prop-types";

const ListComponent = ({ item }) => {
  return (
    <p>
      {" "}
      {item.name} {item.type}{" "}
    </p>
  );
};

ListComponent.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListComponent;
