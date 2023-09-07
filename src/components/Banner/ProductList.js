import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

function ProductList() {
  const URL = "http://localhost:8080/api/products/findAllProductBuying";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductList();
  }, []);

  const fetchProductList = async () => {
    try {
      const response = await axios.get(URL, {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000/",
          // Add other headers if needed
        },
      }); // Replace with your API endpoint
      setProducts(response.data);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <img src={product.image} alt="" style={{height: "50%", width: "50%"}}/>
          <p>Hãng: {product.type}</p>
          <p>Loại: {product.desc}</p>
          <p>Giá: {product.price}</p>
          <br/>
          <br/>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
