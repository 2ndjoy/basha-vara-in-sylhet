import React, { useState } from "react";

function AddService() {
  const initialFormData = {
    rooms: "",
    image: "",
    location: "",
    size: "",
    phnNumber: "",
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
      <div className="mb-4">
        <label
          htmlFor="rooms"
          className="block  text-slate-100  font-bold mb-2"
        >
          <p className="text-black">Number of room</p>
        </label>
        <input
          type="text"
          name="rooms"
          required
          value={formData.rooms}
          onChange={handleChange}
          placeholder="eg: 3 bedroom, 2 bathroom, a kitchen"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-100  leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="image"
          className="block  text-slate-100  font-bold mb-2"
        >
          <p className="text-black">Add an Image link</p>
        </label>
        <input
          type="text"
          name="image"
          required
          value={formData.image}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-100  leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      {/* Location */}
      <div className="mb-4">
        <label
          htmlFor="location"
          className="block text-slate-100  font-bold mb-2"
        >
          <p className="text-black">Location</p>
        </label>
        <select
          name="location"
          value={formData.location}
          required
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-100  leading-tight focus:outline-none focus:shadow-outline"
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
        <label htmlFor="size" className="block text-slate-100  font-bold mb-2">
          <p className="text-black">Size</p>
        </label>
        <select
          name="size"
          value={formData.size}
          required
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-100  leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select a size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="phnNumber"
          className="block  text-slate-100  font-bold mb-2"
        >
          <p className="text-black">Contact no</p>
        </label>
        <input
          type="text"
          name="phnNumber"
          required
          value={formData.phnNumber}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-100  leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default AddService;
