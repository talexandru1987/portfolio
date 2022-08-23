import { Stack, Grid } from "@mui/material";
import { Container } from "@mui/system";
import profileImg from "../images/profile.jpg";
import "../App.css";

export const AboutMe = () => {
  return (
    <Container>
      <Stack sx={{ alignItems: "center" }}>
        <h2>Automation Developer</h2>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{ border: "2px black solid" }}>
          <div className="about-me-description">
            <p>
              Robotic Process Automation (RPA) Developer leveraging my background in Quality
              Engineering to create robust and sustainable software solutions. I recently earned a
              degree in Software Engineering from The Open University and a Certificate in Full
              Stack Web Development from the University of Birmingham. My developed skills
              encompass, UiPath, Java, JavaScript, React, MySQL, Python, Node.js, Html, CSS, Agile
              development and experience with the Software Development Life Cycle. I am known as an
              innovative problem-solver passionate about automating tasks, a team player and a
              person with a high accountability standard. I aim to become an expert RPA Developer
              who will help free people from tedious repetitive tasks and create a more engaging
              work environment for everyone.
            </p>
          </div>
        </Grid>
        <Grid item xs={6} sx={{ border: "2px black solid" }}>
          <Stack>
            <img src={profileImg} />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
