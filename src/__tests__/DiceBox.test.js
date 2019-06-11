import React from "react";
import ReactDOM from "react-dom";

import DiceBox from "../components/DiceBox";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DiceBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
