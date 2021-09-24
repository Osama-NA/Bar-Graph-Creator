import {createContext, useReducer} from 'react';

const SET_GRAPH = 'SET_GRAPH';
const initialState = {}

const reducer = (state, action) => {
    switch(action.type){
        case SET_GRAPH:
            return action.graph;
        default:
            return state;
    }
}

export const GraphContext = createContext(initialState);

export const GraphProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setGraph = (graph) => {
        dispatch({
            type: SET_GRAPH,
            graph: graph
        })
    }

    return (
        <GraphContext.Provider value={{
            graph: state,
            setGraph
        }}>
            {children}
        </GraphContext.Provider>
    );
}