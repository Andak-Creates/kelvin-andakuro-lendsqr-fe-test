import React, { useEffect, useState } from "react";
import "./SCSS/app.scss";
import LoginForm from "./Components/LoginForm";
import Dashboard from "./Components/Dashboard";

const App: React.FC = () => {
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [logInStatus, setLogInStatus] = useState<Boolean>(() => {
    return sessionStorage.getItem("loginStatus") === "true";
  });

  const email: string = "lendrasm@gmail.com";
  const password: string = "lendrassessment";

  useEffect(() => {
    sessionStorage.setItem("loginStatus", logInStatus.toString());
  }, [logInStatus]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    emailInput === email && passwordInput === password
      ? setLogInStatus(true)
      : alert("wrong");

    // if (emailInput == email && passwordInput == password) {
    //   setEmail("");
    //   setPassword("");
    // } else {
    // }
  };
  return (
    <div>
      {logInStatus ? (
        <Dashboard />
      ) : (
        <LoginForm
          handleLogin={handleLogin}
          emailInput={emailInput}
          setEmailInput={setEmailInput}
          passwordInput={passwordInput}
          setPasswordInput={setPasswordInput}
        />
      )}
    </div>
  );
};

export default App;
