import { createContext, useContext, useState, useEffect } from "react";

export const Context = createContext();

const Provider = ({ children }) => {
  const [materials, setMaterials] = useState({
    desperdicio: null,
    tipo: null,
    subtipo: null,
    values: [],
  });

  const [userData, setUserData] = useState();

  const [totalData, setTotalData] = useState({
    userData: {
      name: "Pedro",
    },
  });

  const [cielorasoCorridoExt, setCielorasoCorridoExt] = useState();
  const [cielorasoCorridoInt, setCielorasoCorridoInt] = useState();
  const [cielorasoReticular, setCielorasoReticular] = useState();
  const [muroExterior, setMuroExterior] = useState();
  const [muroInterior, setMuroInterior] = useState();
  const [whatsapp, setWhatsapp] = useState();

  useEffect(() => {
    fetchData("json/cielorasoCorridoExt.json", setCielorasoCorridoExt);
    fetchData("json/cielorasoCorridoInt.json", setCielorasoCorridoInt);
    fetchData("json/cielorasoReticular.json", setCielorasoReticular);
    fetchData("json/muroExterior.json", setMuroExterior);
    fetchData("json/muroInterior.json", setMuroInterior);
    fetchData("json/whatsapp.json", setWhatsapp);
  }, []);

  const fetchData = async (url, set) => {
    const response = await fetch(url);
    const data = await response.json();
    set(data);
  };

  return (
    <Context.Provider
      value={{
        materials,
        setMaterials,
        userData,
        setUserData,
        totalData,
        setTotalData,
        cielorasoCorridoExt,
        cielorasoCorridoInt,
        cielorasoReticular,
        muroExterior,
        muroInterior,
        whatsapp,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useProvider = () => {
  return useContext(Context);
};

export default Provider;
