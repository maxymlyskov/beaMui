import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles/createPalette'{
    interface Palette {
        grid : {
            main:string,
            dark: string
        }
    }
    interface PaletteOptions {
        grid? : {
            main:string,
            dark: string
        }
    }
}

const BeautifulTheme = createTheme({
    palette :{
        primary: {
            main: "#188842c",
            dark: '#darkgreen'
        },
        grid: {
            main: "#182842c",
            dark: '#darkblue'
        }
    }
});

export { BeautifulTheme };
