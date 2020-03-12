
// Render Prop refers to a technique for shaing code between React components using a prop whose value is a function
import React, { Component } from "react";

class RenderCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        });
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.incrementCount)}
            </div>
        );
    }
}

class User extends Component {
    render() {
        return (
            <div>{this.props.render(false)}</div>
        );
    }
}

class ClickCounterV2 extends Component {
    render() {
        const { count, incrementCount } = this.props;
        return (
            <div>
                <button onClick={incrementCount}>Clicked { count } times</button>
            </div>
        );
    }
}

class HoverCounterV2 extends Component {
    render() {
        const { count, incrementCount } = this.props;
        return (
            <div>
                <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
            </div>
        );
    }
}

export { ClickCounterV2, HoverCounterV2, User, RenderCounter };