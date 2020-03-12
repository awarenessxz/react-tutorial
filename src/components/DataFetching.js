import React, { useState, useEffect } from "react";
import axios from "axios";

// Website to use for fetching data: https://jsonplaceholder.typicode.com/

const DataFetching = () => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState([]);
    const [id, setID] = useState(1);
    const [fetchId, setFetchID] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${fetchId}`)
            .then(res => {
                //console.log(res);
                //setPosts(res.data);
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [fetchId]); // empty array so that the data fetch is only once

    const fetchPost = () => {
        setFetchID(id);
    }

    return (
        <div>
            <input type="text" value={id} onChange={e => setID(e.target.value)} />
            <button onClick={fetchPost}>Fetch Post</button>
            <p>{post.title}</p>
            <ul>
                {
                    posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export { DataFetching }; 