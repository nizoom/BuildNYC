import React, { useState } from "react";
import { Select, MenuItem } from '@material-ui/core';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles, withStyles } from '@material-ui/core/styles';



const BoroughMenu = (props) => {



    const handleMenuChange = (e) => {
        console.log("fired")
        setBoroughPick(e.target.value)
    }

    const [boroughPick, setBoroughPick] = useState("")

    return (
        <div>
            <Select value={boroughPick} displayEmpty onChange={handleMenuChange}>
                <MenuItem value="" disabled > Select Borough </MenuItem>
                <MenuItem value={1}> Manhattan </MenuItem>
                <MenuItem value={2}> Brooklyn </MenuItem>
                <MenuItem value={3}> The Bronx </MenuItem>
                <MenuItem value={4}> Queens </MenuItem>
                <MenuItem value={5}> Staten Island </MenuItem>

            </Select>
        </div>
    )
}

export default BoroughMenu;