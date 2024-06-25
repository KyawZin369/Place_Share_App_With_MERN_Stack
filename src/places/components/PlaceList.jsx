import React from "react";
import PlaceItem from "./PlaceItem";
import { Link } from "react-router-dom";

const PlaceList = (props) => {
  if (props.item.length === 0) {
    return (
      <div className="flex justify-center mt-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-100 p-5">
          <div className="px-6 py-4">
            <div className=" font-bold text-xl mb-2">No Places Added</div>
            <p className="text-gray-700 text-base">
              There is no place that the user has added.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <Link to="/place/new">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-3 px-4 rounded-lg border-none">
                Add Place
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ul className="mt-10">
      {props.item.map((place) => (
        <PlaceItem
          key={place.id}
          placeId={place.id}
          ImageUrl={place.ImageUrl}
          title={place.title}
          desc={place.desc}
          Address={place.address}
          creatorId={place.creatorId}
          coordinate={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
