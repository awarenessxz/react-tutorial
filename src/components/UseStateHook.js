// General Idea: It is to use react features without a class (it does not replace it. It is a matter of preference. But functions might be more lightweight and cleaner)
// Rules when using hooks:
/*
 * "Only call Hooks at the Top level" 
 *      - Don't call hooks inside loops, conditions or nested functions
 * "Only call Hooks from React Functions"
 */
// Features of UseStateHooks:
/*
 * Add state to functional component
 * State does not have to be an object (can be array, number, string, etc...)
 * hook returns two elements (1: current value of state, 2: state setter function)
 * it is possible to pass function to setter if state depends on previous state
 */
// NOTE: Unlike this.setState() in class, updating the current state always REPLACES value instead of MERGING value
import React, { Component, useState } from "react";

class ClassCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        }); 
    }

    render() {
        return (
            <div>
                Class Counter: 
                <button onClick={this.incrementCount}>Count : {this.state.count}</button>
            </div>
        );
    }
}

// basic hook counter
const HookCounter = () => { 

    // array destructuring & initializing hooks
    const [count, setCount] = useState(0);

    return (
        <div>
            Hook Counter: 
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    );
}

// hook counter with previous state
const HookCounterV2 = () => { 

    const intialCount = 0;
    const [count, setCount] = useState(intialCount);

    // this is a bad example of hook cause setCount will be run concurrently. Hence result is not accurate
    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(count + 1);
        }
    }

    const incrementFiveCorrect = () => {
        for (let i = 0; i < 5; i++) {
            setCount((prevCount) => (
                prevCount + 1
            ));
        }
    }

    return (
        <div>
            Hook Counter with previous State: Count = {count} 
            <button onClick={() => setCount(intialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increase by 5</button>
            <button onClick={incrementFiveCorrect}>Increase by 5 Correct</button>
        </div>
    );
}

// hook counter with object
const HookCounterV3 = () => { 

    // setState will merge the states, but useState will not merge the states.
    const [name, setName] = useState({
        firstName: "",
        lastName: ""
    });

    return (
        <form>
            <label>Hook Counter with Objects: </label>
            <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value})} />
            <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value})} />
            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your last name is - {name.lastName}</h2>
        </form>
    );
}

// hook counter with Array
const HookCounterV4 = () => { 
    const [items, setItems] = useState([]);

    const addItems = () => {
        // 1st parm (... items = make a copy of original array), 2nd param ({}) => add a new item into array
        setItems([...items, {
            id: items.length, // id of item
            value: Math.floor(Math.random() * 10) + 1 // value of item
        }])
    }

    return (
        <div>
            <label>Hook Counter with Array: </label>
            <button onClick={addItems}>Add a number</button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    );
}

export { ClassCounter, HookCounter, HookCounterV2, HookCounterV3, HookCounterV4 };