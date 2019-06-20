import React from "react";
import {Provider} from "react-redux";
import store from "./redux/store";

import Player from "./components/Player";

import "./styles/App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Player island={1} />
      </div>
    </Provider>
  );
}

export default App;
