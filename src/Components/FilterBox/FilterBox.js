import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../UserContext/AuthProvider";
// import ResultCard from "./resultCard";
import { Link } from "react-router-dom";

function FilterBox() {
  const { user, loading } = useContext(AuthContext);
  const [dataa, setData] = useState([]);
  const initialFormData = {
    location: "",
    size: "",
  };

  // const [datas, setData] = useState([]);

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(
      `http://localhost:5000/specific?serviceLocation=${formData.location}&&size=${formData.size}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));

    // console.log(data);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* Location */}
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-slate-100-700 font-bold mb-2"
          >
            <p className="text-black">Location</p>
          </label>
          <select
            name="location"
            value={formData.location}
            required
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-100-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select a location</option>
            <option value="sylhet">Sylhet</option>
            <option value="dhaka">Dhaka</option>
            <option value="chittagong">Chittagong</option>
            <option value="barishal">Barishal</option>
            <option value="rajshahi">Rajshahi</option>
            <option value="khulna">Khulna</option>
          </select>
        </div>

        {/* Size */}
        {/* Size */}
        <div className="mb-4">
          <label
            htmlFor="size"
            className="block text-slate-100-700 font-bold mb-2"
          >
            <p className="text-black">Size</p>
          </label>
          <select
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-100-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select a size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex flex-wrap gap-2 justify-center mt-12">
        {loading ? (
          <p>Loading....</p>
        ) : dataa.length === 0 ? (
          <p>No data Available. Please search.</p>
        ) : (
          dataa.map((dat) => (
            <div>
              <div className="card card-compact w-96 bg-slate-400 text-black shadow-xl">
                <figure>
                  <img src={dat.serviceImage} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Location: {dat.serviceLocation}
                  </h2>
                  <h2 className="card-title">Size: {dat.size}</h2>
                  <h2 className="card-title">Rent fee: {dat.rentFee}</h2>
                  <h2 className="card-title">
                    Available from {dat.availability}
                  </h2>
                  <h2 className="card-title">Owner: {dat.renterName}</h2>
                  <h2 className="card-title">
                    Contact: {dat.renterPhoneNumber}
                  </h2>
                  <p>{dat.description}</p>
                  <div className="card-actions justify-end">
                    <Link to="/checkDetails">
                      <button className="btn btn-primary">Check</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default FilterBox;
