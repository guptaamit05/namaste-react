import React, { useState } from "react";
import ContactButtons from "./ContactButtons";
import { MdMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const ContactForm = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")
  const FormSubmit = (event) =>{
    event.preventDefault();
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setMsg(event.target[2].value)
  }
  return (
    <>
      <div className="flex flex-col md:flex-row md:w-auto w-screen  ">
        <div className="lg:w-1/2 felx justify-center">
          <img
            className="w-full h-auto"
            src="./images/Service 24_7-pana 1.svg"
            alt="contact us img"
          />
        </div>
        <div className="w-screen md:w-1/2 pt-10 flex-col flex gap-6 justify-start items-start p-5">
          <div className="w-full flex lg:flex-row flex-col  gap-2">
            <ContactButtons text="VIA SUPPORT CART" btnIcon={<MdMessage />} />
            <ContactButtons text="VIA CALL" btnIcon={<IoCallOutline />} />
          </div>
          <ContactButtons
            text="VIA EMAIL FORM"
            isEmailForm={true}
            btnIcon={<MdMessage />}
          />

          <form onSubmit={FormSubmit}>
            <input
              className="border border-black w-full p-3 mb-2"
              type="text"
              placeholder="Name"
            />
            <input
              type="email"
              className="border border-black w-full p-3 mb-2"
              placeholder="Email"
            />
            <textarea
              placeholder="Message..."
              className="border border-black w-full p-3 mb-2"
              rows="4"
              cols="3"
            />
            <ContactButtons  text="Submit" floatV="float-right" />
          </form>
        </div>
      </div>
      <div>
      
       
      </div>
    </>
  );
};

export default ContactForm;
