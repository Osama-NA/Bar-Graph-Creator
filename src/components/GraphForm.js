import React, { useState, useEffect, useContext } from 'react';
import { GraphFormContainer } from './styles/GraphFormContainer.styled';
import { GraphContext } from '../context/GraphContext';
import { v4 as uuidv4 } from 'uuid';

const defaultBars = [
    { name: 'Java', percentage: 65, amount: 65 },
    { name: 'PHP', percentage: 33, amount: 33 },
    { name: 'Python', percentage: 82, amount: 82 },
    { name: 'C++', percentage: 75, amount: 75 },
    { name: 'NodeJs', percentage: 55, amount: 55 },
    { name: 'Flutter', percentage: 24, amount: 24 }
];

const defaultGraph = { 
    title: 'Courses',
    consumers: 'Students',
    min: 0,
    max: 100,
    types: defaultBars
}

export const GraphForm = () => {

    const [min, setMin] = useState('0');
    const [max, setMax] = useState('100');
    const [title, setTitle] = useState('');
    const [consumers, setConsumers] = useState('');
    const [barsNumber, setBarsNumber] = useState('');
    const [typeElements, setTypeElements] = useState([]);
    const [graphDetails, setGraphDetails] = useState({});

    const {setGraph} = useContext(GraphContext);

    const handleMin = (e) => setMin(e.target.value);

    const handleMax = (e) => setMax(e.target.value);

    const handleTitle = (e) => setTitle(e.target.value);

    const handleConsumers = (e) => setConsumers(e.target.value);

    const handleBarsNumber = (e) => setBarsNumber(e.target.value);

    const confirmBarsNumber = (e) => {
        e.preventDefault();

        //checking if barsNumber is 0 or barsNumber length is two but not 10
        if ((barsNumber === '0') || (barsNumber.length >= 2 && barsNumber !== '10')) {
            alert("Number of bars should be in the range 1 - 10 . . .");
            return;
        }
        const number = parseInt(barsNumber);
        if (!number) {
            alert("Number of bars should be a number in the range 1 - 10 . . .");
            return;
        }
        handleTypeElements(number); //Setting barsNumberConfirmed to render list of typeElements
    }

    //Creates a list of size 'size' with a pair of value : amount
    const handleTypeElements = (size) => {
        let elementsArray = [];
        
        //Creating list and setting typeElements with it
        for (let i = 1; i <= size; i++) {

            const margin = i === size ? "2rem" : "1rem";

            const element =
                <li key={uuidv4()} style={{ marginBottom: margin }}>
                    <input type="text" placeholder={`Type ${i}`} required />
                    <input type="number" placeholder="Scale amount" required />
                </li>

            elementsArray.push(element);
        }

        setTypeElements(elementsArray);
    }

    const resetInputs = (e) => {
        e.preventDefault();
        setMin('0');
        setMax('100');
        setTitle('');
        setConsumers('');
        setBarsNumber('');
        handleTypeElements(0);
        setGraph(defaultGraph);
    }

    const createGraph = (e) => {
        e.preventDefault();

        if (!min) {
            alert("Enter minimum (min) number of scale range . . .");
            return;
        }
        if (!max) {
            alert("Enter maximum (max) number of scale range . . .");
            return;
        }
        if (parseInt(min) >= parseInt(max)) {
            alert("Minimum (min) range should be less than maximum (max) range . . .");
            return;
        }
        if (!title) {
            alert("Enter title of bar graph types . . .");
            return;
        }
        if (!consumers) {
            alert("Enter title of consumers, ex: students . . .");
            return;
        }
        if (!barsNumber) {
            alert("Enter number of bar graph bars . . .");
            return;
        }

        const typesList = e.target.childNodes[4];
        const typesArray = getTypesArray(typesList);
        
        if (!typesArray) {
            alert("Fill in the types and their percentage / amount . . .");
            return;
        }

        const graph = {
            title: title,
            consumers: consumers,
            min: min,
            max: max,
            types: typesArray
        }

        setGraphDetails(graph);
        scrollToGraph();
    }

    //Extracts objects of types details from given list and stores them in a array
    const getTypesArray = (list) => {
        let bars = [];
        const size = parseInt(barsNumber);
        for(let i= 0; i < size; i++){
            let bar = list.childNodes[i];
            let name = bar.childNodes[0].value;
            let amount = parseInt(bar.childNodes[1].value);
            if(parseInt(amount) >= max){
                alert("Amount should be less than max range . . .");
                return;
            }
            bars.push({name,amount});
        }
        if(bars.length !== size) return;
        return bars;
    }

    const scrollToGraph = () => window.scrollTo(0, 1500);

    //when graphDetails state updates setGraph is called
    useEffect(() => {
        setGraph(graphDetails);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [graphDetails]);
    
    return (
        <GraphFormContainer>
            <h2>Your bar graph details here <span>. . .</span></h2>
            <form onSubmit={createGraph}>
                <div className="form-row">
                    <label>Title:</label>
                    <div className="title">
                        <input type="text" onChange={handleTitle} value={title} placeholder="ex: cars, movies, courses . . ." required/>
                    </div>
                </div>
                <div className="form-row">
                    <label>Consumers:</label>
                    <div className="title">
                        <input type="text" onChange={handleConsumers} value={consumers} placeholder="ex: clients, students, users . . ." required/>
                    </div>
                </div>
                <div className="form-row">
                    <label>Scale range:</label>
                    <div className="range">
                        <input type="number" onChange={handleMin} value={min} placeholder="min" required />
                        <input type="number" onChange={handleMax} value={max} placeholder="max" required />
                    </div>
                </div>
                <div className="form-row">
                    <label>Number of bars:</label>
                    <div className="bars-number">
                        <input type="number" onChange={handleBarsNumber} value={barsNumber} placeholder="ex: bmw, tesla, mercedes = 3" required />
                        <button onClick={confirmBarsNumber}>Ok</button>
                    </div>
                </div>
                <ul>
                    {typeElements.length > 0 ? typeElements : []}
                </ul>
                <div className="buttons-row" >
                    <button onClick={resetInputs} className="reset">Reset</button>
                    <button type="submit" className="create">Create graph</button>
                </div>
            </form>
        </GraphFormContainer>
    )
}