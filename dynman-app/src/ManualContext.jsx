import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ManualContext = createContext();

const ManualContextProvider = ({ children }) => {
  const [manual, setManual] = useState(null);

  return (
    <ManualContext.Provider value={{ manual, setManual }}>
      {children}
    </ManualContext.Provider>
  );
};

ManualContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ManualContextProvider;
