import React from "react";
import { Link } from "react-router-dom";

const ServiceId = ({ service }) => {
  const {
    _id,
    renterName,
    rentFee,
    availability,
    size,
    description,
    serviceImage,
    renterPhoneNumber,
    serviceLocation,
  } = service;
  console.log(_id);
  return (
    <div>
      <div className="card card-compact w-96 bg-slate-400 text-black shadow-xl">
        <figure>
          <img src={serviceImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Location: {serviceLocation}</h2>
          <h2 className="card-title">Size: {size}</h2>
          <h2 className="card-title">Rent fee: {rentFee}</h2>
          <h2 className="card-title">Available from {availability}</h2>
          <h2 className="card-title">Owner: {renterName}</h2>
          <h2 className="card-title">Contact: {renterPhoneNumber}</h2>
          <p>{description}</p>
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
