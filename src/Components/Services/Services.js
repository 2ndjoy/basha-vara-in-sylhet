import React, { useContext, useEffect, useState } from "react";
import ServiceId from "./ServiceId";
import { AuthContext } from "../../UserContext/AuthProvider";

const Services = () => {
  const [services, setServices] = useState([]);
  const { loading } = useContext(AuthContext);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);

  return (
    <div className="mx-3">
      <div className="py-5 mx-2 mb-32 lg:grid gap-3 lg:justify-center lg:grid-cols-3 md:grid-cols-2 grid justify-center">
        {loading ? (
          <p>Load</p>
        ) : (
          services.map((service) => (
            <ServiceId key={service._id} service={service}></ServiceId>
          ))
        )}
      </div>
    </div>
  );
};

export default Services;
