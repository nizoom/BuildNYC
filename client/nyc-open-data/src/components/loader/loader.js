import React from "react";
import Goo from 'gooey-react';
import "./loader.css"

const Loader = (props) => {
    return (
        <div className="goo_wrapper">
            <Goo intensity="weak">
                <g style={{ animation: 'left 4s linear infinite' }}>
                    <svg width="192" height="192">
                        <circle cx="37%" cy="37%" fill="palevioletred" r="32"
                            style={{ animation: 'right 4s linear infinite' }} />
                        <circle cx="63%" cy="63%" fill="sandybrown" r="32"
                            style={{ animation: 'right 4s linear infinite' }} />
                    </svg>
                </g>
            </Goo>
        </div>
    )
}

export default Loader