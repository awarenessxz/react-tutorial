import React, { useState, useCallback } from "react";
import { Title, Button, Count, TitleMemo, ButtonMemo, CountMemo } from "./UseCallBackComponent";

const ParentComponentCallBack = () => {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const incrementAge = () => {
        setAge(age + 1);
    }

    const incrementSalary = () => {
        setSalary(salary + 1000);
    }
    
    return (
        <div>
            <Title type="" />
            <Count text="Age" count={age} type="" />
            <Button handleclick={incrementAge} type="">Increment Age</Button>
            <Count text="Salary" count={salary} type="" />
            <Button handleclick={incrementSalary} type="">Increment Salary</Button>
        </div>
    );
}

// UseMemo to optimize performance (Not all components will be re-rendered)
const ParentComponentCallBackWithMemo = () => {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    const incrementSalary =useCallback(() => {
        setSalary(salary + 1000);
    }, [salary]);
    
    return (
        <div>
            <TitleMemo type="Memo" />
            <CountMemo text="Age" count={age} type="Memo" />
            <ButtonMemo handleclick={incrementAge} type="Memo">Increment Age</ButtonMemo>
            <CountMemo text="Salary" count={salary} type="Memo" />
            <ButtonMemo handleclick={incrementSalary} type="Memo">Increment Salary</ButtonMemo>
        </div>
    );
}

export { ParentComponentCallBack, ParentComponentCallBackWithMemo };