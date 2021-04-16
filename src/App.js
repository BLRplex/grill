import React from "react";
import { Provider } from "react-redux";

import { store } from "./store";
import Grill from "./components/GrillView";
import "./styles.css";

const App = () => (
  <Provider store={store}>
    <Grill />
  </Provider>
);

export default App;
