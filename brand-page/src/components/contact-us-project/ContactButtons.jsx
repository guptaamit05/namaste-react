import React, { memo } from "react";

const ContactButtons = React.memo((props) => {
  let { isEmailForm, text, floatV, btnIcon, ...restParam } = props;
  return (
    <button
      {...restParam}
      className={`flex justify-center items-center gap-2  w-full px-5 py-2 ${
        isEmailForm
          ? " border border-black w-full "
          : " lg:w-1/2 bg-black text-white w-full "
      } ${floatV ? floatV : ""} `}
    >
      {btnIcon} {text}
    </button>
  );
});

export default ContactButtons;
