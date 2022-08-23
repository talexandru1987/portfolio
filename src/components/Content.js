import Typography from "@mui/material/Typography";
import { Experience } from "./Experience";

import { Grid, Stack } from "@mui/material";
import { margin } from "@mui/system";
import { Projects } from "./Projects";
import { AboutMe } from "./AboutMe";

export const Content = () => {
  return (
    <Stack spacing={2} sx={{ marginTop: "90px" }}>
      <AboutMe />
    </Stack>
  );
};

{
  /* <Grid container spacing={2} sx={{ marginTop: "90px" }}>
<Grid item xs={4} sx={{ border: "2px black solid" }}>
  <h2>About Me</h2>
</Grid>
<Grid item xs={8} sx={{ border: "2px black solid", paddingTop: "0px" }}>
  <p>
    As an RPA developer my responsibilities encompass the entire Software Development Life
    Cycle for automation created using UiPath. This means liaising with different departments
    to identify suitable processes, applying lean thinking and creating the most efficient
    version of the identified processes. Robust workflows are then designed through the use of
    low code software solutions in the form of Knack and Integromat, with advanced coding
    being completed in JavaScript, MySQL and .NET
  </p>
</Grid>
<Grid item xs={4} sx={{ border: "2px black solid" }}>
  <h2>Experience</h2>
</Grid>
<Grid item xs={8} sx={{ border: "2px black solid" }}>
  <Experience />
</Grid>
<Grid item xs={4} sx={{ border: "2px black solid" }}>
  <h2>Projects</h2>
</Grid>
<Grid item xs={8} sx={{ border: "2px black solid" }}>
  <Projects />
</Grid>
</Grid> */
}
