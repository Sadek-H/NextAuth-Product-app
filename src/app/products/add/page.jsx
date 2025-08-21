"use client";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AddProductPage() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    brand: "",
    category: "",
    rating: "",
    stock: "",
    image: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          price: parseFloat(form.price),
          rating: parseFloat(form.rating),
          stock: parseInt(form.stock)
        }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);
        setForm({
          name: "",
          description: "",
          price: "",
          brand: "",
          category: "",
          rating: "",
          stock: "",
          image: ""
        });
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow mt-10">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Product Name" className="w-full border p-2 rounded" required />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full border p-2 rounded" required />
        <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Price" className="w-full border p-2 rounded" required />
        <input name="brand" value={form.brand} onChange={handleChange} placeholder="Brand" className="w-full border p-2 rounded" required />
        <input name="category" value={form.category} onChange={handleChange} placeholder="Category" className="w-full border p-2 rounded" required />
        <input type="number" step="0.1" name="rating" value={form.rating} onChange={handleChange} placeholder="Rating" className="w-full border p-2 rounded" required />
        <input type="number" name="stock" value={form.stock} onChange={handleChange} placeholder="Stock" className="w-full border p-2 rounded" required />
        <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="w-full border p-2 rounded" required />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
