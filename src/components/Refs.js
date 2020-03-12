import React, { Component } from "react";

class RefsDemo extends Component {
    constructor(props) {
        super(props);
        // approach 1
        this.inputRef = React.createRef();
        // approach 2: older style
        this.cbRef = null;
        this.setCbRef = (element) => {
            this.cbRef = element; // assign dom element to callback ref
        }
    }

    componentDidMount() {
        console.log(this.inputRef);
        this.inputRef.current.focus();
        console.log(this.inputRef);

        // have to check if it is null
        if (this.cbRef) {
            this.cbRef.focus();
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
        alert(this.cbRef.value);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

class Input extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    focusInput = () => {
        this.inputRef.current.focus();
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
            </div>
        );
    }
}

class FocusInput extends Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }

    clickHandler = () => {
        this.componentRef.current.focusInput(); // this is basically a reference to child component from the parent component
    }

    render() {
        return (
            <div>
                <Input ref={this.componentRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        );
    }
}

const ForwardingInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref}/> {/* ref is forwarded from parent component */}
        </div>
    );
})

class FRParentInput extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    clickHandler = () => {
        this.inputRef.current.focus(); // this is basically a reference to parent component from the child component
    }

    render() {
        return (
            <div>
                <ForwardingInput ref={this.inputRef} /> {/* attach a reference from parent to child component */}
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        );
    }
}

export { RefsDemo, FocusInput, FRParentInput };