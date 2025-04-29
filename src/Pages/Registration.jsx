import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const Registration = () => {
  const { handleRegister } = useContext(AuthContext);

  console.log(handleRegister);

  const handleRegistration = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;

    if (!regularExpression.test(password)) {
      console.log("password is not enough strong");
      return;
    }

    handleRegister(email, password)
      .then((result) => console.log(result.user))
      .catch((err) => console.log(err));
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
