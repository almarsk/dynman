import { BrowserRouter as Router } from "react-router-dom";

import ManualContextProvider from "./ManualContext";
import Manual from "./Manual";

function App() {
  return (
    <Router>
      <ManualContextProvider>
        <Manual />
      </ManualContextProvider>
    </Router>
  );
}

export default App;
