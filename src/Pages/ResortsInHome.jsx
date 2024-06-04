import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ResortsInHome = () => {
  const [resorts, setResorts] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/MorshedSiam03/A9-API/main/Resorts.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResorts(data);
      });
  }, []);
  const limitedHotels = resorts.slice(0, 4); // Limit to 4 hotels

  return (
    <div>
      <div className="flex justify-center mx-2 mb-4">
        <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {limitedHotels.map((resort) => (
            <div
              key={resort.id}
              className="card card-compact  bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={resort.image}
                  alt={resort.resort_name}
                  className="w-full h-56 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{resort.resort_name}</h2>
                <p className="font-semibold">{resort.location}</p>
                <p>Category: {resort.category}</p>
                <p>Price per night: ${resort.price_per_night}</p>
                <p>
                  <span
                    className={`badge text-white font-medium ${
                      resort.status === "Available"
                        ? "badge-success"
                        : "badge-error"
                    } border-2 p-3`}
                  >
                    {resort.status}
                  </span>
                </p>
                {/* <p className="font-semibold">Amenities:</p>
              <ul className="list-disc list-inside">
                {resort.amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
              <p className="font-semibold">Rooms:</p>
              <ul className="list-disc list-inside">
                {resort.rooms.map((room, index) => (
                  <li key={index}>{room.type} - {room.beds} bed(s) - ${room.price}</li>
                ))}
              </ul> */}
                <div className="card-actions justify-end">
                  <Link to={`/Resorts/${resort.id}`}>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link to={`/Resorts`} className="flex justify-center">
        <button className="btn m-4 bg-transparent border-green-500 text-green-600 hover:bg-green-500 hover:text-white ">
          See More
        </button>
      </Link>{" "}
    </div>
  );
};
export default ResortsInHome;
