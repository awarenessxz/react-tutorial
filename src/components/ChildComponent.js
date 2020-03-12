import React from "react";

function ChildComponent(props) {
    return (
        <div>
            <button onClick={props.greetHandler}>Greet Parent</button>
            <button onClick={() => props.greetHandlerV2('child')}>Greet Parent V2</button>
        </div>
    );
}

export default ChildComponent;