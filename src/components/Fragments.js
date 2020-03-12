import React from "react";

const FragmentDemo = () => {
    return (
        <React.Fragment>
            <h1>Fragment Demo</h1>
            <p>This describes the fragment section</p>
        </React.Fragment>  
    );
}

const Table = () => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <ColumnsA />
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <ColumnsB />
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const ColumnsA = () => {
    return (
        <React.Fragment>
            <td>Name</td>
            <td>What</td>
        </React.Fragment>
    )
}

const ColumnsB = () => {
    const items = [
        {
            title: "Edward"
        },
        {
            title: "Johnny"
        },
        {
            title: "Nobody"
        }
    ];
    return (
        <React.Fragment>
            {
                items.map(item => (
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
        </React.Fragment>
    )
}

export { FragmentDemo, Table };