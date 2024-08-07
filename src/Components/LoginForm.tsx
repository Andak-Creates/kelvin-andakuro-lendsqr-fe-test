import React from "react";
import "../SCSS/styles.scss";

interface Props {
  handleLogin: (e: React.FormEvent) => void;
  emailInput: string;
  setEmailInput: React.Dispatch<React.SetStateAction<string>>;
  passwordInput: string;
  setPasswordInput: React.Dispatch<React.SetStateAction<string>>;
}

const LoginForm: React.FC<Props> = ({
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
        <form onSubmit={(e: React.FormEvent) => handleLogin(e)}>
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
