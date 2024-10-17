// src/Components/SignIn.js

import React, { useState, useEffect } from 'react';
import { UserService } from './UserService';

function SignIn({ onSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await UserService.getUsers();
        setUsers(fetchedUsers);
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      onSignIn(); // Call onSignIn if authentication is successful
      setError(null); // Clear any previous errors
    } else {
      // Create new user if not found
      const newUser = { username, password };
      await UserService.addUser(newUser); // Save the new user in db.json
      onSignIn(); // Call onSignIn after saving new user
      setError(null); // Clear any previous errors
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
