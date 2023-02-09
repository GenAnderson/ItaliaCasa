import { createContext, useState } from "react";

import housesData from "./housesData";

export const allHomesContext = createContext({});

export const AllHomesProvider = ({ children }) => {
  const [allHomes, setAllHomes] = useState(housesData);
  const [findHome, setFindHome] = useState({});
  const [findMarker, setFindMarker] = useState({});

  const value = {
    allHomes,
    setAllHomes,
    findHome,
    setFindHome,
    findMarker,
    setFindMarker,
  };

  return (
    <allHomesContext.Provider value={value}>
      {children}
    </allHomesContext.Provider>
  );
};
