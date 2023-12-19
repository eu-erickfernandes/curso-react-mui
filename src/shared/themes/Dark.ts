import { createTheme } from '@mui/material'
import { yellow, cyan } from '@mui/material/colors';

const DarkTheme = createTheme({
    palette: {
        primary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],

            contrastText: "#000",
        },

        secondary: {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[300],

            contrastText: "#000",
        },

        background: {
            default: '#202124',
            paper: '#303134',
        }
    }
})

export default DarkTheme