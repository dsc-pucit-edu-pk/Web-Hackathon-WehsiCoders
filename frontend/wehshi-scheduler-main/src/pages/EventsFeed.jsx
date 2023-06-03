import { useEffect, useState } from "react";
import { EventCard } from "../components";
import axios from "axios";
import { Link } from "react-router-dom";

const EventsFeed = () => {
  const [arrayEvent, setArrayEvent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:8000/event/list/")
        .then((response) => setArrayEvent(response.data))
        .catch((error) => console.error(error));
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <div className="container py-5">
        <div className="eventcard">
          {arrayEvent &&
            arrayEvent.map((single) => {
              return (
                <Link
                  to={
                    single.id ? `/eventdetail/${single.id}` : `/eventdetail/1`
                  }
                  key={single.id}
                >
                  <EventCard arrayEvent={single} />
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default EventsFeed;
