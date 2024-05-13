import { useParams } from "react-router-dom";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { addRestaurantScore } from "../../services/restaurantService";
import "./AddRestaurantScore.css";

export const AddRestaurantScore = () => {
  const { isAuthenticated } = useAuth0();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    parking: 0,
    location: 0,
    ambiance: 0,
    meat: 0,
    roast_potatoes: 0,
    cauliflower_cheese: 0,
    veg: 0,
    food_overall: 0,
    customer_service: 0,
    overall_value: 0,
    date: "2022-01-01",
    price: 0,
    restaurant_id: id,
    user_id: 1,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addRestaurantScore(id, formData);
      // Handle successful submission, e.g., redirect to a success page
    } catch (error) {
      // Handle error, e.g., display an error message to the user
    }
  };
  return (
    isAuthenticated && (
      <>
        <h2 className="permanent-marker-regular">Add A Score</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="parking">Parking:</label>
          <input
            type="number"
            id="parking"
            name="parking"
            value={formData.parking}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="location">Location:</label>
          <input
            type="number"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="ambiance">Ambiance:</label>
          <input
            type="number"
            id="ambiance"
            name="ambiance"
            value={formData.ambiance}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="meat">Meat:</label>
          <input
            type="number"
            id="meat"
            name="meat"
            value={formData.meat}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="roast_potatoes">Roast Potatoes:</label>
          <input
            type="number"
            id="roast_potatoes"
            name="roast_potatoes"
            value={formData.roast_potatoes}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="cauliflower_cheese">Cauliflower Cheese:</label>
          <input
            type="number"
            id="cauliflower_cheese"
            name="cauliflower_cheese"
            value={formData.cauliflower_cheese}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="veg">Veg:</label>
          <input
            type="number"
            id="veg"
            name="veg"
            value={formData.veg}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="food_overall">Food Overall:</label>
          <input
            type="number"
            id="food_overall"
            name="food_overall"
            value={formData.food_overall}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="customer_service">Customer Service:</label>
          <input
            type="number"
            id="customer_service"
            name="customer_service"
            value={formData.customer_service}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="overall_value">Overall Value:</label>
          <input
            type="number"
            id="overall_value"
            name="overall_value"
            value={formData.overall_value}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="price">price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    )
  );
};

export default AddRestaurantScore;
