import React from "react";
import Typography from '@material-ui/core/Typography'
import "./intro.css"

const Intro = () => {
    return (
        <div className="outter_wrapper">
            <div className="title_div">
                <Typography variant="h1" style={{ color: "white", fontWeight: "300" }}>
                    <header> Urban Boom </header>
                </Typography>
                <Typography variant="h3" style={{ color: "white", fontWeight: "300" }}>
                    <header> Tracking building development in NYC, 1990 - present </header>
                </Typography>
            </div>
        </div>
    )
}

export default Intro;