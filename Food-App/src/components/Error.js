import react from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err= useRouteError();
  return (
    <div className="body-section">
      <h1>Ooops!! {err.data}</h1>
      <h2>{err.status} {err.statusText}</h2>
    </div>
  );
};

export {Error};
