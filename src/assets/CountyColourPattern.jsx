import React from "react";

export function CountyColourPattern({ id, colours = [] }) {
    if(!colours || colours.length === 0) {
        return null;
    }

    const stripeWidth = 16; // Width of each stripe in the pattern
    const totalWidth = stripeWidth * colours.length; // Total width of the pattern

    return (
        <pattern
            id={id}
            width={totalWidth}
            height={totalWidth}
            patternUnits="userSpaceOnUse"
        >
            {colours.map((colour, index) => (
                <rect
                    key={index}
                    x={index * stripeWidth}
                    width={stripeWidth}
                    height={totalWidth}
                    fill={colour}
                />
            ))}
        </pattern>
    );
}