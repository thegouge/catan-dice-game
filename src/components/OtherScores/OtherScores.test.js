import React from "react";
import ReactDOM from "react-dom";

import OtherScores from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<OtherScores />, div);
  ReactDOM.unmountComponentAtNode(div);
});
