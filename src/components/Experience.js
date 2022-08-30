import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const experienceArr = [
  {
    title: "Quality Engineer",
    description:
      "Oversaw quality inspection of administration, transport, and installation of Accropodes (concrete blocks) Determined quality metrics for all manufacturing procedures by reviewing and following drawings templates related to specific placements. Crafted progress report after data analysis on daily basis. Analysed data to effectively coordinate installation of new systems and modification of existing systems.",
    duration: "2014-2015",
    company: "Van Oord",
  },
  {
    title: "Quality Inspector",
    description:
      "Maintained product quality by inspecting incoming materials by confirming specifications, conducting visual and measurement tests, and rejecting unacceptable materials. Documented inspection results by completing reports and logs, summarises re-work and waste, and inputs data into quality database. Collaborated with clients and cross-functional departments to communicate project statuses and proposals",
    duration: "2015-2018",
    company: "Plastic Omnium",
  },
  {
    title: "Test Engineer",
    description:
      "Managed internal and UKAS calibration of equipment and oversee calibration registers. Script test plans and create test cases for product in compliance with ISO 17025 standard and ISO 9001. conduct tests on prototype samples provided by various windows and doors manufacturers using BS 6375-1(weather testing), BS 6375-2, BS 6375-3(basic security), PAS24(enhanced security), EN1191 (cycle testing). Craft final QA and test procedures for the quality technicians. Maintain contact with customers and area sales managers, issue official UKAS reports and managed all expenses for the Test House.",
    duration: "2018-2021",
    company: "ERA Home Security",
  },
  {
    title: "Robotic Process Automation Developer",
    description:
      "As an RPA developer for Robins & Day my responsibilities encompass the entire Software Development Life Cycle for automation created using UiPath. This means liaising with different departments to identify suitable processes, applying lean thinking and creating the most efficient version of the identified processes. Robust workflows are then designed through the use of low code software solutions in the form of Knack and Integromat, with advanced coding being completed in JavaScript. This then leads up to testing using techniques such as Black Box and continuous improvement being carried out for all the live automation",
    duration: "2021- present",
    company: "Stellantis",
  },
];

export const Experience = () => {
  return (
    <Grid container spacing={2} sx={{ padding: "5px" }}>
      {experienceArr.map((p, i) => {
        return (
          <Grid item key={p.title} xs>
            <Card sx={{ minWidth: 150, maxWidth: 500 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {p.title}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {p.duration}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {p.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

{
  /* <Grid container spacing={2}>
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
      </Grid> */
}
