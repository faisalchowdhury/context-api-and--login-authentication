import React from "react";

const Login = () => {
  return (
    <div>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl mt-10">
        <div className="card-body">
          <h2 className="text-2xl">Login</h2>
          <form className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input border" placeholder="Email" />
            <label className="label">Password</label>
            <input
              type="password"
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
