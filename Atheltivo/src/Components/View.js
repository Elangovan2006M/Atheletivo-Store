import React from 'react';

function View({ selectedProduct, addToWishlist }) {
  const { imageUrl, name, price, rating, review } = selectedProduct;

  const handleWishClick = () => {
    addToWishlist(selectedProduct);
    alert(`${name} has been added to your wishlist!`); // Alert on adding to wishlist
  };

  return (
    <div className="view-container">
      <img src={imageUrl} alt={name} className="view-image" />
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <p>Rating: ⭐{rating}</p>
      {review && <p>Review: {review}</p>}
      <button onClick={handleWishClick} className="wish-button">
        Add to Wishlist
      </button>
    </div>
  );
}

export default View;
