// Click Counter & Hover Counter are doing the exact same thing. Is it possible to abstract the counter which is a common functionality?
// This is answered using Higher Order Component. HOC = pattern where a function takes a component as an argument and returns a new component
//          const NewComponet = higherORderComponent(originalComponent)
//          const IronMan = withSuit(TonyStark)
import React, { Component } from "react";

/*
const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends Component {
        render() {
            return <OriginalComponent name="Higher"/>;
        }
    }
    return NewComponent;
}*/

const withCounter = (WrappedComponent) => {
    class WithCounter extends Component {
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
            // {...this.props} basically passes down whatever that is remaining behind to the new component
            return (
                <WrappedComponent 
                    count={this.state.count} 
                    incrementCount={this.incrementCount}
                    {...this.props}
                />
            ); 
        }
    }
    return WithCounter;
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

class ClickCounter extends Component {
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
        const { count } = this.state;
        return (
            <div>
                <button onClick={this.incrementCount}>Clicked { count } times</button>
            </div>
        );
    }
}

class HoverCounter extends Component {
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
        const { count } = this.state;
        return (
            <div>
                <h2 onMouseOver={this.incrementCount}>Hovered {count} times</h2>
            </div>
        );
    }
}

const EnhancedClickCounter = withCounter(ClickCounterV2);
const EnhancedHoverCounter = withCounter(HoverCounterV2);
export { ClickCounter, HoverCounter, EnhancedClickCounter, EnhancedHoverCounter };