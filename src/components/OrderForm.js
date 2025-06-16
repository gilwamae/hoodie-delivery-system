// src/components/OrderForm.js
import React, { useState } from "react";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    size: "",
    price: "",
    date: new Date().toISOString().split("T")[0],
    area: "",
    landmark: "",
    city: "",
    deliveryInstructions: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Next step: send to backend
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Hoodie Order Form</h2>

      <input name="name" placeholder="Full Name" onChange={handleChange} required />
      <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} />

      <select name="size" onChange={handleChange} required>
        <option value="">Select Size</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>

      <input name="price" placeholder="Price (KES)" onChange={handleChange} required />
      <input name="date" value={formData.date} disabled />

      <input name="area" placeholder="Area / Estate" onChange={handleChange} required />
      <input name="landmark" placeholder="Landmark(s)" onChange={handleChange} />
      <input name="city" placeholder="Town / City" onChange={handleChange} required />
      <textarea
        name="deliveryInstructions"
        placeholder="Delivery Instructions"
        onChange={handleChange}
        rows="3"
      ></textarea>

      <button type="submit">Submit Order</button>
    </form>
  );
};

export default OrderForm;
