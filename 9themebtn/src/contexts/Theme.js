import { createContext, useContext } from 'react';

export const Themecontext = createContext({
    themeMode: 'light',
    toggleTheme: () => {}
});

export const ThemeProvider = Themecontext.Provider;

export default function useTheme(){
    return useContext(Themecontext);
}