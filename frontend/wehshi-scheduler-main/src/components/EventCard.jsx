import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const EventCard = (arrayEvent) => {
  const entry = arrayEvent.arrayEvent;
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE="
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h6">
          {entry.title}
        </Typography>
        <Typography gutterBottom variant="" component="p">
          {entry.date}
        </Typography>
        <Typography gutterBottom variant="h5" component="h6">
          {entry.event_location}
        </Typography>
        <Typography gutterBottom variant="" component="p">
          {entry.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;
