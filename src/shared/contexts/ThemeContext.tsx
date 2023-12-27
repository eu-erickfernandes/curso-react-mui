import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { ThemeProvider } from "@emotion/react"
import DarkTheme from "../themes/Dark";
import LightTheme from "../themes/Light";
import { Box } from "@mui/material";

interface IThemeProviverProps {
    children: React.ReactNode
}

interface IThemeContextData {
    themeName: 'light' | 'dark',
    toggleTheme: () => void
}

const ThemeContext  = createContext({} as IThemeContextData)

export const useAppThemeContext = () => {
    return useContext(ThemeContext)
}

export const AppThemeProvider: React.FC<IThemeProviverProps> = ({ children }) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light' )
    }, [])

    const theme = useMemo(() => {
        if (themeName === 'light') return LightTheme
        
        return DarkTheme
    }, [themeName])

    return(
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={ theme }>
                <Box width='100vw' height='100vh' bgcolor={ theme.palette.background.default }>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}