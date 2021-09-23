import React, {useState} from 'react';
import {GraphFormContainer} from './styles/GraphFormContainer.styled';
import {v4 as uuidv4} from 'uuid';

const allNumbersRegex = /^(-)*[0-9]*$/g; // Regex of all numbers
const positiveNumbersRegex = /^[0-9]*$/g; // Regex of positive numbers

export const GraphForm = () => {

    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [title, setTitle] = useState('');
    const [barsNumber, setBarsNumber] = useState('');
    const [typeElements, setTypeElements] = useState([]);

    const handleMin = (e) => { 
        let input = e.target.value;

        //setting min if input is a number
        if (allNumbersRegex.test(input))
            setMin(input);
    }
    
    const handleMax = (e) => {
        let input = e.target.value;

        //setting min if input is a number
        if (allNumbersRegex.test(input)) 
            setMax(input);
    }
 
    const handleTitle = (e) => {
        let input = e.target.value;
        setTitle(input);
    }

    const handleBarsNumber = (e) => {
        let input = e.target.value;

        //setting min if input is a positive number && less than 3 digits
        if ((positiveNumbersRegex.test(input) && input.length <= 2)) {
            setBarsNumber(input);
        }
    }

    const confirmBarsNumber = (e) => {
        e.preventDefault();

        //checking if barsNumber is 0 or barsNumber length is two but not 10
        if ((barsNumber === '0') || (barsNumber.length === 2 && barsNumber !== '10')) {
            alert("Number of bars should be in the range 1 - 10 . . .");
            return;
        }

        handleTypeElements(); //Setting barsNumberConfirmed to render list of typeElements
    }

    const handleTypeElements = () => {
        let elementsArray = [];

        //Creating list and setting typeElements with it
        for (let i = 1; i <= parseInt(barsNumber); i++) {

            const margin =  i === parseInt(barsNumber) ? "2rem" : "1rem";

            const element =
                <li key={uuidv4()} style={{ marginBottom: margin }}>
                    <input type="text" placeholder={`Type ${i}`} required />
                    <input type="text" placeholder="Scale amount" required />
                </li>

            elementsArray.push(element)
        }

        setTypeElements(elementsArray);
    }

    const resetInputs = (e) => {
        e.preventDefault();
        setMin('');
        setMax('');
        setTitle('');
        setBarsNumber('');
        handleTypeElements();
    }

    const createGraph = (e) => {
        e.preventDefault();
    }

    return (
        <GraphFormContainer>
            <h2>Your bar graph details here <span>. . .</span></h2>
            <form>
                <div className="form-row">
                    <label>Title:</label>
                    <div className= "title">
                        <input type="text" onChange={handleTitle} value={title} placeholder="ex: cars, movies, courses . . ." />
                    </div>
                </div>
                <div className="form-row">
                    <label>Scale range:</label>
                    <div className="range">
                        <input type="text" onChange={handleMin} value={min} placeholder="min" required/>
                        <input type="text" onChange={handleMax} value={max} placeholder="max" required/>
                    </div>
                </div>
                <div className="form-row">
                    <label>Number of bars:</label>
                    <div className="bars-number">
                        <input type="text" onChange={handleBarsNumber} value={barsNumber} placeholder="ex: bmw, tesla, mercedes = 3" required/>
                        <button onClick={confirmBarsNumber}>Ok</button>
                    </div>
                </div>
                <ul>
                    {typeElements.length > 0? typeElements:[]}
                </ul>
                <div className="buttons-row" >
                    <button onClick={resetInputs} className="reset">Reset</button>
                    <button onClick={createGraph} className="create">Create graph</button>
                </div>
            </form>
        </GraphFormContainer>
    )
}
