import React from "react";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
  if (props.item.length === 0) {
    return (
      <div>
        <div> There is no place that user Add. </div>
        <button>Add Place</button>
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
