import axios from './axios';

export const getNotesRequest = () => axios.get(`/notes`);
export const addNotesRequest = (notes) => axios.post(`/notes`,notes);
export const updateNotesRequest = (notes) => axios.put(`/notes/${notes._id}`,notes);
export const deleteNotesReques =(id) => axios.delete(`/notes/${id}`)

