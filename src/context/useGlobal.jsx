import { createContext, useReducer } from "react";

export const GlobalContetext = createContext();

const changeState = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, user: action.payload };
    case "LOG_OUt":
      return { ...state, user: null };
  }
};

function GlobalContetextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: false,
  });

  return (
    <GlobalContetext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContetext.Provider>
  );
}
export default GlobalContetextProvider;
