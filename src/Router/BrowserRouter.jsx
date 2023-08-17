import { createContext, useContext, useEffect, useState } from "react";

const NavigationContext = createContext();

export function BrowserRouter({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  console.log(currentPath);

  useEffect(() => {
    function handleRouteChange() {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
