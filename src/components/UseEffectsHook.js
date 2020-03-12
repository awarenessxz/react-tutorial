import React, { Component, useState, useEffect } from "react";

// Basic Class Side Effect
class ClassCounterEffects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: ""
        };
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Updating Class Component...");
        // Optimize Count update 
        if (prevState.count !== this.state.count) {
            console.log("Updating document title");
            document.title = `Clicked ${this.state.count} times`;
        }
    }

    render() {
        return (
            <div>
                Side Effects with Class: 
                <input type="text" value={this.state.name} onChange={(e) => {this.setState({name: e.target.value })}} />
                <button onClick={() => this.setState({ count: this.state.count +1 })}>Click {this.state.count} times</button>
            </div>
        );
    }
}

// Basic Use Effects
const HookCounterEffects = () => {
    const [count, setCount] = useState(0);

    // Runs after every render
    useEffect(() => {
        document.title = `You clicked ${count} times`
    });

    return (
        <div>
            Side Effects with useEffects():
            <button onClick={() => setCount(count +1)}>Click {count} times</button>
        </div>
    );
}

// Conditonally Run Effects
const HookCounterEffectsV2 = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    // Runs after every render (Only when count is updated)
    useEffect(() => {
        console.log("Use Effect -- updating count variable");
        document.title = `You clicked ${count} times`
    }, [count]);

    return (
        <div>
            Side Effects with useEffects() -- Conditionally Run:
            <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
            <button onClick={() => setCount(count +1)}>Click {count} times</button>
        </div>
    );
}

// Class Component that only runs effets once
class ClassMouse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
        };
    }

    logMousePosition = (e) => {
        this.setState({ x: e.clientX, y: e.clientY });
    }

    componentDidMount() {
        window.addEventListener("mousemove", this.logMousePosition);
    }

    render() {
        return (
            <div>
                Class Effect: X - {this.state.x} Y - {this.state.y}
            </div>
        );
    }
}

const HookMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log("useEffect hook house");
        window.addEventListener("mousemove", logMousePosition);
    
        // similar to componentWillUnMount (to prvent any error / memory leaks when component is unmount)
        return () => {
            console.log("Component will unmount");
            window.removeEventListener("mousemove", logMousePosition);
        };
    }, []);

    return (
        <div>
            Hook Effect: X - {x} Y - {y}
        </div>
    );
}

const MouseContainer = () => {
    const [display, setDisplay] = useState(true);

    return (
        <div>
            Mouse Container: 
            <button onClick={() => setDisplay(!display)}>Toggle</button>
            {display && <HookMouse />} {/*  */}
        </div>
    );
}

class IntervalClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        // prevents memory leaks by clearing interval
        clearInterval(this.interval);
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return <h1>Class Interval Counter: {this.state.count}</h1>;
    }
}

const IntervalHookCounter = () => {
    const [count, setCounter] = useState(0);
    const [count2, setCounter2] = useState(0);

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [count]);

    useEffect(() => {
        const interval = setInterval(tick2, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    const tick = () => {
        setCounter(count+1);
    }

    const tick2 = () => {
        setCounter2((prevCount) => prevCount + 1);
    }

    return (
        <div>
            <h1>Hook Interval counter : {count}</h1>
            <h1>Hook Interval counter2 : {count2}</h1>
        </div>
    );
}

export { ClassCounterEffects, HookCounterEffects, HookCounterEffectsV2, ClassMouse, HookMouse, MouseContainer, IntervalClassCounter, IntervalHookCounter };