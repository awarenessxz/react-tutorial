import React, { useState, useEffect } from "react";

/***************************************************************
 * CUSTOM HOOK - ONE
 ***************************************************************/

const DocTitleOne = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    );
}

const DocTitleTwo = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    );
}

const DocTitleThree = () => {
    const [count, setCount] = useState(0);

    useDocumentTitle(count);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    );
}

const DocTitleFour = () => {
    const [count, setCount] = useState(0);

    useDocumentTitle(count);
    
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    );
}

// custom hooks always starts with a use
const useDocumentTitle = (count) => {
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count]);
}

/***************************************************************
 * CUSTOM HOOK - TWO (Counter)
 ***************************************************************/

const CounterWithoutHook = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div>
            <h2>Count = {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

const CounterWithHook = () => {
    const [count, increment, decrement, reset] = useCounter(5);

    return (
        <div>
            <h2>Count = {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

const useCounter = (initialCount = 0, value = 1) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount(prevCount => prevCount + value);
    }

    const decrement = () => {
        setCount(prevCount => prevCount - value);
    }

    const reset = () => {
        setCount(initialCount);
    }

    return [count, increment, decrement, reset];
}

/***************************************************************
 * CUSTOM HOOK - TWO (Input)
 ***************************************************************/

const UserFormWithoutHook = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" />
                </div>
                <div>
                    <label>Last Name</label>
                    <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

const UserFormWithHook = () => {

    const [firstName, bindFirstName, resetFirstname] = useInput("");
    const [lastName, bindLastName, resetLastname] = useInput("");

    const submitHandler = e => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstname();
        resetLastname();
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input {... bindFirstName} type="text" />
                </div>
                <div>
                    <label>Last Name</label>
                    <input {... bindLastName} type="text" />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const reset = () => {
        setValue(initialValue);
    }
    const bind = {
        value, 
        onChange: e => {
            setValue(e.target.value);
        }
    }
    return [value, bind, reset];
}

export { DocTitleOne, DocTitleTwo, DocTitleThree, DocTitleFour, CounterWithoutHook, CounterWithHook, UserFormWithoutHook, UserFormWithHook };