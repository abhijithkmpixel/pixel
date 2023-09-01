/** @format */

import { createContext, useState } from "react";

export const PrevPage = createContext(null);
function Context({ children }) {
  const [prevPageSLug, setprevPageSLug] = useState();

  return (
    <PrevPage.Provider value={{ prevPageSLug, setprevPageSLug }}>
      {children}
    </PrevPage.Provider>
  );
}

export default Context;
