import { useContext } from "react";
import { createContext } from "react";

const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme : () => { },
})

export { ThemeContext };

export const ThemeContextProvider = ThemeContext.Provider;

// custom hook

export default function useTheme() {
    return useContext(ThemeContext);
}