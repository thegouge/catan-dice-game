import React from "react";
import ReactDOM from "react-dom";

import BuildingCosts from "../components/BuildingCosts";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BuildingCosts />, div);
  ReactDOM.unmountComponentAtNode(div);
});
