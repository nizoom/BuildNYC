import React, { useRef, useEffect } from "react";

const HalfWayElement = (props) => {
    //animates a scroll down the page after submit so that the user sees there's more than just the 
    //map to explore
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


    function calcScrollDistance() {

        const width = window.innerWidth;
        console.log(width)

        if (width >= 1100) { // lrg screens 
            console.log(5)
            return "190%"
        }
        if (width >= 768 && width <= 1100) { //medium size 
            console.log(6)
            return "230%";
        }
        if (width >= 480 && width < 768) { // tablet
            console.log(7)
            return "240%"
        }
        if (width <= 480) { // mobile
            return "260%"
        }
        else {
            console.log("else 7")
            return 7;
        }

    }
    return (
        <div className="HalfWay Anchor" ref={contentDisplay} style={{
            position: "absolute",
            top: calcScrollDistance(),
            left: "50%",
            zIndex: 100,
            color: "white"
        }}>
        </div>
    )
}


export default HalfWayElement