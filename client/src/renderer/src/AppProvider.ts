import{
    createContext,
    ReactNode,
    useContext,
    useState,
    useEffect,
    useRef,
  } from "react";

  
  
  const AppContext = createContext({} as App);
  
  export function AppProvider({ children }: { children?: ReactNode }) {

    const [test, setTest] = useState(null)

      <AppContext.Provider
        value={{
          test
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
  
  export function useProvider() {
    const App = useContext(AppContext);
    if (!App)
      throw new Error("useApp must be used within AppProvider");
    return App;
  }
  