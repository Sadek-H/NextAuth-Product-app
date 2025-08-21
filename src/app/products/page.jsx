"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();

        if (!Array.isArray(data)) throw new Error("Data is not an array");

        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <section className="mt-14 container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">All Products</h1>
        <Link href="/products/add" className="btn btn-secondary rounded-2xl text-white">
          Add Product
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="text-center mt-10">No products found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product._id} className="bg-white rounded-xl shadow-md p-6 border">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="font-bold text-indigo-600 mt-2">${product.price}</p>
              <Link
                href={`/products/${product._id}`}
                className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
