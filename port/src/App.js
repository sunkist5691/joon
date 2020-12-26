import "./App.css";
import React from "react";
import Typical from "react-typical";
import CreationCard from "./component/CreationCard";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";

import InstagramIcon from "@material-ui/icons/Instagram";
import { Paper, Switch } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
    main: {
      secondary: "black",
    },
  });
  return (
    <>
      <div className='main'>
        <ThemeProvider theme={theme}>
          <Paper>
            {/* <div className='switch'>
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            </div> */}
            <section className='self__intro'>
              <p className='typewriter'>
                <b>I'm a </b>{" "}
                <Typical
                  loop={Infinity}
                  wrapper='b'
                  steps={[
                    "Minimalist",
                    2000,
                    "Musician",
                    2000,
                    "Developer",
                    2000,
                    "Engineer",
                    2000,
                  ]}
                />
              </p>
            </section>

            <section id='creation' className='project'>
              <div className='cards'>
                <CreationCard />
              </div>
            </section>
            <section id='contact' className='contact'>
              <IconButton href='https://www.linkedin.com/in/joon5691/'>
                <LinkedInIcon
                  className='contact__button'
                  color='primary'
                  style={{ fontSize: "50px", transition: "all 0.3s" }}
                />
              </IconButton>
              <IconButton href='https://github.com/sunkist5691'>
                <GitHubIcon
                  className='contact__button'
                  style={{
                    fontSize: "43px",
                    transition: "all 0.3s",
                    color: "black",
                  }}
                />
              </IconButton>
              <IconButton href='https://www.instagram.com/jkincali/'>
                <InstagramIcon
                  className='contact__button'
                  style={{
                    fontSize: "50px",
                    transition: "all 0.3s",
                    color: "#f50057",
                  }}
                />
              </IconButton>
            </section>
          </Paper>
        </ThemeProvider>
      </div>
    </>
  );
};

export default App;
