import axios from "axios";

const url = "http://localhost:5000/post";
const postUrl = "http://localhost:5000/post/createPost";

export const fetchPost = () => axios.get(url);
export const createPost = (createPost) => axios.post(postUrl, createPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
