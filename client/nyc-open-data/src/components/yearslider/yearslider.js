import React, { useState } from "react";
import "./yearslider.css"

const YearSlider = (props) => {


    const [value, setValue] = useState(1990)

    function calcYear() {
        let currentYear = new Date().toISOString().slice(0, 4)

        return currentYear
    }

    function handleOnChange(e) {
        console.log("sliding")
        setValue(e.target.value)
    }

    return (
        <div className="slider_container">
            <input type="range" min={1990} max={calcYear()} value={value}
                className="slider"
                onChange={handleOnChange}
            />

            <div className="value"> {value} </div>
        </div>
    )
}

export default YearSlider;