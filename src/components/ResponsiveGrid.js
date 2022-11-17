import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ActionAreaCard from "./ActionAreaCard";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
        // style={{margin:"0%"}}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item
              style={{ marginLeft: "7rem",}}
              sx={{
                maxWidth: 245,
                boxShadow: 0,
                // borderRight: "1px solid",
                // borderLeft: "1px solid",
                // borderBottom: "1px solid",
                border:"1px solid "
              }}
            >
              <ActionAreaCard />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
