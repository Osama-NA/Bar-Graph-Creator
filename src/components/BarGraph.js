import React, { useRef, useState, useEffect, useContext } from 'react';
import { GraphContext } from '../context/GraphContext';
import {BarGraphContainer} from './styles/BarGraphContainer.styled';
import { Bars } from './nested-components/Bars';
import { useScreenshot } from 'use-react-screenshot';

export const BarGraph = () => {

    const graphRef = useRef();

    const [image, takeScreenshot] = useScreenshot();

    const { graph } = useContext(GraphContext);

    const [title, setTitle] = useState('');
    const [consumers, setConsumers] = useState('');
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [types, setTypes] = useState([]);
    const [scaleSize, setScaleSize] = useState(''); //max - min
    const [allowDownload, setAllowDownload] = useState(false);

    const getGraphImage = () => {
        setAllowDownload(true);
        takeScreenshot(graphRef.current);
    }

    useEffect(() => {
        if (graph) {
            setTitle(graph.title);
            setConsumers(graph.consumers);
            setMin(graph.min);
            setMax(graph.max);
            setTypes(graph.types);
        }
    }, [graph]);
    
    useEffect(() => {
        setScaleSize(Math.ceil(max - min));
    }, [min, max]);

    useEffect(() => {
        if (image && allowDownload) {
            const link = document.createElement("a");
            link.href = image;
            link.setAttribute("download", `${title?title:'bar'}_graph.png`);
            link.click();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [takeScreenshot]);

    return (
        <>
            <BarGraphContainer ref={graphRef}>
                <h2>{title?title:'Courses'}</h2>
                <div className="snapshot-container" >
                    <div className="graph">
                        <div className="max">
                            <label>max </label><p>{max ? max : '100'}</p>
                        </div>
                        <div className="min">
                            <label>min </label><p>{min ? min : '0'}</p>
                        </div>
                        <p className="consumers">{consumers ? consumers : 'Students'}</p>
                        <Bars types={types} scaleSize={scaleSize} />
                    </div>
                </div>
            </BarGraphContainer>
            <button className="download-btn" onClick={getGraphImage}>Download graph</button>
        </>
    )
}
