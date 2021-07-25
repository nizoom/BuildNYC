import React, { useEffect } from "react";
import "./submit.css"


const SubmitBtn = (props) => {

    const propsFromUser = props.allUserInputs;

    function assessRequest(propsFromUser) {
        if (propsFromUser.borough !== "" && propsFromUser.job_type !== "") {
            props.startRequest()

        } else {
            console.log("a field is empty")
        }; // This is be executed when `loading` state changes
    }



    return (
        <div className="submit_btn_wrapper">
            <button type="submit" className="submit_btn" onClick={assessRequest}
            > SUBMIT </button>
        </div>
    )
}

export default SubmitBtn;