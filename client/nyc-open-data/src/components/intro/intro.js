import React from "react";
import Typography from '@material-ui/core/Typography'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import "./intro.css"

const Intro = () => {

    const theme = createMuiTheme();

    theme.typography.h1 = {
        "@media(max-width: 899px)": {
            fontSize: "4em"
        },
        "@media(max-width: 400px)": {
            fontSize: "3em"
        },
        "@media(min-width: 900px)": {
            fontSize: "6em"
        }

    }

    theme.typography.h3 = {
        "@media(max-width: 899px)": {
            fontSize: "1.5em"
        },
        "@media(min-width: 900px)": {
            fontSize: "3.0em"
        }
    }

    return (
        <div className="outter_wrapper">
            <ThemeProvider theme={theme}>
                <div className="title_div">
                    <Typography variant="h1" style={{ color: "white", fontWeight: "300" }}>
                        <header> Urban Boom </header>
                    </Typography>
                    <Typography variant="h3" style={{ color: "white", fontWeight: "300" }}>
                        <header> Tracking building development in NYC, 1990 - present </header>
                    </Typography>
                </div>
            </ThemeProvider>
        </div>
    )
}

export default Intro;