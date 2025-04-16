import { createContext, useContext, useState, useEffect } from "react";

const MyAppContext = createContext();

const body = document.body;

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const storedDarkMode = localStorage.darkTheme;

  if (storedDarkMode === null) {
    console.log("Got darktheme from browser default.");
    return prefersDarkMode;
  }

  console.log("Got darktheme from localStorage");
  return storedDarkMode === "true";
};

function MyAppProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("cat");
  const [isDark, SetIsDark] = useState(getInitialDarkMode());

  const toggleIsDark = () => {
    console.log(body);
    localStorage.darkTheme = !isDark;
    SetIsDark(!isDark);
  };

  useEffect(() => {
    body.classList.toggle("dark-theme", isDark);
  }, [isDark]);

  return (
    <MyAppContext.Provider
      value={{ toggleIsDark, isDark, searchTerm, setSearchTerm }}
    >
      {children}
    </MyAppContext.Provider>
  );
}

function useMyGlobalContext() {
  return useContext(MyAppContext);
}

export { MyAppProvider, useMyGlobalContext };
