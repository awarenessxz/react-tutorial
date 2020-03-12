// Use context to pass value from top component to lowest component
import React, { Component } from "react"

// This should be in a seperate file
const UserContext = React.createContext();
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

class ComponentA extends Component {
    render() {
        return <ComponentB />
    }
}

class ComponentB extends Component {
    render() {
        return <ComponentC />
    }
}

class ComponentC extends Component {

    // only works for class components (only can read single context)
    static contextType = UserContext;

    render() {
        return (
            <div>
                Component C context : {this.context}
                <ComponentD />
            </div>
        );
    }
}

class ComponentD extends Component {
    render() {
        return (
            <div>
                Component D context: {this.context}
                <ComponentE />
            </div>
        );
    }
}

class ComponentE extends Component {
    render() {
        return (
            <UserConsumer>
                {(username) => {
                    return <div>Component E context: {username}</div>
                }}
            </UserConsumer>
        );
    }
}


ComponentD.contextType = UserContext; // (only can read single context)
export { ComponentA, UserProvider};