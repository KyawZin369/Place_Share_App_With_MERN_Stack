import React, { useState, useContext } from "react";
import Form from "../UIComponents/Form";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../utils/Validator";
import { useForm } from "../hooks/FormHook";
import { Button } from "react-daisyui";
import { authContext } from "../Context/LoginContext";

const Auth = () => {

  const auth = useContext(authContext)

  const [formState, inputHandler, setFormData] = useForm(
    {
      Email: {
        value: "",
        isValid: false,
      },
      Password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const [viewPassword, setViewPassword] = useState(false);

  const [loginMode, setLoginMode] = useState(true);

  const toggleSignUp = () => {
    if (!loginMode) {
      setFormData(
        {
          ...formState.inputs,
          Name: undefined,
        },
        formState.inputs.Email.isValid && formState.inputs.Password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          Name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setLoginMode((prevLogin) => !prevLogin);
  };

  const togglePassword = () => {
    setViewPassword((defaultPassword) => !defaultPassword);
  };

  const passwordHandler = () => {
    return (
      <span
        onClick={() => togglePassword()}
        className=" absolute right-4 top-[2px] select-none cursor-pointer"
      >
        {viewPassword ? (
          <i className="fa-solid fa-eye-slash"></i>
        ) : (
          <i className="fa-solid fa-eye"></i>
        )}
      </span>
    );
  };

  const submitLoginHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login()
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-auto mt-10">
      <div className="flex w-full justify-center items-center mb-10">
        <div className="flex w-96 justify-center items-center">
          <Button
            className={` w-48 max-w-xs rounded focus:outline-none ${
              loginMode ? "bg-blue-400 hover:bg-blue-600" : " bg-none"
            }`}
            onClick={() => toggleSignUp()}
          >
            Login
          </Button>
          <Button
            className={`w-48 max-w-xs rounded focus:outline-none ${
              loginMode ? "bg-none" : "bg-blue-400 hover:bg-blue-600"
            }`}
            onClick={() => toggleSignUp()}
          >
            Sign Up
          </Button>
        </div>
      </div>
      <form
        className="w-96 h-full px-10 py-10 bg-gray-100 shadow-xl rounded-xl"
        onSubmit={submitLoginHandler}
      >
        {!loginMode && (
          <Form
            id="Name"
            label="Name"
            for="Name"
            element="input"
            type="Text"
            placeholder="Your Name"
            className="mb-5"
            errorClass="text-red-600 text-xs"
            inputClass="shadow bg-gray-100 appearance-none border border-blue-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            labelClass="flex items-center gap-2 mb-2"
            errorMessageHandler="shadow bg-gray-100 appearance-none border border-red-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            validators={[VALIDATOR_REQUIRE()]}
            errorMessage="Please Type Your Email Correctly"
            onInput={inputHandler}
          />
        )}
        <Form
          id="Email"
          label="Email"
          for="Email"
          element="input"
          type="Email"
          placeholder="YourEmail@gmail.com"
          className="mb-5"
          errorClass="text-red-600 text-xs"
          inputClass="shadow bg-gray-100 appearance-none border border-blue-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          labelClass="flex items-center gap-2 mb-2"
          errorMessageHandler="shadow bg-gray-100 appearance-none border border-red-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          validators={[VALIDATOR_EMAIL()]}
          errorMessage="Please Type Your Email Correctly"
          onInput={inputHandler}
        />
        <Form
          id="Password"
          label="Password"
          for="Password"
          element="input"
          type={viewPassword ? "text" : "password"}
          placeholder="Your Password"
          className="mb-5 relative"
          errorClass="text-red-600 text-xs"
          inputClass="shadow bg-gray-100 appearance-none border border-blue-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          labelClass="flex items-center gap-2 mb-2"
          errorMessageHandler="shadow bg-gray-100 appearance-none border border-red-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          validators={[VALIDATOR_MINLENGTH(8)]}
          errorMessage="Password must be at least 8 characters long."
          onInput={inputHandler}
          otherFeature={passwordHandler()}
        />
        <Button
          type="submit"
          className="w-full max-w-xs my-2 py-2 px-4 rounded focus:outline-none bg-blue-400"
          disabled={!formState.isValid}
        >
          {loginMode ? "Login" : "Sign Up"}
        </Button>
      </form>
    </div>
  );
};

export default Auth;
