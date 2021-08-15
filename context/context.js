import { createContext } from 'react';

export const Context = createContext({
  islogged: false,
  swip: () => {},
});

const swip = () => {
  return 2;
};
function ContextProvider({ children }) {
  return (
    <Context.Provider value={{ islogged: false, swip }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
