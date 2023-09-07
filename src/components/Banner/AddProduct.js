import React, { useState } from 'react'
import Product from './Product'
import axios from 'axios';

function AddProduct() {
    const [product, setProduct] = useState({
      name: '',
      type: '',
      desc: '',
      price: 0
    });
  
    const handleChange = (e) => {
      setProduct({ ...product, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('http://localhost:8080/api/products/insert', product);
        console.log('Product added successfully');
        // Optionally, you can perform any additional actions after product submission (e.g., show a success message, redirect to another page)
        // Reset the form
        setProduct({
          name: '',
          type: '',
          desc: '',
          price: 0
        });
      } catch (error) {
        console.error('Error adding product:', error);
      }
    };
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={product.name} onChange={handleChange} required />
        <br />
        <label htmlFor="type">Type:</label>
        <input type="text" id="type" name="type" value={product.type} onChange={handleChange} required />
        <br />
        <label htmlFor="desc">Description:</label>
        <textarea id="desc" name="desc" value={product.desc} onChange={handleChange} required />
        <br />
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" min="0" step="0.01" value={product.price} onChange={handleChange} required />
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct
