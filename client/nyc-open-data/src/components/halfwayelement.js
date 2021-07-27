import React, { useRef, useEffect } from "react";

const HalfWayElement = (props) => {

    const contentDisplay = useRef();

    const scrollIntoView = () => {
        console.log("SCROLLING")
        contentDisplay.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "end"
        })
    }

    useEffect(() => {
        if (props.scroll) {
            scrollIntoView()
        }
    }, [props.scroll]);

    return (
        <div ref={contentDisplay} style={{
            position: "absolute",
            top: "180%",
            left: "50%",
            zIndex: 100,
            color: "white"
        }}>
        </div>
    )
}

export default HalfWayElement