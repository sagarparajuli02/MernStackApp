import axios from "axios";

const url = "http://localhost:5000/post";
const postUrl = "http://localhost:5000/post/createPost";

export const fetchPost = () => axios.get(url);
export const createPost = (createPost) => axios.post(postUrl, createPost);
