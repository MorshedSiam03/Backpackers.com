import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Resorts = () => {
  const [resorts, setResorts] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/MorshedSiam03/A9-API/main/Resorts.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResorts(data);
      });
  }, []);

  return (
    <div className="flex justify-center mb-4">
      <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resorts.map((resort) => (
          <div key={resort.id} className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={resort.image} alt={resort.resort_name} className="w-full h-56 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{resort.resort_name}</h2>
              <p className="font-semibold">{resort.location}</p>
              <p><span className="font-semibold">Category: </span>{resort.category}</p>
              <p> <span className="font-semibold">Price per night:</span> Starts with ${resort.price_per_night}</p>
              <p>Status: <span className={`badge text-white font-medium ${resort.status === 'Available' ? 'badge-success' : 'badge-error'} border-2 p-3`}>{resort.status}</span></p>
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
  );
};

export default Resorts;
