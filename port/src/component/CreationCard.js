import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import CodeIcon from "@material-ui/icons/Code";
import LaunchRoundedIcon from "@material-ui/icons/LaunchRounded";

import potluck from "../utils/potluck.jpg";
import pokemon from "../utils/pokemon.jpg";
import plants from "../utils/plants.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxShadow:
      "0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)",
    maxWidth: 480,
    borderRadius: "5px",
    margin: "5% 1% 0 1%",
    transition: "all 0.3s",

    "&:hover": {
      transform: "scale(1.04)",
    },
    /* experiment */
    position: "relative",
  },
  media: {
    minHeight: "40vh",
    paddingTop: "56.25%", // 16:9
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    color: "black",
    transition: "all 0.3s",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  icon: {
    width: 35,
    height: 35,
  },
  iconTwo: {
    width: 45,
    height: 45,
  },
}));

export default function CreationCard() {
  const classes = useStyles();

  return (
    <div className='creation__card'>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={potluck} />
        <div className='description description__blur'>
          <h1>Potluck</h1>
          <h2>Bring your favorite food to the party!</h2>
          <p>
            Event host create potluck event and send an invite code through
            email to people who like to attend and bring a certain food
          </p>
        </div>
        <div className='creation__IconButton'>
          <IconButton
            className={classes.button}
            href='https://potluckapp.netlify.app'
          >
            <LaunchRoundedIcon className={classes.icon} />
          </IconButton>
          <IconButton
            className={classes.button}
            href='https://github.com/BW-Potluck-Planner-TT-50/frontend'
          >
            <CodeIcon className={classes.iconTwo} />
          </IconButton>
        </div>
      </Card>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={pokemon} />
        <div className='description description__blur'>
          <h1>Pokemon</h1>
          <h2>Search your favorite pokemon cards!</h2>
          <p>
            Write any name of pokemon on the search bar to see what type of
            pokemon cards you can retrieve
          </p>
        </div>
        <div className='creation__IconButton'>
          <IconButton
            className={classes.button}
            href='https://pokemon-world.vercel.app/'
          >
            <LaunchRoundedIcon className={classes.icon} />
          </IconButton>
          <IconButton
            className={classes.button}
            href='https://github.com/sunkist5691/Pokemon-Card-App'
          >
            <CodeIcon className={classes.iconTwo} />
          </IconButton>
        </div>
      </Card>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={plants} />
        <div className='description description__blur'>
          <h1>Water My Plants</h1>
          <h2>Don't forget your lovely plants to get water!</h2>
          <p>
            Create your own plant information in your dashboard and set a
            schedule when to give water to your plant
          </p>
        </div>
        <div className='creation__IconButton'>
          <IconButton
            className={classes.button}
            href='https://determined-kare-dec921.netlify.app/'
          >
            <LaunchRoundedIcon className={classes.icon} />
          </IconButton>
          <IconButton
            className={classes.button}
            href='https://github.com/TT50-Water-My-Plants/backend'
          >
            <CodeIcon className={classes.iconTwo} />
          </IconButton>
        </div>
      </Card>
    </div>
  );
}
