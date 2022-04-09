import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5003' });
const url = "http://localhost:5003";

export const fetchPosts = () => axios.get(url);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
export const createProduct = (newPost) => API.post('/posts', newPost);
// export const fetchPost = (id) => API.get(`/posts/${id}`);
// export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
// export const fetchPostsByCreator = (name) => API.get(`/posts/creator?name=${name}`);
// export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
// export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
// export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
// export const deletePost = (id) => API.delete(`/posts/${id}`);

