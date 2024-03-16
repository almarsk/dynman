import { Routes, Route } from "react-router-dom";

import mySlugify from "./mySlugify";
import getData from "./getData";
import { useContext, useEffect } from "react";
import { ManualContext } from "./ManualContext";

import IntroBricks from "./IntroBricks";
import Section from "./Section";

const Manual = () => {
  const { manual, setManual } = useContext(ManualContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setManual(data);
    };
    fetchData();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return (
    <Routes>
      <Route path="*" element={<IntroBricks />} />
      {manual
        ? manual.sections.map((section, index) => {
            return (
              <Route
                key={index}
                path={`/${mySlugify(section.name)}`}
                element={<Section section={section} />}
              />
            );
          })
        : ""}
    </Routes>
  );
};

export default Manual;
