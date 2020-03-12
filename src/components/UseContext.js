import React, { Component, useContext} from "react";

// This should be in a seperate file
const ChannelContext = React.createContext(); // should export this from main file
const ChannelContext2 = React.createContext(); // then import into the component that uses it

class ComponentA1 extends Component {
    render() {
        return <ComponentB1 />
    }
}

class ComponentB1 extends Component {
    render() {
        return <ComponentC1 />
    }
}

const ComponentC1 = () => {

    const channel1 = useContext(ChannelContext)
    const channel2 = useContext(ChannelContext2)
    
    return (
        <div>
            Component C context : {channel1} - {channel2}
        </div>
    );
}

export { ComponentA1, ChannelContext, ChannelContext2};