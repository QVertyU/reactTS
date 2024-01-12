import axios from "axios";
import {useEffect, useState} from "react";

interface Post {
    id: number;
    title: string;
}

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

function Posts() {
    const [posts, setPosts] = useState<Post []>([])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get(`${BASE_URL}/posts`)
                .then(function (response) {
                    setPosts((response.data) as Post[])
                })
        }

        fetchPosts();
    }, []);

    console.log(posts);
}

export default Posts;