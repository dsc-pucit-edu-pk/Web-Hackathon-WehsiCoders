import React from "react";
import { NoLogin, CreateEventComp } from "../components";

const CreateEvent = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      {token ? (
        <div className="container py-5">
          <CreateEventComp />
        </div>
      ) : (
        <NoLogin />
      )}
    </>
  );
};

export default CreateEvent;
