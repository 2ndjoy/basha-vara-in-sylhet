import React from "react";

const FilterBox = () => {
  return (
    <div className="m-5 mt-12">
      <div className="grid justify-center">
        <select className="select w-full max-w-xs bg-slate-200 text-black">
          <option disabled selected>
            Location
          </option>
          <option>Dhaka</option>
          <option>Sylhet</option>
          <option>Barishal</option>
          <option>Khulna</option>
          <option>Chittagong</option>
        </select>
        <select className="select w-full max-w-xs bg-slate-200 text-black">
          <option disabled selected>
            Size
          </option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
        <button className="btn mt-2 btn-secondary">Search</button>
      </div>
    </div>
  );
};

export default FilterBox;
