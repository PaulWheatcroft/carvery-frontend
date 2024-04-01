import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import AuthAccount from "./components/Auth/AuthAccount";
import { AllAverageScores } from "./components/Scores/AllAverageScores";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddRestaurant from "./components/Restaurants/AddRestaurant"; // Import the AddRestaurant component
import "./App.css";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="button login-button" onClick={() => loginWithRedirect()}>
      Log In or Sign Up
    </button>
  );
};

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Link
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </Link>
  );
};

function App() {
  const { isAuthenticated } = useAuth0();
  console.log("isAuthenticated", isAuthenticated);
  return (
    <>
      <header className="navbar">
        <div className="permanent-marker-regular logo">
          <Link to="/">Wot A Carve Up!</Link>
        </div>
        <nav>
          <ul>
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="/add-restaurant">Add Restaurant</Link>
                  {/* <a href="#">Add Restaurant</a> */}
                </li>
                <li>
                  <a href="#">Your Scores</a>
                </li>
                <li>
                  <AuthAccount />
                </li>
                <li>
                  <LogoutButton />
                </li>
              </>
            ) : (
              <li>
                <LoginButton />
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main className="main">
        <div className="content">
          <Routes>
            <Route path="/" exact element={<AllAverageScores />} />
            <Route path="/add-restaurant" element={<AddRestaurant />} />
          </Routes>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024</p>
      </footer>
    </>
  );
}

export default App;
