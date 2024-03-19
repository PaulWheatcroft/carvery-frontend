import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AuthAccount from "./components/Auth/AuthAccount";
import "./App.css";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

function App() {
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
            <li>
              <a href="#">Contact</a>
            </li>

            <li>
              <LogoutButton />
            </li>

            <li>
              <LoginButton />
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <div className="content">
          <AuthAccount />
          <p>A load of fake words to fill up space</p>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024</p>
      </footer>
    </>
  );
}

export default App;
