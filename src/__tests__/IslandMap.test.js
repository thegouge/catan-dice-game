import React from "react";
import ReactDOM from "react-dom";

import IslandMap from "../components/IslandMap";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<IslandMap />, div);
  ReactDOM.unmountComponentAtNode(div);
});
