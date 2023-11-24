import { createContext, useContext, useState } from 'react'

export const Context = createContext();

const Provider = ({ children }) => {

  const [breadNav, setBreadNav] = useState("hola");

  return (
    <Context.Provider value={{ breadNav, setBreadNav }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
