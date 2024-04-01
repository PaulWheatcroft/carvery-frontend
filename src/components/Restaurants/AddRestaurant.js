// AddRestaurant.js
import React, { useState } from "react";
import axios from "axios";
import "./AddRestaurant.css";

const AddRestaurant = () => {
  const [formData, setFormData] = useState({
    name: "",
    line1_address: "",
    line2_address: "",
    city: "",
    county: "",
    post_code: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/add-restaurant", formData);
      // Handle successful submission, e.g., redirect to a success page
    } catch (error) {
      // Handle error, e.g., display an error message to the user
    }
  };

  return (
    <>
      <h2 className="permanent-marker-regular">Add A Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="line1_address">First line address:</label>
        <input
          type="text"
          id="line1_address"
          name="line1_address"
          value={formData.line1_address}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="line2_address">Second line address (optional):</label>
        <input
          type="text"
          id="line2_address"
          name="line2_address"
          value={formData.line2_address}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="county">County:</label>
        <input
          type="text"
          id="county"
          name="county"
          value={formData.county}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="post_code">Post code:</label>
        <input
          type="text"
          id="post_code"
          name="post_code"
          value={formData.post_code}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
        <br />

        <input type="submit" value="Add Restaurant" />
      </form>
    </>
  );
};

export default AddRestaurant;
