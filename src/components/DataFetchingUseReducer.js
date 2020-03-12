// Fetching Data with useReducer
import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

const DataFetchingOne = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(res => {
                setLoading(false);
                setPost(res.data);
                setError("");
            })
            .catch(err => {
                setLoading(false);
                setPost({});
                setError("Something went wrong");
            });
    }, []);

    return (
        <div>
            <h1>Data Fetching (using useState & useEffect)</h1>
            {loading ? "Loading" : post.title}
            {error ? error : null}
        </div>
    );
}

const initialState = {
    loading: true,
    error: "",
    post: {}
}
const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                loading: false,
                post: action.payload,
                error: ""
            };
        case "FETCH_ERROR":
            return {
                loading: false,
                post: {},
                error: "Something went wrong!"
            }
        default: 
            return state;
    }
}

const DataFetchingTwo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(res => {
                dispatch({ type: "FETCH_SUCCESS" , payload: res.data });
            })
            .catch(err => {
                dispatch({ type: "FETCH_ERROR" });
            });
    }, []);

    return (
        <div>
            <h1>Data Fetching (using useReducer & useEffect)</h1>
            {state.loading ? "Loading" : state.post.title}
            {state.error ? state.error : null}
        </div>
    );
}

export {DataFetchingOne, DataFetchingTwo };