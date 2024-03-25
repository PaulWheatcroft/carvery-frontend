const fetchUserProfile = async (userId = null, accessToken) => {
  try {
    const response = await fetch(`http://localhost:5000/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const addUserProfile = async (userData, accessToken) => {
  try {
    const response = await fetch(`http://localhost:5000/add-user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { fetchUserProfile, addUserProfile };
