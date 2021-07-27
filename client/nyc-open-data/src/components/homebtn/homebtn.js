import React from "react";
import homeImg from "../../media/home.png"
import "./homebtn.css"

const HomeBtn = () => {
    return (
        <div>
            <a href="https://www.nissimram.com/#/" target="_blank" rel="noopener noreferrer">
                <button type="button" className="homebtn"
                >

                    <img src={homeImg} alt="Back to Home" />

                </button>
            </a>
        </div>
    )
}

export default HomeBtn;