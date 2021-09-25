import React from 'react';
import {v4 as uuidv4} from 'uuid';
import {Bar} from './Bar';

const defaultBars = [
    { name: 'Java', percentage: 65, amount: 65 },
    { name: 'PHP', percentage: 33, amount: 33 },
    { name: 'Python', percentage: 82, amount: 82 },
    { name: 'C++', percentage: 75, amount: 75 },
    { name: 'NodeJs', percentage: 55, amount: 55 },
    { name: 'Flutter', percentage: 24, amount: 24 }
];

export const Bars = ({scaleSize, types}) => {

    if (types) {
        let size = types.length;
        for (let i = 0; i < size; i++) {
            let amount = types[i].amount;
            let percentage = Math.floor((amount / scaleSize) * 100);
            types[i].percentage = percentage;
        }
    }

    return (
        <div className="bars">
            {
                !types ?
                defaultBars.map(bar => <Bar key={uuidv4()} height={bar.percentage} amount={bar.amount} name={bar.name} />)  :
                types.map(bar => <Bar key={uuidv4()} height={bar.percentage} amount={bar.amount} name={bar.name} />)
            }
        </div>
    )
}
