import React from "react";
import ReactDOM from "react-dom";

import Header from "./index";

const rounds = new Array(16).fill(0);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header rounds={rounds} playerTotal={0} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
