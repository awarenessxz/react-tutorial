import React from "react";
import "../stylesheets/myStyles.css";
import "../stylesheets/appStyles.css";
import styles from "../stylesheets/appStyles.module.css";

function StyleSheet(props) {
    let className = props.primary ? "primary" : "";
    return (
        <div>
            { /* <h1 className={className}>Stylesheet</h1> */}
            <h1 className={`${className} font-xl`}>Stylesheet</h1> { /* Multiple styles */ }
        </div>
    );
}

function Inline() {
    const heading = {
        fontSize: "72px",
        color: "blue"
    }

    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    );
}

// Module stylesheet
function ModuleStyleSheet() {

    return (
        <div>
            <h1 className="error">Error</h1> { /* affects the child component */ }
            <h1 className={styles.success}>Success</h1> { /* does not affects the child component */ }
        </div>
    );
}

export { StyleSheet, Inline, ModuleStyleSheet };