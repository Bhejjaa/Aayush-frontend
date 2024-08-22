import React, { useEffect, useState } from 'react';
import '../assets/css/SortingExample.css'; // Import your CSS file for styling

const SortingExample = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('high');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const api = 'https://fakestoreapi.com/products';
        const response = await fetch(api);
        const data = await response.json();
        if (response.ok) {
          setProducts(data);
        }
      } catch (error) {
        console.log('Error While fetching data', error);
      }
    };

    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === 'high') {
      return b.price - a.price;
    } else {
      return a.price - b.price;
    }
  });

  return (
    <>
      <div className="container">
        <h6>Sort</h6>
        <select name="sort" onChange={handleChange}>
          <option value="high">Price: High To Low</option>
          <option value="low">Price: Low to High</option>
        </select>

        <div className="sub_container">
          {sortedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-details">
                <p className="product-title">{product.title}</p>
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SortingExample;
