import React from "react";
import ReactDOM from "react-dom";

import OpeningForm from "../components/OpeningForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<OpeningForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
