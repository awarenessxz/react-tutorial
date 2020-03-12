import React from "react";

// Basic
function NameList() {
    const names = ["Amanda", "Diana", "Elena", "Diana"];
    // Using MAP method
    const namelist = names.map((name, index) => <h2 key={index}>{index} : {name}</h2>);
    // note that using the index as the key will have some issues. It should only be used if
    // - the items in the list does not have a unique id
    // - the list is a static list and will not change
    // - the list will never be reordered or filtered
    return ( 
        <div>{namelist}</div>
    );
}

// More Complex List
function PersonNameList() {
    const persons = [
        {
            id: 1,
            name: "Diana",
            age: 30,
            skill: "React"
        },
        {
            id: 2,
            name: "Clark",
            age: 25,
            skill: "Angular"
        },
        {
            id: 3,
            name: "Bruce",
            age: 33,
            skill: "Kotlin"
        }
    ];
    // const personList = persons.map(person => <h2>I am {person.name}, {person.age}, {person.skill}</h2>); // without abstraction
    // const personList = persons.map(person => <Person key={person.id} person={person} />);  // this is what we use if we were to import Person (which we did not)
    const personList = persons.map(person => <div key={person.id}>{Person(person)}</div>);
    return (
        <div>{personList}</div>
    );
}

function Person(person) {
    return (
        <h2>I am {person.name}, {person.age}, {person.skill}</h2>
    );
}

export { NameList, PersonNameList };