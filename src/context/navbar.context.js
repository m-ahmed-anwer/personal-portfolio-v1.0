import { createContext, useState } from "react";

export const NavbarContext = createContext({
  data: null,
  setData: () => {},
});

export const NavbarProvider = ({ children }) => {
  const [data, setData] = useState("");
  const value = { data, setData };
  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
};
