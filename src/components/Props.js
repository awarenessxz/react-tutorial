// introducting the concept of Props
// Note that Props are immutable! The values cannot be changed
import React, { Component } from "react";

// original way to call props for functional component
const GreetProps = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Greetings, {props.name} !!</h1>
            {props.children} {/* This simply allows rendering of additional content */}
        </div>
    );
}

// deconstruction of props for functional component - option A
const GreetProps2A = ({name}) => {
    return (
        <div>
            <h1>Hello {name} ~</h1>
        </div>
    );
}
// deconstruction of props for functional component - option B 
const GreetProps2B = props => {
    const {name} = props
    return (
        <div>
            <h1>Hello {name} @</h1>
        </div>
    );
}

// original way to call props for class component
class WelcomeProps extends Component { 
    render () {
        return <h1>Welcome {this.props.name} !!</h1>;
    }
}

// deconstruction of props for class component - option A
class WelcomeProps2 extends Component { 
    render () {
        const {name} = this.props;
        // const {state1, state2} = this.state;    // similar way to do this for state
        return <h1>Welcome {name} ~</h1>;
    }
}

export { GreetProps, WelcomeProps, GreetProps2A, GreetProps2B, WelcomeProps2 };