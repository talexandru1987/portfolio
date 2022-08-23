import { Grid } from "@mui/material";

export const Experience = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3} sx={{ borderRight: "2px black solid" }}>
        <p>(2014-2015) Quality Engineer</p>
      </Grid>
      <Grid item xs={3} sx={{ borderRight: "2px black solid" }}>
        <p>(2015-2018) Quality Inspector</p>
      </Grid>
      <Grid item xs={3} sx={{ borderRight: "2px black solid" }}>
        <p>(2018-2021) Test Engineer</p>
      </Grid>
      <Grid item xs={3} sx={{ borderRight: "2px black solid" }}>
        <p>(Current role) Robotic Process Automation Developer</p>
      </Grid>
    </Grid>
  );
};
