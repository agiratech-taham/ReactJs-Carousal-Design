import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import image3 from "./../assets/images/4.jpg";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={image3}
          alt="doctors"
          style={{ position: "relative", zIndex:"1" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lab A
          </Typography>
          <Typography variant="body2">
            <FmdGoodRoundedIcon
              style={{
                border: "1px solid",
                borderRadius: "50%",
                background: "rgb(208,208,208)",
                color: "green",
                height: "2rem",
                width: "2rem",
                // textShadow:"2rem"
              }}
            />{" "}
            Velachery
          </Typography>
          <Typography style={{ marginLeft: "1.7rem" }} variant="body2">
            Distance - 4km
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
