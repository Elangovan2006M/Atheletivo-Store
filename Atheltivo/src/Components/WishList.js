import React from 'react';

function Wishlist({ wishlistItems }) {
  return (
    <div className="wishlist-container">
      <h2>Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>No items in the wishlist.</p>
      ) : (
        <ul>
          {wishlistItems.map((item, index) => (
            <li key={index}>
              <img src={item.imageUrl} alt={item.name} height="50px" />
              <p>{item.name}</p>
              <p>₹{item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Wishlist;
