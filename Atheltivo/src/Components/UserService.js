// src/Components/UserService.js

import axios from 'axios';

const apiUrl = 'http://localhost:3001/users'; // Adjust based on your JSON Server setup

export const UserService = {
  // GET: Fetch users
  getUsers: async () => {
    const response = await axios.get(apiUrl);
    return response.data;
  },

  // POST: Add a new user
  addUser: async (user) => {
    const response = await axios.post(apiUrl, user);
    return response.data;
  },

  // PUT: Update user details
  updateUser: async (id, updatedUser) => {
    const response = await axios.put(`${apiUrl}/${id}`, updatedUser);
    return response.data;
  },

  // DELETE: Remove a user
  deleteUser: async (id) => {
    await axios.delete(`${apiUrl}/${id}`);
  },
};



//json-server --watch src/db.json --port 3001
