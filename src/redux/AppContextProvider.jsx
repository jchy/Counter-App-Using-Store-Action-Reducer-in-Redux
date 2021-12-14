import React, { useEffect, useState } from "react";

export const AppContext = React.createContext();

export const AppContextProvider = ({ store, children }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCount((prev) => prev + 1);
      console.log(count);
    }, []);
    return unsubscribe;
  });
  return (
    <AppContext.Provider value={[count, store]}>{children}</AppContext.Provider>
  );
};
