import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const Login = () => {
  const { handleLogin } = use(AuthContext);

  const handleLoginAuthentication = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    handleLogin(email, password)
      .then((result) => console.log(result.user))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl mt-10">
        <div className="card-body">
          <h2 className="text-2xl">Login</h2>
          <form onSubmit={handleLoginAuthentication} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input border"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input border"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
