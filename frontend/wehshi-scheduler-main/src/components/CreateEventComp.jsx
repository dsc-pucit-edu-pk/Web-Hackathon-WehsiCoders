import React from "react";

import { useForm } from "react-hook-form";
import { TextField, Button, Input } from "@mui/material";
import axios from "axios";

import { MDBContainer, MDBCol, MDBCard, MDBCardBody } from "mdb-react-ui-kit";

const CreateEventComp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = async ({
    title,
    location,
    description,
    date,
    image,
    id,
  }) => {
    const token = localStorage.getItem("token");
    console.log("toke", token);
    try {
      const response = await axios.post(
        "http://localhost:8000/event/register/",
        {
          title: title,
          event_location: location,
          date: date,
          description: description,
          image_url: image[0].name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      if (response) {
        window.location.replace(`/eventdetail:${id}`);
      }
    } catch (error) {
      console.error(error.response);
    }
  };
  return (
    <>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBCol className="order-2 order-lg-1 d-flex flex-column align-items-center">
              <div className="border-img">
                <img
                  src="https://images.unsplash.com/photo-1464047736614-af63643285bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="none"
                />
              </div>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Join the epic quest of Events.
              </p>
              <form className="createevent" onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex flex-Column align-items-center mb-4 ">
                  {
                    <TextField
                      className="input-field"
                      label="Event Title"
                      variant="outlined"
                      {...register("title", {
                        required: "Title is required",
                        maxLength: {
                          value: 40,
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
                      className="input-field"
                      label="Event Location"
                      variant="outlined"
                      {...register("location", {
                        required: "Location is required",
                        maxLength: {
                          value: 100,
                          message: "Valid length Exceeded",
                        },
                      })}
                    />
                  }
                  <p className="errortext">{errors.Name?.message}</p>
                </div>
                <div className="d-flex flex-Column align-items-center mb-4 ">
                  <input
                    type="date"
                    className="input-field"
                    label="Event Date"
                    {...register("date", {
                      required: "Email is required",
                    })}
                  />
                  <p className="errortext">{errors.Email?.message}</p>
                </div>
                <div className="d-flex flex-Column align-items-center mb-4 ">
                  <TextField
                    className="input-field"
                    label="Description"
                    variant="outlined"
                    {...register("description", {
                      required: "Description is required",
                    })}
                  />
                  <p className="errortext">{errors.Email?.message}</p>
                </div>

                <div className="d-flex flex-Column align-items-center mb-4 ">
                  <Input
                    type="file"
                    className="input-field"
                    label="Event Banner"
                    variant="outlined"
                    {...register("image", {
                      required: "Image is required",
                    })}
                  />
                  <p className="errortext">{errors.Email?.message}</p>
                </div>

                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </form>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default CreateEventComp;
