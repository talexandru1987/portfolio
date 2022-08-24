import { Stack } from "@mui/material";

import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { AboutMe } from "./AboutMe";
import { ContactForm } from "./ContactForm";

export const Content = ({ currentPage }) => {
  return (
    <Stack spacing={2} sx={{ marginTop: "90px", marginBottom: "101px" }}>
      {currentPage === "projects" && <Projects />}
      {currentPage === "experience" && <Experience />}
      {currentPage === "aboutMe" && <AboutMe />}
      {currentPage === "contactForm" && <ContactForm />}
    </Stack>
  );
};
