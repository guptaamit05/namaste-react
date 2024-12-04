import ContactTitle from "./ContactTitle";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="lg:mx-32 h-auto m-0 p-0">
      <ContactTitle />
      <ContactForm />
    </div>
  );
};

export default Contact;
