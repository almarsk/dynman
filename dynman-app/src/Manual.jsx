import { Routes, Route } from "react-router-dom";

import mySlugify from "./mySlugify";
import getData from "./getData";
import { useContext, useEffect } from "react";
import { ManualContext } from "./ManualContext";
import "./App.scss";

import IntroBricks from "./IntroBricks";
import Section from "./Section";
import Header from "./Header";
import Search from "./Search";

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
    <>
      <Header />
      <h1>{manual && manual.title}</h1>
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
      <Search />
    </>
  );
};

export default Manual;
