import { EventTable } from "../components";
import { useEffect, useState } from "react";
import axios from "axios";

const EventList = () => {
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
    <div className="container py-5">
      <EventTable arrEvent={arrayEvent} />
    </div>
  );
};

export default EventList;
