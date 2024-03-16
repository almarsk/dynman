import PropTypes from "prop-types";
import renderComponentByType from "../renderComponentByType";
import { useState, useRef } from "react";
import { useEffect } from "react";

const DropdownComponent = ({ item, setHeightList }) => {
  const [dropped, setDropped] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  const [isInit, setIsInit] = useState(true);

  useEffect(() => {
    setHeight(contentRef.current.scrollHeight);
    return () => {
      setDropped(false);
    };
  }, [item]);

  useEffect(() => {
    if (isInit) {
      setIsInit(false);
    } else {
      setHeightList.forEach((setHeight) =>
        dropped
          ? setHeight((prev) => prev + height)
          : setHeight((prev) => prev - height),
      );
    }
  }, [dropped, item]);

  return (
    <div className="dropdown">
      <div
        onClick={() => setDropped((prev) => !prev)}
        className="dropdown-title"
      >
        <div></div>
        <p>{item.name}</p>
        <p className="arrow">{dropped ? "＾" : "ᵥ"}</p>
      </div>
      <div
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
