import { Avatar, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import passwordGenerator from "../images/passwordGenerator.png";
import event from "../images/event.png";
import movie from "../images/movie.png";
import note from "../images/note.png";
import quiz from "../images/quiz.png";
import scheduler from "../images/scheduler.png";
import weather from "../images/weather.png";
import project from "../images/project.png";

const projectArr = [
  {
    title: "Password Generator",
    description:
      "A password generator that requires the user to select a set of criteria like password length or special characters and return a random password or terminates the session if the criteria ar not met",
    imageLink: passwordGenerator,
    gitHub: "https://github.com/talexandru1987/w3-password-generator.git",
    deployLink: "https://talexandru1987.github.io/password-generator/",
  },
  {
    title: "Code Quiz",
    description:
      "The application is a short quiz, when the start button is pressed the user will have 10 seconds to answer each of the quiz questions, if the answer is incorrect 5 seconds will be deducted from the timer.If the timer reaches 0 or the user finishes the question the game over page will be displayed.",
    imageLink: quiz,
    gitHub: "https://github.com/talexandru1987/w4-code-quiz.git",
    deployLink: "https://talexandru1987.github.io/code-quiz/",
  },
  {
    title: "Day Planner",
    description:
      "When the application is opened it will display the current date and color the time selections for each time block from 9Am to 5PM. Depending on the current time the time blocks will be colored grey if time in the past, red if time is current and green if time in the future. The user can set an event description in the desired text area and press the blue button located at the right side of the corresponding text area. The description will be saved in local storage and rendered every time the application is opened.",
    imageLink: scheduler,
    gitHub: "https://github.com/talexandru1987/w5-work-day-scheduler.git",
    deployLink: "https://talexandru1987.github.io/work-day-scheduler/",
  },
  {
    title: "Weather Dashboard",
    description:
      "When the user inputs the name of a city or region in the search box the application will display the current weather conditions and the forecast for the next 5 days. Recent searches are displayed under the search input field and can be selected to prompt the app in displaying the current and future weather conditions.",
    imageLink: weather,
    gitHub: "https://github.com/talexandru1987/weather-dashboard.git",
    deployLink: "https://talexandru1987.github.io/weather-dashboard/",
  },
  {
    title: "Movie Night",
    description:
      "A website where the user can search for any movie using the search bar. The user is presented with several movies which are called from the API and rendered onto the screen. The user can click on any movie card which is presented to them and then another window pops up showcasing more information about the chosen movie.",
    imageLink: movie,
    gitHub: "https://github.com/talexandru1987/group-4-project-1.git",
    deployLink: "https://talexandru1987.github.io/movie-night/",
  },
  {
    title: "Good README Generator",
    description:
      "The project is a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.",
    imageLink: "",
    gitHub: "https://github.com/talexandru1987/professional-readme-generator.git",
    deployLink: "",
  },
  {
    title: "Team Profile Generator",
    description:
      'A user can start the application by using "npm start" and will be prompted with a series of questions about the details of each team member. After the user managed to input all the details an html file will be crated/updated that will contain all the team members',
    imageLink: "",
    gitHub: " https://github.com/talexandru1987/team-profile-generator.git",
    deployLink: "",
  },
  {
    title: "Note Taker",
    description:
      'The Note Take is an application thorough witch a user can write an save notes. On load the application will render a page containing a navigation bar and a button called "Get Started". When the button is clicked the user will be redirected to a new page containing previous notes and an interface that allows for new notes to be inputted.',
    imageLink: note,
    gitHub: "https://github.com/talexandru1987/note-taker.git",
    deployLink: "https://alexandru-note-taker.herokuapp.com/",
  },
  {
    title: "Employee Management System",
    description:
      "The Employee Tracker is an interface that will help a user interact with the a database. It allows the user to view tables, add and delete information",
    imageLink: "",
    gitHub: "https://github.com/talexandru1987/employee-tracker.git",
    deployLink: "",
  },
  {
    title: "E-Commerce Back End",
    description:
      "The project implements the back end of a simple e-commerce application and provides the used with the routes and functions to create, seed the database and perform CRUD operations",
    imageLink: "",
    gitHub: "https://github.com/talexandru1987/e-commerce-back-end.git",
    deployLink: "",
  },
  {
    title: "Tech Blog",
    description: "A tech blog app using node.js, express.js and handlebars.",
    imageLink: "",
    gitHub: "https://github.com/talexandru1987/tech-blog.git",
    deployLink: "https://simple-tech-blog-app.herokuapp.com/",
  },
  {
    title: "Event Finder",
    description:
      "Are you looking for the best events in town? With What's On, discover new places, artists, foods and more with your friends and family! Enter your current location and see the latest events with a click of a button!",
    imageLink: event,
    gitHub: "https://github.com/talexandru1987/event-finder.git",
    deployLink: "https://what-is-on.herokuapp.com/",
  },
  {
    title: "Social Network API",
    description:
      "The project is social network API where users can share their thoughts, react to friends thoughts, and create a friend list.",
    imageLink: "",
    gitHub: "https://github.com/talexandru1987/social-network-api.git",
    deployLink: "",
  },
];

export const Projects = () => {
  return (
    <Grid container spacing={2} sx={{ padding: "5px" }}>
      {projectArr.map((p, i) => {
        return (
          <Grid item key={p.title} xs>
            <Card sx={{ minWidth: 350, maxWidth: 500 }}>
              <CardMedia
                component="img"
                height="140"
                image={p.imageLink ? p.imageLink : project}
                alt="project img"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {p.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={p.gitHub}>GitHub</Link>
                {p.deployLink && <Link href={p.deployLink}>Deploy Link</Link>}
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
