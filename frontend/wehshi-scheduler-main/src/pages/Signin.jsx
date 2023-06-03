import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

import axios from "axios";

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = async ({ Email, Password }) => {
    try {
      const response = await axios.post("http://localhost:8000/auth/login/", {
        email: Email,
        password: Password,
      });

      if (response) {
        const token = response.data.access;
        localStorage.setItem("token", token);
        window.location.replace("/events");
      }
    } catch (error) {
      console.error(error.response);
    }
  };
  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign IN
              </p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex flex-column align-items-center mb-4 ">
                  <TextField
                    id="outlined-basic2"
                    label="Email"
                    variant="outlined"
                    {...register("Email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        message: "Not valid pattern",
                      },
                    })}
                  />
                  <p className="errortext">{errors.Email?.message}</p>
                </div>
                <div className="d-flex flex-column align-items-center mb-4 ">
                  <TextField
                    id="outlined-basic3"
                    label="Password"
                    variant="outlined"
                    type="password"
                    {...register("Password", {
                      required: "password is required",
                      minLength: { value: 10, message: "Not valid lenght" },
                    })}
                  />
                  <p className="errortext">{errors.Password?.message}</p>
                </div>

                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </form>
            </MDBCol>
            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signin;
