// make a call to http://localhost:5000/all-score-averages
// and return the data. Then produce and html list of restaurants
export const getRestaurantAverageScoreList = async () => {
  const response = await fetch("http://localhost:5000/all-score-averages");
  const data = await response.json();
  if (response.status === 200) {
    return data;
  } else {
    return null;
  }
};
