import React from "react";
import { Link } from "react-router-dom";

const ServiceId = () => {
  return (
    <div>
      <div className="card card-compact w-96 bg-slate-400 text-black shadow-xl">
        <figure>
          <img
            src="https://images.pexels.com/photos/2816284/pexels-photo-2816284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link to="/checkDetails">
              <button className="btn btn-primary">Check</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceId;
