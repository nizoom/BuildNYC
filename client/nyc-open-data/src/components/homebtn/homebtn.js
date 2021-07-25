import React from "react";
import homeImg from "../../media/home.png"

const HomeBtn = () => {
    return (
        <div>
            <a href="https://www.nissimram.com/#/" target="_blank" rel="noopener noreferrer">
                <button type="button"
                    style={{
                        borderRadius: "16px", backgroundColor: "green", border: "none", float: "right",
                        margin: "5px", backgroundImage: "linear-gradient(to right,#9A76CD, #76B5CD)",
                        boxShadow: "gray 5px", cursor: "pointer"
                    }}>

                    <img src={homeImg} alt="Back to Home" />

                </button>
            </a>
        </div>
    )
}

export default HomeBtn;