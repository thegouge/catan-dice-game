import React from "react";
import ReactDOM from "react-dom";

import DiceBox from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DiceBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
