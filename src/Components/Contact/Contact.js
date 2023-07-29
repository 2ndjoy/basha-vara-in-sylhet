import React from "react";
import ContactForm from "./ContactFrom";

const Contact = () => {
  return (
    <div className="my-24">
      <div className="text-black text-center mt-11">
        <h1 className="text-3xl font-bold">Get in touch</h1>
        <hr className="border-black border-3 my-3 mx-36" />
        <p>
          <br /> Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          <br /> accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab
          <br /> illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt
          <br /> explicabo.
        </p>
      </div>
      <div className="my-16">
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default Contact;
