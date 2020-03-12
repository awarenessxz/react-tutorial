import React, { Component } from "react";

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Joker"
        };
        console.log("LifeCycleA constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps");
        return null;
    }
    
    shouldComponentUpdate() {
        console.log("LifeCycleA shouldComponentUpdate");
        return true;
    }

    render() {
        console.log("LifeCycleA render");
        return (
            <div>
                <div>Life CycleA</div>
                <button onClick={this.changeState}>Updating</button>
                <LifeCycleB />
            </div>
        );
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycleA getSnapshotsBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("LifeCycleA componentDidUpdate");
    }

    componentDidMount() {
        console.log("LifeCycleA componentDidMount");
    }

    changeState = (event) => {
        this.setState({
            name: "Updated"
        });
    }
}

class LifeCycleB extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Joker"
        };
        console.log("LifeCycleB constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleB getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate() {
        console.log("LifeCycleB shouldComponentUpdate");
        return true;
    }

    render() {
        console.log("LifeCycleB render");
        return (
            <div>
                LifeCycleB
            </div>
        );
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycleB getSnapshotsBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("LifeCycleB componentDidUpdate");
    }

    componentDidMount() {
        console.log("LifeCycleB componentDidMount");
    }
}

export default LifeCycleA;