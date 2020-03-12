// Pure Component only works for Class Component
import React, { PureComponent, Component } from "react";
import MemoComp from "./MemoComponent";

// Pure implements shouldComponentUpdate with a shallow props and state comparison
class PureComp extends PureComponent {
    render() {
        console.log("Pure Comp Render");
        return (
            <div>
                Pure Component {this.props.name} {/* no change, so no render */}
            </div>
        );
    }
}

// Does not implement the shouldComponenetUpdate Method, It always returns true by default
class RegComp extends Component {
    render() {
        console.log("Regular Comp Render");
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        );
    }
}

class ParentComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Parent"
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Parent"
            })
        }, 2000);
    }

    render() {
        console.log("************************************************************ Parent Component Render");
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name} />
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} /> 
            </div>
        );
    }
}

export default ParentComp;