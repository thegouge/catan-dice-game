import React from "react";
import ReactDOM from "react-dom";

import ScoreCard from "../components/ScoreCard";

const rounds = new Array(16).fill(0);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ScoreCard rounds={rounds} playerTotal={0} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
