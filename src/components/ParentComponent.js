import React, { Component } from "react"
import ChildComponent from "./ChildComponent"

class ParentComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            parentName: "Parent"
        }

        this.greetParent = this.greetParent.bind(this);
        this.greetParentV2 = this.greetParentV2.bind(this);
    }

    greetParent() {
        alert(`Hello ${this.state.parentName}`);
    }

    greetParentV2(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }

    render() {
        return (
            <div>
                {/* Passing Method as Prop to Child Component */}
                <ChildComponent greetHandler={this.greetParent} greetHandlerV2={this.greetParentV2} />
            </div>
        );
    }
}

export default ParentComponent;