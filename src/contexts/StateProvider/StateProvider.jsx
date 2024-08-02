import { createContext } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const authInfo = {};

  return (
    <StateContext.Provider value={authInfo}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
