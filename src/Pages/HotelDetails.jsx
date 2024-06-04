import { useParams } from "react-router-dom";
import HotelsInHome from "./HotelsInHome";
import {
  getSavedHotels,
  getWishlist,
  saveHotels,
  saveWishlists,
} from "../Utility";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const HotelDetails = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/MorshedSiam03/A9-API/main/Hotels.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHotels(data);
      });
  }, []);
  console.log(hotels);

  const { id } = useParams();
  const hotelId = parseInt(id);
  const hotel = hotels.find((hotel) => hotel.id === hotelId);
  console.log(hotel);

  if (!hotel) {
    return <p>Hotel not found</p>;
  }

  const {
    image,
    hotel_title,
    category,
    description,
    price,
    status,
    room,
    location,
    facilities,
  } = hotel;
  const savedHotels = getSavedHotels();
  const savedWishlist = getWishlist();

  const handleBooking = (hotel) => {
    const isExistingWishlist = savedHotels.find(
      (hotels) => hotels.id === hotel.id
    );
    if (isExistingWishlist) {
      return toast.error("Already Saved In Wishlist");
    }
    saveHotels(hotel);
    toast.success("Hotel Booked Successfully");
  };

  const handleWishlist = (hotel) => {
    const isExistingBooking = savedWishlist.find(
      (hotels) => hotels.id === hotel.id
    );
    if (isExistingBooking) {
      return toast.error("You Already Booked This Hotel");
    }
    saveWishlists(hotel);
    toast.success("Hotel Added to Wishlist");
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4 m-2">
        <div className="col-span-3">
          <figure>
            <img
              src={image}
              alt={hotel_title}
              className="rounded-lg lg:w-[800px]"
            />
          </figure>
        </div>
        <div className="col-span-2 space-y-2 mx-3">
          <p className="text-4xl font-semibold">{hotel_title}</p>
          <p className="text-lg">{location}</p>
          <p className="text-lg">{description}</p>
          <p className="text-lg">
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Facilities:</span> {facilities}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Price:</span> ${price}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Status:</span> {status}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Room:</span> {room}
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => handleBooking(hotel)}
              className="btn font-semibold bg-transparent border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
            >
              Book Now
            </button>
            <button
              onClick={() => handleWishlist(hotel)}
              className="btn font-semibold bg-transparent border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white"
            >
              Add Wishlist
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-4xl my-3 font-bold">More Hotels</h1>
      <HotelsInHome></HotelsInHome>
    </div>
  );
};

export default HotelDetails;
