import { createContext, useContext, useState } from 'react'

export const Context = createContext();

const Provider = ({ children }) => {

  const [materials, setMaterials] = useState({
    "desperdicio": null,
    "tipo": null,
    "subtipo" : null,
    "values" : []
  });

  const [userData, setUserData] = useState()

  const [totalData, setTotalData] = useState({})

  return (
    <Context.Provider value={{ materials, setMaterials, userData, setUserData, totalData, setTotalData  } }>
      {children}
    </Context.Provider>
  );
};

export const useProvider = () => {
  return useContext(Context)
}


export default Provider;
