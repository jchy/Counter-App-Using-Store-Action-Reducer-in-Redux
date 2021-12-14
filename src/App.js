import { AppContext } from "./redux/AppContextProvider";
import "./styles.css";
import React from "react";
import Counter from "./Count/Counter";

export default function App() {
  const { getState } = React.useContext(AppContext)[1];
  const { count } = getState();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{count}</h2>
      <Counter />
    </div>
  );
}
