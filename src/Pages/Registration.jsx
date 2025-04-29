import React from "react";

const Registration = () => {
  const handleRegistration = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
  };
  return (
    <div>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl mt-10">
        <div className="card-body">
          <h2 className="text-2xl">Registration</h2>
          <form onSubmit={handleRegistration} className="fieldset">
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
              className="input border"
              placeholder="Password"
              name="password"
            />

            <button className="btn btn-neutral mt-4">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
