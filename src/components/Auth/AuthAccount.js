import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  fetchUserProfile,
  addUserProfile,
} from "../../services/backendServices";

const AuthAccount = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await getAccessTokenSilently();
        setAccessToken(token);

        const userId = user?.sub?.split("|")[1];
        if (!userId) {
          setError("User ID not found");
          return;
        }

        const userProfile = await fetchUserProfile(userId, accessToken);
        console.log("userProfile", userProfile, userId);
        if (userProfile === 404) {
          const userData = {
            id: userId,
            name: user?.given_name,
            email: user?.email,
          };
          console.log("userData", userData);
          const createdUser = await addUserProfile(userData, accessToken);
          if (createdUser) {
            const userProfile = await fetchUserProfile(userId, accessToken);
            setUserData(userProfile);
          }
        } else {
          setUserData(userProfile);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchUserData();
    }
  }, [isAuthenticated, getAccessTokenSilently, user?.sub, accessToken, user]);

  if (!isAuthenticated) {
    return null; // Render nothing if not authenticated
  }

  if (loading) {
    return <div>Loading...</div>; // Render loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Render error state
  }

  return (
    <>
      {userData && (
        <a href="#" id={`user-id-${userData.user?.id}`}>
          {userData.user?.name}
        </a>
      )}
    </>
  );
};

export default AuthAccount;
