import { useContext } from "react";
import { Auth0Context } from "@auth0/auth0-react"; // Import the AuthAccount context

const useAuthStatus = () => {
  const { isAuthenticated } = useContext(Auth0Context); // Access the isAuthenticated state from AuthAccount context
  return isAuthenticated;
};

export default useAuthStatus;
