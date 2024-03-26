const fetchUserProfile = async (userId = null, accessToken) => {
  const response = await fetch(`http://localhost:5000/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 404) {
    return response.status;
  } else if (response.status === 200) {
    const data = await response.json();
    return data;
  }

  // Handle any other error cases or throw an error
  throw new Error("Failed to fetch user profile");
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
