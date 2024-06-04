import { useEffect, useState } from "react";
import { getWishlist } from "../Utility";
import { Link } from "react-router-dom";

const MyWishlists = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const storeHotels = getWishlist;
    setHotels(storeHotels);
  }, []);
  return (
    <>
      <div>
        {hotels.map((hotel) => (
          <div key={hotel.id}>
            <div className="card card-compact md:w-[80%] lg:w-[60%] mx-auto my-4 bg-base-100 shadow-xl">
              <div className="md:flex">
                <div>
                  <figure>
                    <img src={hotel.image} alt="hotel" className="md:w-80" />
                  </figure>
                </div>
                <div className="card-body">
                  <h2 className="font-bold text-2xl">{hotel.hotel_title}</h2>
                  <p className="mt-[-8px] font-medium">{hotel.location}</p>
                  <p>Category: {hotel.category}</p>
                  <p>Room: {hotel.room}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/Hotels/${hotel.id}`}>
                      <button className="btn btn-primary">View Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyWishlists;
