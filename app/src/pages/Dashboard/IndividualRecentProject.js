import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { CardActionArea } from "@material-ui/core";
import StyledLink from "../../components/StyledLink/StyledLink";
const useStyles = makeStyles((theme) => ({
  root: {
    border: "2px solid #F4976C",
    marginTop: "30px",
    marginBottom: "10px",
    borderRadius: "10px",
    filter: "drop-shadow(0px 15px 60px rgba(0, 0, 0, 0.1))",
    width: "350px",
    [theme.breakpoints.between("sm", "md")]: {
      width: "300px",
    },
  },
  cardTitle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  desc: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  InnerCard: {
    color: "#F4976C",
    border: "1px solid #F4976C",
    textAlign: "center",
  },
  cardAction: {
    maxHeight: "15px",
    height: "43px",
    color: "white",
    backgroundColor: "#F4976C",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));
function IndividualRecentProject({ project }) {
  const classes = useStyles();
  const linkToInfo = "/project/"+project.title;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardActionArea >
          <StyledLink to={linkToInfo}>
          <CardContent>
          <Typography className={classes.cardTitle}>{project.title}</Typography>
          <div className={classes.desc}>{project.desc}</div>
          <Grid container spacing={1}>
            {project.techStack.map((tech) => {
              return ( 
                <Grid item md={3}>
                  <Card className={classes.InnerCard}>{tech}</Card>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
          </StyledLink>
        </CardActionArea>
        <CardActions className={classes.cardAction}>
              <Typography style={{ fontWeight: "bold" }}>Actions</Typography>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default IndividualRecentProject;
