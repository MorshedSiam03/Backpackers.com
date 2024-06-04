import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/MorshedSiam03/A9-API/main/Hotels.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHotels(data);
      });
  }, []);
  console.log(hotels);
  return (
    <div className="flex justify-center mb-4">
      <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={hotel.image}
                alt="Hotel"
                className="w-[400px] h-56 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-2xl">{hotel.hotel_title}</h2>
              <p className="mt-[-10px] font-medium">{hotel.location}</p>
              
                <p><span className="font-semibold">Category:</span> {hotel.category}</p>
                <p> <span className="font-semibold">Room:</span> {hotel.room}</p>
                <p> <span className="font-semibold">Price:</span> Starts with ${hotel.price}</p>
              
              <p className={`badge text-white font-medium ${hotel.status === 'Available' ? 'badge-success' : 'badge-error'} border-2 p-3`}>
                {hotel.status}
              </p>
              <div className="card-actions justify-end">
                <Link to={`/Hotels/${hotel.id}`}>
                <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
