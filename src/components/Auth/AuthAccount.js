import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { fetchUserProfile } from "../../services/backendServices";

const AuthAccount = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const token = await getAccessTokenSilently();
        setAccessToken(token);

        const userIdString = user?.sub;
        if (userIdString) {
          const userId = userIdString.split("|")[1];
          const handleFetchData = async () => {
            try {
              const data = await fetchUserProfile(userId, accessToken);
              console.log(data);
              setUserData(data);
              // Update state or perform other actions based on the fetched data
            } catch (error) {
              console.error(error);
            }
          };
          handleFetchData();
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (isAuthenticated) {
      fetchUserId();
    }
  }, [isAuthenticated, getAccessTokenSilently, user?.sub, accessToken]);

  if (!isAuthenticated) {
    return null; // Render nothing if not authenticated
  }

  return (
    <div>
      {userData && (
        <ul>
          <li>Name: {userData.user.id}</li>
          <li>Name: {userData.user.name}</li>
          <li>Email: {userData.user.email}</li>
          <li>Created date: {userData.user.created}</li>
        </ul>
      )}
    </div>
  );
};

export default AuthAccount;
