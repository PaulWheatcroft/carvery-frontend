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

export { fetchUserProfile };
