import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button } from "@mui/material";

const EventDetail = () => {
  const { id } = useParams();

  const [arrayEvent, setArrayEvent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:8000/event/detail/${id}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setArrayEvent(response);
    };
    fetchData().catch(console.error);
  }, []);

  const datas = arrayEvent?.data?.event;
  if (datas) {
    return (
      <div className="container">
        <div className="bg-color"></div>

        <div className="detail-wrapper py-5">
          <div className="left-detail">
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1464047736614-af63643285bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt=""
              />
            </div>
            <div className="description">
              <h4>{datas.title}</h4>
              <p>{datas.description}</p>
              <h4>Challenges and Points</h4>
              <p>
                Earn experience points for yourself by completing our challenges
                throughout GHW. Challenges aren’t the only way to earn points.
                You can also receive a point each time you check in for a live
                session, so the more you attend, the more points you’ll rack up.
                They can be as simple as posting on your social media or as
                advanced as building a project and creating a full demo video
                for it. We’ll leave it to you to choose which challenges you
                want to take on. Feel free to work collaboratively with others
                on these.
              </p>
            </div>
          </div>
          <div className="right-detail">
            <h4 className="title">{datas.title}</h4>
            <div className="event-date">
              <i className="location-icon fa-solid fa-clock"></i>
              {datas.date}
            </div>
            <div className="event-type">
              <i className="location-icon fa-sharp fa-solid fa-location-dot"></i>
              {datas.event_location}
            </div>

            <form>
              <input
                type="submit"
                className="registernow"
                color="warning"
                value="Register Now"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default EventDetail;
