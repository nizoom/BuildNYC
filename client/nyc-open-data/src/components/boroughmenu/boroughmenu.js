import React, { useState } from "react";
import { Select, MenuItem, makeStyles } from '@material-ui/core';
import "./boroughmenu.css"
import FormControl from '@material-ui/core/FormControl';



const BoroughMenu = (props) => {

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 100,
            color: "white"
        }
    }))

    const classess = useStyles()

    const [boroughPick, setBoroughPick] = useState("")


    const handleMenuChange = (e) => {
        //ADD COMPOENT TYPE//ADD COMPOENT TYPE
        const newBorough = e.target.value
        setBoroughPick(newBorough)
        props.passBoroughToParent("borough", newBorough)
    }



    return (
        <div className="borough_menu_wrapper">
            <FormControl className={classess.formControl}>
                <Select value={boroughPick} displayEmpty onChange={handleMenuChange}
                    style={{ color: "white", fontWeight: "bold" }}
                >
                    <MenuItem value="" disabled > Select Borough </MenuItem>
                    <MenuItem value={"Manhattan"}> Manhattan </MenuItem>
                    <MenuItem value={"Brooklyn"}> Brooklyn </MenuItem>
                    <MenuItem value={"The Bronx"}> The Bronx </MenuItem>
                    <MenuItem value={"Queens"}> Queens </MenuItem>
                    <MenuItem value={"Staten Island"}> Staten Island </MenuItem>

                </Select>
            </FormControl>
        </div>
    )
}

export default BoroughMenu;