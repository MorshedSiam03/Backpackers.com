import { useParams } from "react-router-dom";
import ResortsInHome from "./ResortsInHome";
import { useEffect, useState } from "react";

const ResortDetails = () => {
  const [resorts, setResorts] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/MorshedSiam03/A9-API/main/Resorts.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResorts(data);
      });
  }, []);

  const { id } = useParams();
  const resortId = parseInt(id); // Convert id to a number
  const resort = resorts.find((resort) => resort.id === resortId);
  console.log(resort);

  // Check if resort is undefined before destructuring
  if (!resort) {
    return <p>Loading...</p>; // Show a loading message while data is being fetched
  }

  const {
    image,
    resort_name,
    category,
    description,
    price_per_night,
    status,
    location,
  } = resort;

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4 m-2">
        <div className="col-span-3">
          <figure>
            <img
              src={image}
              alt={resort_name}
              className="rounded-lg lg:w-[800px]"
            />
          </figure>
        </div>
        <div className=" col-span-2 space-y-2 mx-3">
          <p className="text-4xl font-semibold">{resort_name}</p>
          <p className="text-lg">{location}</p>
          <p className="text-lg">{description}</p>
          <p className="text-lg">
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Price: </span>Starting From ${price_per_night}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Status:</span> {status}
          </p>
          <div className="grid grid-cols-2">
            <div>
              <p className="font-semibold">Amenities:</p>
              <ul className="list-disc list-inside">
                {resort.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold">Rooms:</p>
              <ul className="list-disc list-inside">
                {resort.rooms.map((room, index) => (
                  <li key={index}>
                    {room.type} - {room.beds} bed(s) - ${room.price}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="btn font-semibold bg-transparent border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white">
              Book Now
            </button>
            <button className="btn font-semibold bg-transparent border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white">
              Add Wishlist
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-4xl my-3 font-bold">More Resorts</h1>
      <ResortsInHome></ResortsInHome>
    </div>
  );
};

export default ResortDetails;
