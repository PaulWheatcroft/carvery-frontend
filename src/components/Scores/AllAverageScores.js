import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { getRestaurantAverageScoreList } from "../../services/restaurantService";
import "./AllAverageScores.css";

const RestaurantScores = ({ restaurant }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="all-average-scores" key={restaurant.restaurant_details.id}>
      <h3 className="permanent-marker-regular">
        {restaurant.restaurant_details.name}
      </h3>
      <div className="restaurant-details">
        <ul>
          {restaurant.restaurant_details.address1 && (
            <li>{restaurant.restaurant_details.address1},</li>
          )}
          {restaurant.restaurant_details.address2 && (
            <li>{restaurant.restaurant_details.address2},</li>
          )}
          <li>{restaurant.restaurant_details.city},</li>
          <li>{restaurant.restaurant_details.county},</li>
          <li>{restaurant.restaurant_details.postcode},</li>
          <li>{restaurant.restaurant_details.country}</li>
        </ul>
      </div>
      <div className="container">
        <div className="restaurant-scoring">
          <div className="category">
            <div className="category-name">Parking:</div>
            <div className="category-score">
              {Math.round(restaurant.average_parking)}
            </div>
          </div>
          <div className="category">
            <div className="category-name">Location:</div>
            <div className="category-score">
              {Math.round(restaurant.average_location)}
            </div>
          </div>
          <div className="category">
            <div className="category-name">Ambiance:</div>
            <div className="category-score">
              {Math.round(restaurant.average_ambience)}
            </div>
          </div>
          <hr></hr>
          <div className="category">
            <div className="category-name">Meat:</div>
            <div className="category-score">
              {Math.round(restaurant.average_meat)}
            </div>
          </div>
          <div className="category">
            <div className="category-name">Roast Potatoes:</div>
            <div className="category-score">
              {Math.round(restaurant.average_roast_potatoes)}
            </div>
          </div>
          <div className="category">
            <div className="category-name">Cauliflower Cheese:</div>
            <div className="category-score">
              {Math.round(restaurant.average_cauliflower_cheese)}
            </div>
          </div>
          <div className="category">
            <div className="category-name">Veg:</div>
            <div className="category-score">
              {Math.round(restaurant.average_veg)}
            </div>
          </div>
          <div className="category">
            <div className="category-name">Food Overall:</div>
            <div className="category-score">
              {Math.round(restaurant.average_overall_food)}
            </div>
          </div>
          <hr></hr>
          <div className="category">
            <div className="category-name">Customer Service:</div>
            <div className="category-score">
              {Math.round(restaurant.average_customer_service)}
            </div>
          </div>
          <div className="category">
            <div className="category-name">Overall Value:</div>
            <div className="category-score">
              {Math.round(restaurant.average_overall_value)}
            </div>
          </div>
        </div>
        <div className="total">
          <div className="total-label">Total:</div>
          <div className="total-score permanent-marker-regular">
            {Math.round(restaurant.total_average)}
          </div>
        </div>
      </div>
      {isAuthenticated && ( // Render the button only if the user is authenticated
        <div className="add-score-button">
          <Link to={`/add-score/${restaurant.restaurant_details.id}`}>
            Add Score
          </Link>
        </div>
      )}
    </div>
  );
};

export const AllAverageScores = () => {
  const [
    allRestaurantsAverageScoreListData,
    setAllRestaurantsAverageScoreListData,
  ] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRestaurantAverageScoreList();
      setAllRestaurantsAverageScoreListData(data);
    };

    fetchData();
  }, []);

  if (!allRestaurantsAverageScoreListData) {
    return <div>Loading...</div>; // Or any other loading indicator
  }

  const results = allRestaurantsAverageScoreListData[0]?.results;
  const averages = allRestaurantsAverageScoreListData[1]?.averages;

  if (allRestaurantsAverageScoreListData) {
    return (
      <>
        <h2 className="permanent-marker-regular">All Average Scores</h2>
        <h3>{results} restaurants</h3>
        <div className="list-container">
          {averages.map((restaurant) => (
            <RestaurantScores restaurant={restaurant} />
          ))}
        </div>
      </>
    );
  } else {
    return null;
  }
};
