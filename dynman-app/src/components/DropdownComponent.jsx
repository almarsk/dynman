import PropTypes from "prop-types";
import renderComponentByType from "../renderComponentByType";

const DropdownComponent = ({ item }) => {
  return (
    <div
      style={{
        border:
          "1px solid" + "#" + Math.floor(Math.random() * 16777215).toString(16),
      }}
    >
      {item.name} {item.type}
      {item.content.map((c, i) => {
        return <div key={i}> {renderComponentByType(c)}</div>;
      })}
    </div>
  );
};

DropdownComponent.propTypes = {
  item: PropTypes.object.isRequired,
};

export default DropdownComponent;
