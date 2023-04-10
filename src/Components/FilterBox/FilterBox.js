import React, { useState } from "react";

function FilterBox() {
  const initialFormData = {
    location: "",
    size: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // You can replace this with your own submit logic
    resetForm();
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
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-100-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select a location</option>
          <option value="sylhet">Sylhet</option>
          <option value="dhaka">Dhaka</option>
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
          Add
        </button>
      </div>
    </form>
  );
}

export default FilterBox;