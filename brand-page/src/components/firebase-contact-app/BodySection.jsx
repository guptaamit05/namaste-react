import React from "react";
import ContactCard from "./ContactCard";
import { useContactProvider } from "./context/ContactProvider";
import NoContactFound from "./NoContactFound";
import ModelSection from "./ModelSection";

const BodySection = React.memo(() => {
  const { contacts, isOpenModel, saveUpdateFun, isEdit, closeModel, card } =
    useContactProvider();
  return (
    <>
      <div className="overflow-auto p-0 m-0  h-[43rem] flex flex-col items-center gap-3">
        {contacts.length > 0 ? (
          contacts.map((onecontact) => {
            return (
              <ContactCard
                key={onecontact.id + Math.floor(Math.random() * 2000)}
                data={onecontact}
              />
            );
          })
        ) : (
          <NoContactFound />
        )}
      </div>
      {isOpenModel && <ModelSection
        closeModel={closeModel}
        saveUpdateFun={saveUpdateFun}
        card={card}
        isEdit={isEdit}
        key={Math.floor(Math.random() * 44)}
      />}
    </>
  );
});

export default BodySection;
