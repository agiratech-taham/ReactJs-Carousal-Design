import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import image3 from "./../assets/images/5.jpg";
export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={image3}
          alt="doctors"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lab A
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Velachery
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Distance - 4km
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
