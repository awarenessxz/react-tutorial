import React from "react";
import ReactDOM from "react-dom";

// this will be in a different root element even though you put it inside App root element
const Portal = () => {
    return ReactDOM.createPortal(
        <h1>Portal Demo</h1>, 
        document.getElementById("portal-root")
    );
}

export default Portal;