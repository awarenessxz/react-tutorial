import React, { useState, useMemo } from "react";

const MemoCounter = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    }

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000 ) i++;
        return counterOne % 2 === 0;
    }, [counterOne]);

    // trying to demonstrate a function that will be required to update but takes a long time to update
    /*const isEven = () => {
        let i = 0;
        while (i < 2000000000 ) i++;
        return counterOne % 2 === 0;
    }*/


    return (
        <div>
            <h1>Using Memo:</h1>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                { /* <span>{isEven() ? "Even" : "Odd"}</span> */ }
                <span>{isEven ? "Even" : "Odd"}</span> { /* useMemo cache isEven. It will only update when value change */}
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
            </div>
        </div>
    );
}

export default MemoCounter;