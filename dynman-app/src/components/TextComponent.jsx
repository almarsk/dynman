import PropTypes from "prop-types";

const TextComponent = ({ item }) => {
  const header_content = item.text.split("\n\n");

  return (
    <div className="text-content">
      {header_content.length > 1 ? (
        <div>
          <h3>{header_content[0]}</h3>
          <p>{header_content.slice(1).join("\n\n")}</p>
        </div>
      ) : (
        <p>{header_content[0]}</p>
      )}
    </div>
  );
};

TextComponent.propTypes = {
  item: PropTypes.object.isRequired,
};

export default TextComponent;
