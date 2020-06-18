// useRef makes it possible to access DOM nodes directly in functional components
import React, { Component, useRef, useEffect, useState } from "react";

// FocusInput
const FocusInputuseRef = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        //focus the input element
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    );
}

class ClassTimer extends Component {
    interval
    constructor(props) {
        super(props);

        this.state = {
            timer: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({timer: prevState.timer + 1}))
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                Class Timer - {this.state.timer}
                <button onClick={() => clearInterval(this.interval)}>Clear Timer</button>
            </div>
        );
    }
}

const HookTimer = () => {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        }
    }, []);

    return (
        <div>
            Hook Timer - {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
        </div>
    );
}

export { FocusInputuseRef, ClassTimer, HookTimer};