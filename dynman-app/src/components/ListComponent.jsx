import PropTypes from "prop-types";

const ListComponent = ({ item }) => {
  return (
    <ul>
      {item.text.split("\n\n").map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

ListComponent.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListComponent;
