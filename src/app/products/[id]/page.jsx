"use client"
import React, {  useEffect, useState } from "react";

const ProductDetailsPage = ({ params }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const id =  React.use(params).id; 
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        console.log(data);
        const foundProduct = data.find((p)=> p._id = id);
        console.log(foundProduct);
        setProduct(foundProduct);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div style={{ textAlign: "center", marginTop: 50 }}>Loading...</div>;
  if (error) return <div style={{ textAlign: "center", marginTop: 50, color: "red" }}>Error: {error}</div>;
  if (!product) return <div style={{ textAlign: "center", marginTop: 50 }}>No product found.</div>;

  // Helper for star rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <span style={{ color: "#fbbf24" }}>
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)}
      </span>
    );
  };

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "16px auto",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}
    >
      {/* Image and Info */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 24,
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            maxWidth: 400,
            borderRadius: 12,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        />
        <div style={{ flex: 1, minWidth: 300 }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 12 }}>{product.name}</h1>
          <p style={{ marginBottom: 8 }}>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p style={{ marginBottom: 8 }}>
            <strong>Category:</strong> {product.category}
          </p>
          <p style={{ marginBottom: 8 }}>
            <strong>ID:</strong> {product.id}
          </p>
          <p style={{ marginBottom: 12 }}>
            <strong>Description:</strong> {product.description}
          </p>
          <p style={{ marginBottom: 8, fontSize: 24, fontWeight: 600 }}>
            <strong>Price:</strong> ${product.price}
          </p>
          <p style={{ marginBottom: 12 }}>
            <strong>Stock:</strong> {product.stock > 0 ? `${product.stock} available` : "Out of stock"}
          </p>
          <p style={{ marginBottom: 16 }}>
            <strong>Rating:</strong> {renderStars(product.rating)} ({product.rating})
          </p>
          <button
            style={{
              padding: "12px 24px",
              backgroundColor: "#2563eb",
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              border: "none",
              borderRadius: 8,
              cursor: product.stock > 0 ? "pointer" : "not-allowed",
              opacity: product.stock > 0 ? 1 : 0.5,
            }}
            disabled={product.stock === 0}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Additional Info */}
      <div
        style={{
          marginTop: 32,
          padding: 24,
          borderRadius: 12,
          backgroundColor: "#f9fafb",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>Product Details</h2>
        <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
          <li>Brand: {product.brand}</li>
          <li>Category: {product.category}</li>
          <li>Available Stock: {product.stock}</li>
          <li>Rating: {product.rating} / 5</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
