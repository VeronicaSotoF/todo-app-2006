import { createContext, useState } from "react";

const ThemeContext = createContext();

function Provider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = (event) => {
    setIsDarkTheme(event.target.checked);
  };

  const valueToShare = {
    isDarkTheme,
    toggleDarkTheme,
  };

  return (
    <ThemeContext.Provider value={valueToShare}>
      {children}
    </ThemeContext.Provider>
  );
}

export { Provider };
export default ThemeContext;
