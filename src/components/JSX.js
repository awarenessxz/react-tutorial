// introducting the concept of JSX
import React from "react";

const HelloJSX = () => {
    return (
        <div className="dummyClass">
            <h1>Hello - JSX style</h1>
        </div>
    );
}

const HelloReact = () => {
    return React.createElement("div", { id: 'hello' }, React.createElement("h1", null, "hello - react style"));
}

export { HelloJSX, HelloReact };