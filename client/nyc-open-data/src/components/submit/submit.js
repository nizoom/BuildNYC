import React from "react";
import swal from 'sweetalert';

import "./submit.css"


const SubmitBtn = (props) => {

    const propsFromUser = props.allUserInputs;

    //console.log(propsFromUser);

    function assessRequest() {
        const propsFromUser = props.allUserInputs;
        console.log(propsFromUser.borough); //undefined always / not passed in properly
        console.log(propsFromUser.job_type); //underfined always
        if (propsFromUser.borough !== "" && propsFromUser.job_type !== "") {
            props.startRequest()

        } else {
            console.log("a field is empty")
            swal("Oops!", "Be sure to select which borough and construction type", "error")
        }; // This is be executed when `loading` state changes
    }



    return (
        <div className="submit_btn_wrapper">
            <button type="submit" className="submit_btn" onClick={assessRequest}
            > SUBMIT </button>
        </div >
    )
}

export default SubmitBtn;