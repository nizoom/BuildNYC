import React, { useState } from "react";
import { Select, MenuItem } from '@material-ui/core';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import { makeStyles, withStyles } from '@material-ui/core/styles';



const BoroughMenu = (props) => {

    const [boroughPick, setBoroughPick] = useState("")


    const handleMenuChange = (e) => {
        //ADD COMPOENT TYPE//ADD COMPOENT TYPE
        const newBorough = e.target.value
        setBoroughPick(newBorough)
        props.passBoroughToParent("borough", newBorough)
    }


    return (
        <div>
            <Select value={boroughPick} displayEmpty onChange={handleMenuChange}>
                <MenuItem value="" disabled > Select Borough </MenuItem>
                <MenuItem value={"Manhattan"}> Manhattan </MenuItem>
                <MenuItem value={"Brooklyn"}> Brooklyn </MenuItem>
                <MenuItem value={"The Bronx"}> The Bronx </MenuItem>
                <MenuItem value={"Queens"}> Queens </MenuItem>
                <MenuItem value={"Staten Island"}> Staten Island </MenuItem>

            </Select>
        </div>
    )
}

export default BoroughMenu;