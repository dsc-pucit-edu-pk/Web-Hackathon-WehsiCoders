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

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = async ({
    Email,
    Password,
    firstName,
    lastName,
    phoneNumber,
  }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/register/",
        {
          email: Email,
          password: Password,
          first_name: firstName,
          last_name: lastName,
          phone_number: phoneNumber,
        }
      );

      console.log(response);
      if (response) {
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
                Sign up
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex flex-Column align-items-center mb-4 ">
                  {
                    <TextField
                      label="First Name"
                      variant="outlined"
                      {...register("firstName", {
                        required: "Name is required",
                        maxLength: {
                          value: 10,
                          message: "Valid length Exceeded",
                        },
                      })}
                    />
                  }
                  <p className="errortext">{errors.Name?.message}</p>
                </div>
                <div className="d-flex flex-Column align-items-center mb-4 ">
                  {
                    <TextField
                      label="Last Name"
                      variant="outlined"
                      {...register("lastName", {
                        required: "Name is required",
                        maxLength: {
                          value: 10,
                          message: "Valid length Exceeded",
                        },
                      })}
                    />
                  }
                  <p className="errortext">{errors.Name?.message}</p>
                </div>
                <div className="d-flex flex-Column align-items-center mb-4 ">
                  {
                    <TextField
                      label="Phone Number"
                      variant="outlined"
                      {...register("phoneNumber", {
                        required: "Number is required",
                        maxLength: {
                          value: 11,
                          message: "Valid length Exceeded",
                        },
                      })}
                    />
                  }
                  <p className="errortext">{errors.Name?.message}</p>
                </div>
                <div className="d-flex flex-Column align-items-center mb-4 ">
                  <TextField
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
                <div className="d-flex flex-Column align-items-center mb-4 ">
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    {...register("Password", {
                      required: "password is required",
                      minLength: { value: 10, message: "Not valid length" },
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
};

export default Signup;
