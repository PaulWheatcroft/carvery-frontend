import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AuthAccount from "./components/Auth/AuthAccount";
import { AllAverageScores } from "./components/Scores/AllAverageScores";
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
    <button
      className="button logout-button"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

function App() {
  const { isAuthenticated } = useAuth0();
  console.log("isAuthenticated", isAuthenticated);
  return (
    <>
      <header className="navbar">
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <a href="#">Add Restaurant</a>
                </li>
                <li>
                  <a href="#">Your Scores</a>
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
          <AuthAccount />
          <AllAverageScores />
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024</p>
      </footer>
    </>
  );
}

export default App;
