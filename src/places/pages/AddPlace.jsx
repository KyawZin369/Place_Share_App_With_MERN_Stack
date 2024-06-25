import React from "react";
import Form from "../../shared/UIComponents/Form";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/utils/Validator";
import { Button } from "react-daisyui";
import { useForm } from "../../shared/hooks/FormHook";

const AddPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      Title: {
        value: "",
        isValid: false,
      },
      Description: {
        value: "",
        isValid: false,
      },
      Address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);

  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-auto mt-10">
      <form
        className="w-96 h-full px-10 py-10 bg-gray-100 shadow-xl rounded-xl"
        onSubmit={submitHandler}
      >
        <Form
          id="Title"
          label="Title"
          for="Title"
          element="input"
          type="text"
          placeholder="Type your place"
          className="mb-5"
          errorClass="text-red-600 text-xs"
          inputClass="shadow bg-gray-100 appearance-none border border-blue-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          labelClass="flex items-center gap-2 mb-2"
          errorMessageHandler="shadow bg-gray-100 appearance-none border border-red-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          validators={[VALIDATOR_REQUIRE()]}
          errorMessage="Please type your place name"
          onInput={inputHandler}
        />
        <Form
          id="Description"
          label="Description"
          for="Description"
          element="textarea"
          placeholder="Enter a description"
          errorClass="text-red-600 text-xs"
          className="mb-5"
          inputClass="shadow bg-gray-100 appearance-none border border-blue-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          labelClass="flex items-center gap-2 mb-2"
          errorMessageHandler="shadow bg-gray-100 appearance-none border border-red-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorMessage="Please type at least 5 characters"
          onInput={inputHandler}
        />
        <Form
          id="Address"
          label="Address"
          for="Address"
          element="input"
          type="text"
          placeholder="Type your address"
          className="mb-5"
          errorClass="text-red-600 text-xs"
          inputClass="shadow bg-gray-100 appearance-none border border-blue-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          labelClass="flex items-center gap-2 mb-2"
          errorMessageHandler="shadow bg-gray-100 appearance-none border border-red-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          validators={[VALIDATOR_REQUIRE()]}
          errorMessage="Please type your valid address"
          onInput={inputHandler}
        />
        <Button
          type="submit"
          className={`w-full max-w-xs my-2 py-2 px-4 rounded focus:outline-none ${
            formState.isValid ? "bg-blue-400" : "bg-gray-400"
          }`}
          disabled={!formState.isValid}
        >
          Add Place
        </Button>
      </form>
    </div>
  );
};

export default AddPlace;
