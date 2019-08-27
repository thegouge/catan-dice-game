import React from "react";
import ReactDOM from "react-dom";

import VictoryScreen from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<VictoryScreen />, div);
  ReactDOM.unmountComponentAtNode(div);
});
