import React, { createContext, useState, useContext, useEffect } from "react";

//api here is an axios instance which has the baseURL set according to the env.
/* import api from "../services/Api"; */

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
