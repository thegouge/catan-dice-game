import React from "react";

import Player from "./components/player/Player";

import "./App.css";

const initialState = {};

const Context = React.createContext(initialState);

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;

function App() {
  return (
    <div className="App">
      <Player />
    </div>
  );
}

export default App;
