import PropTypes from "prop-types";
import renderComponentByType from "../renderComponentByType";
import { useState, useRef } from "react";
import { useEffect } from "react";

const DropdownComponent = ({ item, setHeightList }) => {
  const [dropped, setDropped] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(contentRef.current.scrollHeight);
  }, []);

  useEffect(() => {
    setHeightList.forEach((setHeight) =>
      dropped
        ? setHeight((prev) => prev + height)
        : setHeight((prev) => prev - height),
    );
  }, [dropped]);

  return (
    <div
      style={{
        border:
          "1px solid" + "#" + Math.floor(Math.random() * 16777215).toString(16),
        textAlign: "center",
      }}
    >
      {item.name}
      <button onClick={() => setDropped((prev) => !prev)}>
        {dropped ? "＾" : "ᵥ"}
      </button>
      <div
        className={item.name}
        ref={contentRef}
        style={{
          overflow: "hidden",
          height: dropped ? `${height}px` : 0,
          transition: "height 0.3s ease-in-out",
        }}
      >
        {item.content.map((c, i) => {
          return (
            <div key={i}>
              {renderComponentByType(c, [...setHeightList, setHeight])}
            </div>
          );
        })}
      </div>
    </div>
  );
};

DropdownComponent.propTypes = {
  item: PropTypes.object.isRequired,
};

export default DropdownComponent;
