import React from 'react';

export const Bar = ({height, amount, name}) => {

    const barHeight = { height: `${height}%` };

    return (
        <div className="bar" style={barHeight} >
            <p className="amount" >{amount}</p>
            <p className="type" >{name}</p>
        </div>
    )
}
