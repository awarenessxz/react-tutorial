import React, { Component } from "react";

// Approach 1: Using If/Else
class UserGreeting1 extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLoggedIn: false
        }
    }

    toggleLogIn() {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }

    render() {
        // Approach 1: Using If/Else
        if (this.state.isLoggedIn) {
            return (
                <div>
                    <h1>Welcome User (Approach 1: If/Else)</h1>
                    <button onClick={() => this.toggleLogIn()}>Toggle</button>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>Welcome Guest</h1>
                    <button onClick={() => this.toggleLogIn()}>Toggle</button>
                </div>
            );
        }
    }
}

// Approach 2: ELement Variables : using variable that stores element to be render
class UserGreeting2 extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLoggedIn: false
        }
    }

    toggleLogIn() {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }

    render() {
        let message; 
        if (this.state.isLoggedIn) {
            message = <h1>Welcome User (Approach 2: Element Variable)</h1>
        } else {
            message =<h1>Welcome Guest</h1>
        }

        return (
            <div>
                {message}
                <button onClick={() => this.toggleLogIn()}>Toggle</button>
            </div>
        );
    }
}

// Approach 3: Ternary Conditional Operator
class UserGreeting3 extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLoggedIn: false
        }
    }

    toggleLogIn() {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }

    render() {
        return (
            this.state.isLoggedIn ? (
                <div>
                    <h1>Welcome User (Approach 3: Ternary Conditional Operator)</h1>
                    <button onClick={() => this.toggleLogIn()}>Toggle</button>
                </div>
            ) : (
                <div>
                    <h1>Welcome Guest</h1>
                    <button onClick={() => this.toggleLogIn()}>Toggle</button>
                </div>
            )
        );
    }
}

// Approach 4: Short circuit operator
class UserGreeting4 extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLoggedIn: true
        }
    }

    toggleLogIn() {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }

    render() {
        return this.state.isLoggedIn && <h1>Welcome User (Approach 4: Short circuit Operator)</h1>
    }
}

export { UserGreeting1, UserGreeting2, UserGreeting3, UserGreeting4 };