import { useContext } from "react";
import { ManualContext } from "./ManualContext";
import Brick from "./Brick";

const IntroBricks = () => {
  const { manual } = useContext(ManualContext);
  return (
    <>
      <p className="annotation">{manual ? manual.annotation : ""}</p>
      <div className="intro-bricks">
        {manual
          ? manual.sections.map((section, index) => (
              <Brick key={index} section={section} />
            ))
          : ""}
      </div>
    </>
  );
};

export default IntroBricks;
