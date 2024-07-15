import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidEmail, checkValidPassword } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState(null);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleClickButton = () => {
    const EmailMessage = checkValidEmail(email.current.value);
    const passwordMessage = checkValidPassword(password.current.value);
    setEmailErrorMessage(EmailMessage);
    setPasswordErrorMessage(passwordMessage);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          className="brightness-50 w-[100vw] h-[100vh] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg"
          alt="Background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-[#161719] border border-gray-500"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-[#161719] border border-gray-500"
        />
        <p className="text-red-500 font-thin text-sm">
          {emailErrorMessage}
        </p>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-[#161719] border border-gray-500"
        />

        <p className="text-red-500 font-thin text-sm">
          {passwordErrorMessage}
        </p>

        <button
          onClick={handleClickButton}
          className="p-4 my-6 bg-[#e50913] w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer">
          {isSignInForm ? "New to Netflix?" : "Already Registered?"}{" "}
          <span
            onClick={toggleSignInForm}
            className="font-semibold hover:underline"
          >
            {isSignInForm ? "Sign up now" : "Sign In now"}
          </span>
          .
        </p>
      </form>
    </div>
  );
};

export default Login;
