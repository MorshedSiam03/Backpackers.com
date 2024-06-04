import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HotelsInHome = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/MorshedSiam03/A9-API/main/Hotels.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHotels(data);
      });
  }, []);
  const limitedHotels = hotels.slice(0, 4); // Limit to 6 hotels

  return (
    <div>
      <div className="flex justify-center mx-2 mb-4">
        <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {limitedHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="card card-compact bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={hotel.image}
                  alt="Hotel"
                  className="w-[400px] h-56 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="font-bold text-2xl">{hotel.hotel_title}</h2>
                <p className="font-medium mt-[-10px]">{hotel.location}</p>
                  <p><span className="font-semibold">Category:</span> {hotel.category}</p>
                  <p><span className="font-semibold">Price:</span> Starts with ${hotel.price}</p>
                <p
                  className={`badge text-white font-medium ${
                    hotel.status === "Available"
                      ? "badge-success"
                      : "badge-error"
                  } border-2 p-3`}
                >
                  {hotel.status}
                </p>
                <div className="card-actions justify-end">
                  <Link to={`/Hotels/${hotel.id}`}>
                  <button className=" btn btn-primary">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link to={`/Hotels`} className="flex justify-center">
        <button className="btn m-4 bg-transparent border-green-500 text-green-600 hover:bg-green-500 hover:text-white ">
          See More
        </button>
      </Link>{" "}
    </div>
  );
};

export default HotelsInHome;
