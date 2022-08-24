import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
  {
    title: "Project 1",
    imageLink: "https://via.placeholder.com/350x150",
  },
];

export const Projects = () => {
  return (
    <Grid container spacing={2}>
      {projectArr.map((p, i) => {
        return (
          <Grid item key={p.title} xs sx={{ border: "2px black solid" }}>
            <Card sx={{ minWidth: 350 }}>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                  ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
