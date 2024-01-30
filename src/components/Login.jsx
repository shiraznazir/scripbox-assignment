import React, { useRef, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app, database } from "../../firebase.config";

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const inputRef = useRef();
  const passwordRef = useRef();
  const [btnDisable, setBtnDisable] = useState(true);
  const [error, setError] = useState();

  const handleEmployee = (e) => {
    const text = e.target.value;
    text && setBtnDisable(false);
  };

  const handleBtn = () => {
    const email = inputRef.current.value;
    const password = passwordRef.current.value;

    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
          console.log(response);
          localStorage.setItem("emailForSignIn", email);
          navigate("/");
        })
        .catch((error) => {
          setError("Invalid email or password");
          console.error("Login error:", error);
        });
    } else {
      setError("Employee ID and Password are required");
      setBtnDisable(true);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-sm:w-10/12 max-md:w-8/12 max-lg:w-6/12 w-4/12 bg-white px-8 text-black p-2 border-4 border-gray-500 rounded-xl ring-4">
        <h1 className="py-4 text-3xl text-center font-medium bg-white text-green-500">
          Employee Login
        </h1>
        <div className="w-full py-4 bg-white">
          <form>
            <label className="py-2 text-md bg-white text-black">
              Employee Id
            </label>
            <input
              ref={inputRef}
              className={`w-full bg-white my-2 text-black border-2 border-gray-200 focus:outline-none focus:border-gray-500 ${
                error ? "border-red-500" : ""
              } rounded-lg p-2`}
              type="email"
              placeholder="Employee Id"
              autoComplete="username"
            />
            <label className="my-2 py-2 text-md bg-white text-black">
              Password
            </label>
            <input
              ref={passwordRef}
              type="password"
              className={`w-full bg-white text-black border-2 border-gray-200 focus:outline-none focus:border-gray-500 ${
                error ? "border-red-500" : ""
              } rounded-lg p-2`}
              placeholder="Password"
              onChange={handleEmployee}
              autoComplete="current-password"
            />
          </form>
          <div className="flex justify-center bg-white">
            <button
              type="submit"
              className="w-full my-6 p-2 gap-2 flex justify-center rounded-xl bg-green-600 disabled:bg-gray-300 disabled:text-white"
              disabled={btnDisable}
              onClick={handleBtn}
            >
              Login
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 bg-inherit my-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
