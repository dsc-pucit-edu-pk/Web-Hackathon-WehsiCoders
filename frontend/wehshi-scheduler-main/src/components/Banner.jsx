import React from "react";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";

const Banner = () => {
  return (
    <div
      id="main-banner"
      className="p-5 text-center bg-image"
      style={{
        backgroundImage: "url('/main-banner.jpg')",
      }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">Welcome to Wehshi Scheduler</h1>
            <p className="mb-4">
              There are many events happening here. Join as participant or
              organizer!
            </p>
            <Link to="/eventsfeed">
              <MDBBtn className="m-2" tag="div" color="warning" size="lg">
                Attend Event
              </MDBBtn>
            </Link>
            <Link to="/createevent">
              <MDBBtn className="m-2" tag="div" color="warning" size="lg">
                Create Event
              </MDBBtn>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
