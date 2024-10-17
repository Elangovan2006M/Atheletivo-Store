// src/Components/ProductList.js

import React from 'react';
import Product from './Product';
import productsData from './productsData'; // Import the product data

function ProductList({ onProductClick }) {
  return (
    <div>
      <div className="product-list">
        {productsData.map((product, index) => (
          <div key={index} onClick={() => onProductClick(product)}>
            <Product
              imageUrl={product.imageUrl}
              name={product.name}
              description={product.description}
              price={product.price}
              rating={product.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
