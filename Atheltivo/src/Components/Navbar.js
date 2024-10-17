// src/Components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { UserService } from './UserService';

function Navbar({ onSignOut }) {
  const handleDeleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      await UserService.deleteUser(id);
      alert('User deleted successfully');
      onSignOut(); // Sign out after deletion
    }
  };

  const handleUpdateUser = async (id) => {
    const newUsername = prompt('Enter new username:', 'newUsername');
    const newPassword = prompt('Enter new password:', 'newPassword');
    
    if (newUsername && newPassword) {
      const updatedUser = { username: newUsername, password: newPassword };
      await UserService.updateUser(id, updatedUser);
      alert('User updated successfully');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">Atheltivo</div>
        <div>
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/products" className="navbar-link">Products</Link>
          <Link to="/wishlist" className="navbar-link">Wishlist</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
          <button onClick={() => handleUpdateUser(1)} className="navbar-logout" >Update User</button>
          <button onClick={() => handleDeleteUser(1)} className="navbar-logout">Delete User</button>
          <a href="#logout" className="navbar-logout" onClick={onSignOut}>Logout</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
