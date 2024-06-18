import React from "react";
import { Card, Button } from "react-daisyui";

const PlaceItem = (props) => {
  return (
    <div className="max-w-lg mx-auto mb-8">
      <Card className="flex flex-col items-center bg-base-100 shadow-2xl overflow-hidden">
        <figure className="flex-shrink-0 p-4 w-full bg-slate-200">
            <div className=" max-w-full max-h-72">
              <img src={props.ImageUrl} className="rounded-lg"/>
            </div>
        </figure>
        <div className="flex-grow p-4">
          <div className="mb-4 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-5">{props.title}</h2>
            <h3 className="text-xl font-bold mb-5">{props.Address}</h3>
            <div>
              <p className="text-gray-500 mb-5 text-justify">{props.desc}</p>
            </div>
          </div>
          <hr />
          <div className="flex justify-around mt-3">
            <Button className="bg-blue-300 text-gray-700 border-0 hover:bg-blue-500 hover:text-gray-100">View On Map</Button>
            <Button className="bg-blue-300 text-gray-700 border-0 hover:bg-blue-500 hover:text-gray-100">Edit</Button>
            <Button className="bg-blue-300 text-gray-700 border-0 hover:bg-blue-500 hover:text-gray-100">Delete</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PlaceItem;
