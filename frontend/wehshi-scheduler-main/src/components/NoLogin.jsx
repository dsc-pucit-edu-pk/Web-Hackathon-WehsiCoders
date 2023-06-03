import React from "react";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";

const NoLogin = () => {
  return (
    <div className="no-login container py-5">
      <h1>OOPS! Looks like you're not logged in.</h1>
      <p>
        Please <i>SIGNIN/SIGNUP </i> to create the event.
      </p>
    </div>
  );
};

export default NoLogin;
