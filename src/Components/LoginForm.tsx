import React, { useEffect, useState } from "react";
import "../SCSS/styles.scss";

const mockLink: string =
  "https://run.mocky.io/v3/20da1b74-1879-44d4-be7e-cda20043fa6b";

interface Props {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  loginStatus: boolean;
  setLogInStatus: React.Dispatch<React.SetStateAction<Boolean>>;
  handleLogin: () => void;
  emailInput: string;
  setEmailInput: React.Dispatch<React.SetStateAction<string>>;
  passwordInput: string;
  setPasswordInput: React.Dispatch<React.SetStateAction<string>>;
}

const LoginForm: React.FC<Props> = ({
  email,
  setEmail,
  password,
  setPassword,
  loginStatus,
  setLogInStatus,
  handleLogin,
  passwordInput,
  setPasswordInput,
  emailInput,
  setEmailInput,
}) => {
  return (
    <div className="formHolder">
      <div className="card">
        <img src="lendsqr-logo.png" alt="" />
        <img src="undraw_Swipe_profiles_re_tvqm.png" alt="" />
      </div>
      {/*  */}

      <div className="formWrapper">
        <form onSubmit={(e) => handleLogin()}>
          <h1>Welcome!</h1>
          <p>Enter details to login</p>
          <input
            type="email"
            placeholder="Email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            required
          />{" "}
          <input
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            placeholder="Password"
            required
          />{" "}
          <span>FORGOT PASSWORD?</span>
          <button type="submit">LOG IN</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
