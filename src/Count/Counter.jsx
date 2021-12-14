import React from "react";
import { incrementCounter } from "../redux/action";
import { AppContext } from "../redux/AppContextProvider";

function Counter() {
  const { dispatch } = React.useContext(AppContext)[1];

  const handleIncrement = () => {
    const action = incrementCounter(1);
    dispatch(action);
  };

  return (
    <div>
      <button onClick={handleIncrement}>INCREMENT</button>
    </div>
  );
}

export default Counter;
