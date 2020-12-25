import React from "react";
import "./CreationCard.css";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LiveTvIcon from "@material-ui/icons/LiveTv";

import potluck from "../utils/potluck.jpg";
import pokemon from "../utils/pokemon.jpg";
import plants from "../utils/plants.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxShadow:
      "0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)",
    maxWidth: 400,
    background: "white",
    borderRadius: "5px",
    padding: 0,
    marginTop: "3%",
  },
  media: {
    height: "48vh",
    paddingTop: "56.25%", // 16:9
  },
  button: {
    marginBottom: 10,
    color: "black",
  },
  icon: {
    width: 35,
    height: 35,
  },
}));

export default function CreationCard() {
  const classes = useStyles();

  return (
    <div className='creation__card'>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={potluck} />
        <div className='creation__IconButton'>
          <IconButton
            className={classes.button}
            href='http://potlock.netlify.app'
          >
            <LiveTvIcon className={classes.icon} />
          </IconButton>
          <IconButton
            className={classes.button}
            href='https://github.com/BW-Potluck-Planner-TT-50/frontend'
          >
            <GitHubIcon className={classes.icon} />
          </IconButton>
        </div>
      </Card>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={pokemon} />
        <div className='creation__IconButton'>
          <IconButton
            className={classes.button}
            href='https://pokemon-world.vercel.app/'
          >
            <LiveTvIcon className={classes.icon} />
          </IconButton>
          <IconButton
            className={classes.button}
            href='https://github.com/sunkist5691/Pokemon-Card-App'
          >
            <GitHubIcon className={classes.icon} />
          </IconButton>
        </div>
      </Card>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={plants} />
        <div className='creation__IconButton'>
          <IconButton
            className={classes.button}
            href='https://determined-kare-dec921.netlify.app/'
          >
            <LiveTvIcon className={classes.icon} />
          </IconButton>
          <IconButton
            className={classes.button}
            href='https://github.com/TT50-Water-My-Plants/backend'
          >
            <GitHubIcon className={classes.icon} />
          </IconButton>
        </div>
      </Card>
    </div>
  );
}
