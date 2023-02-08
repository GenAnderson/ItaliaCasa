import { createContext, useState } from "react";

import housesData from "./housesData";

export const allHomesContext = createContext({});

export const AllHomesProvider = ({ children }) => {
  const [allHomes, setAllHomes] = useState(housesData);
  const [findHome, setFindHome] = useState("");

  const value = { allHomes, setAllHomes, findHome, setFindHome };

  return (
    <allHomesContext.Provider value={value}>
      {children}
    </allHomesContext.Provider>
  );
};
