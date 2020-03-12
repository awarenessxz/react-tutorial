/*
 * useReducer is a hook that is used for state management in React
 * useReducer is related to reducer functions
 * [newState, dispatch] = useReducer(reducer, initialState)
 * newState = reducer(currentState, action)
 */
import React, { useReducer, useContext } from "react";

const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return state;
    }
}

// Simple State and Action
const CounterOne = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    
    return (
        <div>
            <div>Count = {count}</div>
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
    );
}

const initialState2 = {
    firstCounter: 0,
    secondCounter: 0
}
const reducer2 = (state, action) => {
    switch(action.type) {
        case "increment":
            return { ...state, firstCounter: state.firstCounter + action.value };
        case "decrement":
            return { ...state, firstCounter: state.firstCounter - action.value };
        case "increment2":
            return { ...state, secondCounter: state.secondCounter + action.value };
        case "decrement2":
            return { ...state, secondCounter: state.secondCounter - action.value };
        case "reset":
            return initialState2;
        default:
            return state;
    }
}

// Object
const CounterTwo = () => {
    const [count2, dispatch2] = useReducer(reducer2, initialState2);
    
    return (
        <div>
            <div>Count = {count2.firstCounter}</div>
            <div>Counter2 = {count2.secondCounter}</div>
            <button onClick={() => dispatch2({ type: "increment", value: 1 })}>Increment</button>
            <button onClick={() => dispatch2({ type: "decrement", value: 1 })}>Decrement</button>
            <button onClick={() => dispatch2({ type: "increment", value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch2({ type: "decrement", value: 5 })}>Decrement 5</button>
            <button onClick={() => dispatch2({ type: "reset"})}>Reset</button>
            <div>
                <button onClick={() => dispatch2({ type: "increment2", value: 1 })}>Increment</button>
                <button onClick={() => dispatch2({ type: "decrement2", value: 1 })}>Decrement</button>
                <button onClick={() => dispatch2({ type: "increment2", value: 5 })}>Increment 5</button>
                <button onClick={() => dispatch2({ type: "decrement2", value: 5 })}>Decrement 5</button>
                <button onClick={() => dispatch2({ type: "reset"})}>Reset</button>
            </div>
        </div>
    );
}


// Multiple userReducer
const CounterThree = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
    
    return (
        <div>
            <div>Count = {count}</div>
            <div>CountTwo = {countTwo}</div>
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
            <div>
                <button onClick={() => dispatchTwo("increment")}>Increment</button>
                <button onClick={() => dispatchTwo("decrement")}>Decrement</button>
                <button onClick={() => dispatchTwo("reset")}>Reset</button>
            </div>
        </div>
    );
}

// Create context
const CountContext = React.createContext();

// Global State Management
const ComponentA3 = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <CountContext.Provider value={{ countState: count, countDispatch: dispatch}}>
                <div>
                Component A3 (Global Count) : { count }
                <ComponentB3 />
                <ComponentC3 />
            </div>
        </CountContext.Provider>
    );
}

const ComponentB3 = () => {
    const countContext = useContext(CountContext);
    return (
        <div>
            Component B3 : {countContext.countState}
            <button onClick={() => countContext.countDispatch("increment")}>Increment</button>
            <button onClick={() => countContext.countDispatch("decrement")}>Decrement</button>
            <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
        </div>
    );
}

const ComponentC3 = () => {
    return (
        <div>
            Component C3 : 
            <ComponentD3 />
        </div>
    );
}

const ComponentD3 = () => {
    const countContext = useContext(CountContext);
    return (
        <div>
            Component D3 : {countContext.countState}
            <button onClick={() => countContext.countDispatch("increment")}>Increment</button>
            <button onClick={() => countContext.countDispatch("decrement")}>Decrement</button>
            <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
        </div>
    );
}

export { CounterOne, CounterTwo, CounterThree, ComponentA3 };