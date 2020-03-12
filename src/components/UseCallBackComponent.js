import React from "react";

const Title = ({type}) => {
    console.log(`Rendering Title (${type})`);
    return (
        <h2>useCallback Hook</h2>
    );
}

const Count = ({text, count, type}) => {
    console.log(`Rendering ${text} (${type})`);
    return <div>{text} - {count}</div>
}

const Button = ({handleclick, children, type}) => {
    console.log(`Rendering button - `, children, `(${type})`);
    return (
        <button onClick={handleclick}>{children}</button>
    );
}

/******************************************************************************************
 * Re-render only the component that is required to be re-render to optimize performance
 * using useMemo as shown below.
 ******************************************************************************************/

const ButtonMemo = React.memo(Button);
const CountMemo = React.memo(Count);
const TitleMemo = React.memo(Title);

export { Title, Button, Count, TitleMemo, ButtonMemo, CountMemo };