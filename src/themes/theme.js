import { createTheme } from "@mui/material";

export const theme = createTheme({
    colorSchemes: {
        dark: true
    },
    // palette: {
    //     mode: "light",
    // },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});
