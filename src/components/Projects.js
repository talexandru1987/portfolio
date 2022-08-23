import { Grid } from "@mui/material";

const projectArr = [
  {
    title: "Project 1",
    imageLink: "https://via.placeholder.com/350x150",
  },
  {
    title: "Project 1",
    imageLink: "https://via.placeholder.com/350x150",
  },
  {
    title: "Project 1",
    imageLink: "https://via.placeholder.com/350x150",
  },
  {
    title: "Project 1",
    imageLink: "https://via.placeholder.com/350x150",
  },
  {
    title: "Project 1",
    imageLink: "https://via.placeholder.com/350x150",
  },
  {
    title: "Project 1",
    imageLink: "https://via.placeholder.com/350x150",
  },
  {
    title: "Project 1",
    imageLink: "https://via.placeholder.com/350x150",
  },
  {
    title: "Project 1",
    imageLink: "https://via.placeholder.com/350x150",
  },
  {
    title: "Project 1",
    imageLink: "https://via.placeholder.com/350x150",
  },
  {
    title: "Project 1",
    imageLink: "https://via.placeholder.com/350x150",
  },
  {
    title: "Project 1",
    imageLink: "https://via.placeholder.com/350x150",
  },
];

export const Projects = () => {
  return (
    <Grid container spacing={2}>
      {projectArr.map((p, i) => {
        if (i == 0) {
          return (
            <Grid item xs={12} sx={{ border: "2px black solid" }}>
              <p>{p.title}</p>
              <img src={p.imageLink} />
            </Grid>
          );
        } else {
          return (
            <Grid item xs sx={{ border: "2px black solid" }}>
              <p>{p.title}</p>
              <img src={p.imageLink} />
            </Grid>
          );
        }
      })}
    </Grid>

    // <Grid container spacing={2}>
    //   <Grid item xs={12} sx={{ border: "2px black solid" }}>
    //     <p>(2014-2015) Quality Engineer</p>
    //   </Grid>
    //   <Grid item xs sx={{ border: "2px black solid" }}>
    //     <p>(2015-2018) Quality Inspector</p>
    //   </Grid>
    //   <Grid item xs sx={{ border: "2px black solid" }}>
    //     <p>(2018-2021) Test Engineer</p>
    //   </Grid>
    //   <Grid item xs sx={{ border: "2px black solid" }}>
    //     <p>(Current role) Robotic Process Automation Developer</p>
    //   </Grid>
    //   <Grid item xs sx={{ border: "2px black solid" }}>
    //     <p>(Current role) Robotic Process Automation Developer</p>
    //   </Grid>
    //   <Grid item xs sx={{ border: "2px black solid" }}>
    //     <p>(Current role) Robotic Process Automation Developer</p>
    //   </Grid>
    //   <Grid item xs sx={{ border: "2px black solid" }}>
    //     <p>(Current role) Robotic Process Automation Developer</p>
    //   </Grid>
    //   {/* <Grid item xs={3} sx={{ border: "2px black solid" }}>
    //     <p>(Current role) Robotic Process Automation Developer</p>
    //   </Grid> */}
    // </Grid>
  );
};
