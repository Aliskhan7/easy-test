import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { ITheme } from "../types";
import { themeFetch } from "../api";

interface IThemeContext {
  themes: ITheme[];
  loading: boolean;
}

const defaultContext: IThemeContext = {
  themes: [],
  loading: false,
};

const ThemesContext = createContext<IThemeContext>(defaultContext);

export const ThemesContextProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [themes, setThemes] = useState<ITheme[]>([]);

  useEffect(() => {
    async function preload() {
      setLoading(true);
      const result = await themeFetch();
      setThemes(result);
      setLoading(false);
    }
    preload();
  }, []);
  return (
    <ThemesContext.Provider value={{ loading, themes }}>
      {children}
    </ThemesContext.Provider>
  );
};

export default ThemesContext;

export function useThemes() {
  return useContext(ThemesContext);
}
