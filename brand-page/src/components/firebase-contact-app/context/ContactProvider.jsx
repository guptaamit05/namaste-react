import { useContext, useState } from "react";
import MakeContext from "./MakeContext";

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState(
    localStorage.getItem("contact")
      ? JSON.parse(localStorage.getItem("contact"))
      : []
  );
  const [card, setCard] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenModel, setIsOpenModel] = useState(false);

  const saveUpdateFun = (addUpdateCard) => {
    if (isEdit) {
      const updatedContacts = contacts.map((ct) => {
        if (ct.id === addUpdateCard.id) {
          return { ...ct, ...addUpdateCard };
        }
        return ct;
      });
      setContacts(updatedContacts);
      localStorage.setItem("contact", JSON.stringify(updatedContacts));
    } else {
      const data = [...contacts, addUpdateCard];
      setContacts(data);
      localStorage.setItem("contact", JSON.stringify(data));
    }
  };
 
  const deleteContact = (id) => {
    const updatedContact = contacts.filter((ct) => ct.id !== id);
    setContacts(updatedContact);
    localStorage.setItem("contact", JSON.stringify(updatedContact));
  };

  const openAddModel = () => {
    setCard(null);
    setIsEdit(false);
    setIsOpenModel(true);
  };
  const openEditModel = (contactData) => {
    setCard(contactData);
    setIsEdit(true);
    setIsOpenModel(true);
  };

  const closeModel = () => {
    setIsOpenModel(false);
  };

  return (
    <MakeContext.Provider
      value={{
        isOpenModel,
        openEditModel,
        openAddModel,
        closeModel,
        saveUpdateFun,
        deleteContact,
        isEdit,
        setContacts,
        card,
        contacts,
      }}
    >
      {children}
    </MakeContext.Provider>
  );
};

export const useContactProvider = () => {
  return useContext(MakeContext);
};

export default ContactProvider;
