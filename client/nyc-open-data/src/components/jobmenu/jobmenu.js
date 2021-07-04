import React, { useState } from "react";
import { Select, MenuItem, makeStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';

import "./jobmenu.css"

const JobMenu = (props) => {

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 100,
            color: "white"
        }
    }))

    const classes = useStyles();

    const [jobType, setJobType] = useState("")

    const handleJobChange = (e) => {
        const job = e.target.value;
        setJobType(job)
        props.passJobTypeToParent("job_type", job)
    }

    return (
        <div className="job_menu_wrapper">
            <FormControl className={classes.formControl}>
                <Select value={jobType} displayEmpty onChange={handleJobChange}
                    style={{ color: "white", fontWeight: "bold" }}>
                    <MenuItem value="" disabled> Permit Type </MenuItem>
                    <MenuItem value="Demolition"> Demolition </MenuItem>
                    <MenuItem value="New Building"> New Building </MenuItem>
                    <MenuItem value="Building Alteration"> Building Alteration </MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default JobMenu;