import React from "react";
import ServiceId from "./ServiceId";

const Services = () => {
  return (
    <div className="py-5 mx-2 mb-32 lg:grid gap-3 lg:justify-center lg:grid-cols-3 md:grid-cols-2 grid justify-center">
      <div className="mx-3">
        <ServiceId />
      </div>
      <div className="mx-3">
        <ServiceId />
      </div>
      <div className="mx-3">
        <ServiceId />
      </div>
      <div className="mx-3">
        <ServiceId />
      </div>
    </div>
  );
};

export default Services;
