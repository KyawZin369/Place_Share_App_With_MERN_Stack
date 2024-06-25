import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../../shared/UIComponents/Form";
import { Button } from "react-daisyui";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/utils/Validator";
import { useForm } from "../../shared/hooks/FormHook";

const USER_PLACE = [
  {
    id: "u2",
    title: "Bagan, Myanmar",
    ImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAId8E37gzsZjZPBromhRvuv6Lz8qQWOHrug&s",
    desc: "While this ancient site may not be on the average traveler's radar, it's another of Southeast Asia's bucket-list attractions. Spread out over a lush plain are more than 10,000 sacred structures dating from 1044 through to 1287. Hire a bicycle and pedal your way from one amazing structure to the next, or take a tour. Some of the structures can be entered, but the real beauty is the sheer number that dot the landscape. For an aerial view, consider taking a hot air balloon tour at dawn.",
    address: "5VC5+MCV, Old Bagan",
    location: {
      lat: 21.1722165,
      lng: 94.8537147,
    },
    creator: "u2",
  },
  {
    id: "u3",
    title: "Bagan, Myanmar",
    ImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAId8E37gzsZjZPBromhRvuv6Lz8qQWOHrug&s",
    desc: "While this ancient site may not be on the average traveler's radar, it's another of Southeast Asia's bucket-list attractions. Spread out over a lush plain are more than 10,000 sacred structures dating from 1044 through to 1287. Hire a bicycle and pedal your way from one amazing structure to the next, or take a tour. Some of the structures can be entered, but the real beauty is the sheer number that dot the landscape. For an aerial view, consider taking a hot air balloon tour at dawn.",
    address: "5VC5+MCV, Old Bagan",
    location: {
      lat: 21.1722165,
      lng: 94.8537147,
    },
    creator: "u3",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const [isloading, setIsLoading] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValidate: false,
      },
      description: {
        value: "",
        isValidate: false,
      },
    },
    false
  );

  const identifiedPlace = USER_PLACE.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValidate: true,
          },
          description: {
            value: identifiedPlace.desc,
            isValidate: true,
          },
        },
        true
      );
      setIsLoading(false);
    }
  }, [setFormData, identifiedPlace]);

  if (!identifiedPlace) {
    return (
      <div className="w-full flex justify-center mt-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-red-100 p-5">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">No Place Found</div>
            <p className="text-gray-700 text-base">
              There is no place with the provided ID.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (isloading) {
    return (
      <div className="w-full flex justify-center">
        <span>Loading....</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-auto mt-10">
      <form className="w-96 h-full px-10 py-10 bg-gray-100 shadow-xl rounded-xl">
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
          initialvalue={formState.inputs.title.value}
          initialvalid={formState.inputs.title.isValidate}
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
          initialvalue={formState.inputs.description.value}
          initialvalid={formState.inputs.description.isValidate}
        ></Form>
        <Button
          type="submit"
          className={`w-full max-w-xs my-2 py-2 px-4 rounded focus:outline-none ${
            formState.isValid ? "bg-blue-400" : "bg-gray-400"
          }`}
          disabled={!formState.isValid}
        >
          Update Place
        </Button>
      </form>
    </div>
  );
};

export default UpdatePlace;
