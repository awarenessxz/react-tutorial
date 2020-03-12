import React, { Component } from "react";

function FunctionClick() {

    function clickHandler() {
        console.log("Button Clicked");
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    );
}

class ClassClick extends Component {
    clickHandler() {
        console.log("Button Clicked");
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        );
    }
}

class EventBind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello"
        }
        // Approach 3: Binding in Constructor
        this.clickHandlerV3 = this.clickHandlerV3.bind(this);
    }

    clickHandler() {
        console.log(this); // this will be undefined (following will have error)
        if (this) {
            this.setState({
                message: "Binding Works!"
            });
        }
    }

    clickHandlerV2() {
        this.setState({
            message: "Binding in Render via arrow function"
        });
    }

    clickHandlerV3() {
        this.setState({
            message: "Binding in Constructor Works!"
        });
    }

    clickHandlerV4 = () => {
        this.setState({
            message: "Class property as arrow function!"
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler}>Click Me (Without Bind)</button>
                { /* Approach 1: Binding: The below binding might not be good as it will cause the website to re-render everytime it is clicked */}
                <button onClick={this.clickHandler.bind(this)}>Click Me (With Bind)</button>
                { /* Approach 2: Arrow Function: The below binding might not be good as it have some performance issue */}
                <button onClick={() => this.clickHandlerV2()}>Click Me (With Bind via arrow function)</button>
                { /* Approach 3: Binding in Constructor (BEST) */}
                <button onClick={this.clickHandlerV3}>Click Me (Constructor Binding)</button>
                { /* Approach 4: Binding in Constructor (coming new) */}
                <button onClick={this.clickHandlerV4}>Click Me (Class property as arrow function)</button>
            </div>
        );
    }
}

export { FunctionClick, ClassClick, EventBind };