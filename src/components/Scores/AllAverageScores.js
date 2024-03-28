import { useEffect, useState } from "react";
import { getRestaurantAverageScoreList } from "../../services/restaurantService";
import "./AllAverageScores.css";

const RestaurantAverageScore = ({ averageScore }) => {
  return (
    <div className="restaurant-average-score">
      <p>{averageScore}</p>
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
      <div className="AllAverageScores">
        <h2>All Average Scores</h2>
        <h3>{results} restaurants</h3>
        <div className="list-container">
          {averages.map((restaurant) => (
            <div key={restaurant.restaurant_id}>
              <p>{restaurant.restaurant_name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
};
