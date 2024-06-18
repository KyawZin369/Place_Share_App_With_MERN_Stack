import React from "react";
import { Card, Button } from "react-daisyui";
import { Link } from "react-router-dom";

const UserItem = ({ id, image, name, placeCount }) => {
  return (
    <Link to={`/${id}/place`} className="no-underline">
        <div className="max-w-lg mx-auto mb-8">
        <Card className="flex flex-row items-center bg-base-100 shadow-xl overflow-hidden">
          <figure className="flex-shrink-0 p-4">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={image} alt={name} />
              </div>
            </div>
          </figure>
          <div className="flex-grow p-4">
            <div className="mb-4">
              <h2 className="text-2xl text-gray-700">{name}</h2>
              <p className="text-gray-500">
                {placeCount} {placeCount === 1 ? "Place" : "Places"}
              </p>
            </div>
            <div className="text-center">
              <Button className="w-full bg-blue-300 text-gray-700 border-0 hover:bg-blue-500 hover:text-gray-100">
                View
              </Button>
            </div>
          </div>
        </Card>
    </div>
    </Link>
  );
};

export default UserItem;
