import { AppContext } from "./redux/AppContextProvider";
import "./styles.css";
import React from "react";
import Counter from "./Count/Counter";

export default function App() {
  const { getState } = React.useContext(AppContext)[1];
  const { count } = getState();
  return (
    <div className="App">
      <h1>Simple Counter App Using Redux </h1>
      <ul style={{ listStyle: "none" }}>
        <li> Reducer </li>
        <li> Action </li>
        <li> Dispatch </li>
        <li> Subscribe </li>
        <li> Notification </li>
        <li> Store </li>
      </ul>
      <h2>{count}</h2>
      <Counter />
    </div>
  );
}
