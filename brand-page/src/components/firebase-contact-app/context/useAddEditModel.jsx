import React, { useState } from "react";

const useAddEditModel = () => {
  const storedContacts = localStorage.getItem("contact");
  const [contacts, setContacts] = useState(
    storedContacts ? JSON.parse(storedContacts) : []
  );
  const [isOpenModel, setIsOpenModel] = useState(false);

  const addContact = (newcontact) => {
    const cc = [...contacts, newcontact];
    localStorage.setItem("contact", JSON.stringify(cc));
    setContacts(cc);
  };

  const updateContact = (id, updatedData) => {
    const updatedContacts = contacts.map((ct) => {
      if (ct.id === id) {
        return {...ct , ...updatedData}
      }
      return ct;
    });
    setContacts(updatedContacts);
    localStorage.setItem('contact', JSON.stringify(updatedContacts))
  };

  const deleteContact = (id) => {
    const updatedContact = contacts.filter((ct) => ct.id !== id);
    setContacts(updatedContact);
    localStorage.setItem('contact', JSON.stringify(updatedContact))

  };

  const openModel = () => {
    setIsOpenModel(true);
  };
  const closeModel = () => {
    setIsOpenModel(false);
  };

  return {
    openModel,
    closeModel,
    addContact,
    updateContact,
    deleteContact,
    isOpenModel,
    contacts,
  };
};
export default useAddEditModel;
