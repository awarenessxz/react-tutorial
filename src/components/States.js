import React, { Component } from "react";

class Message extends Component {
    // initialize the state object (usually done in constructor)
    constructor() {
        super();
        this.state = {
            message: "Welcome Visitor"
        };
    }

    changeMessage() {
        this.setState({
            message: "Thank you for subscribing"
        });
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        );
    }
}

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            countMultiple: 0
        };
    }

    increment() {
        // this.state.count = this.state.count + 1;   // anything outside constructor, have to use setState in order for it to be rendered
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log("Callback value: ", this.state.count); // this will be called when setstate is completed
        });
        console.log(this.state.count); // call to setState is async, so this console.log might not be accurate
    }

    incrementV2() {
        // this will takes into account the previous state if running multiple setStates concurrently in order
        this.setState(prevState => ({
            countMultiple: prevState.countMultiple + 1
        }));
        console.log(this.state.countMultiple);
    }

    incrementFive() {
        // react will run setState in parallel, hence running setState as shown below would be inaccurate
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        // Right Way is as shown below
        this.incrementV2();
        this.incrementV2();
        this.incrementV2();
        this.incrementV2();
        this.incrementV2();
    }

    render() {
        return (
            <div>
                <h1>Count (Does not Handle Previous State) - {this.state.count}</h1>
                <h1>Count (Handles Previous State) - {this.state.countMultiple}</h1>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.incrementFive()}>Increment * 5</button>
            </div>  
        );
    }
}

export { Message, Counter };