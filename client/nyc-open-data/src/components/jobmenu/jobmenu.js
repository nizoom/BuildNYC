import React, { useState } from "react";
import { Select, MenuItem } from '@material-ui/core';

const JobMenu = (props) => {

    const [jobType, setJobType] = useState("")

    const handleJobChange = (e) => {
        const job = e.target.value;
        setJobType(job)
        props.passJobTypeToParent("job_type", job)
    }

    return (
        <div>
            <Select value={jobType} displayEmpty onChange={handleJobChange}>
                <MenuItem value="" disabled> Permit Type </MenuItem>
                <MenuItem value="Demolition"> Demolition </MenuItem>
                <MenuItem value="New Building"> New Building </MenuItem>
                <MenuItem value="Building Alteration"> Building Alteration </MenuItem>


            </Select>

        </div>
    )
}

export default JobMenu;