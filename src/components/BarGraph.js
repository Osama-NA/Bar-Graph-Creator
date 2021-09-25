import React, { useState, useEffect, useContext } from 'react';
import { GraphContext } from '../context/GraphContext';
import {BarGraphContainer} from './styles/BarGraphContainer.styled';
import {Bars} from './nested-components/Bars';

export const BarGraph = () => {

    const { graph } = useContext(GraphContext);

    const [title, setTitle] = useState('');
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [types, setTypes] = useState([]);
    const [scaleSize, setScaleSize] = useState(''); //max - min

    useEffect(() => {
        if (graph) {
            setTitle(graph.title);
            setMin(graph.min);
            setMax(graph.max);
            setTypes(graph.types);
        }
    }, [graph]);
    
    useEffect(() => {
        setScaleSize(Math.ceil(max - min));
    }, [min, max]);

    return (
        <BarGraphContainer>
            <h2>{title?title:'Your bar graph'}</h2>
            <div className="graph">
                <div className="max">
                    <label>max </label><p>{max?max:'100'}</p>
                </div>
                <div className="min">
                    <label>min </label><p>{min?min:'0'}</p>
                </div>
                <Bars types={types} scaleSize={scaleSize} />
            </div>
        </BarGraphContainer>
    )
}
