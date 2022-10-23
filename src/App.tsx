import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";
import GlobalStyles from "./assets/styles/global";

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes />
    </Router>
  );
}
