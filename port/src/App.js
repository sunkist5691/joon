import './App.css'
import React from 'react'
import Typical from 'react-typical'
import CreationCard from './component/CreationCard'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import IconButton from '@material-ui/core/IconButton'
import { frontSkills, backSkills } from './skills/skill'

import InstagramIcon from '@material-ui/icons/Instagram'
import { Paper } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const App = () => {
  const [darkMode] = React.useState(false)
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
    main: {
      secondary: 'black',
    },
  })
  return (
    <>
      <div className="main">
        <ThemeProvider theme={theme}>
          <Paper>
            {/* <div className='switch'>
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            </div> */}
            <section className="self__intro">
              <p className="typewriter">
                <Typical wrapper="b" steps={["Joon's creations"]} />
              </p>
            </section>

            <section id="creation" className="project">
              <div className="cards">
                <CreationCard />
              </div>
            </section>

            <div className="main__skills">
              <div className="front">
                <h1>Frontend</h1>
                <div className="front skills">
                  {frontSkills.map((eachSkill, index) => (
                    <img
                      key={index}
                      src={eachSkill}
                      alt="frontskill categories"
                    />
                  ))}
                </div>
              </div>

              <div className="back">
                <h1>Backend</h1>
                <div className="back skills">
                  {backSkills.map((eachSkill, index) => (
                    <img
                      key={index}
                      src={eachSkill}
                      alt="backskill categories"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="contact__bot">
              <h1 className="contact__header">Contact</h1>
            </div>

            <section id="contact" className="contact">
              <IconButton href="https://www.linkedin.com/in/joon5691/">
                <LinkedInIcon
                  className="contact__button"
                  color="primary"
                  style={{ fontSize: '50px', transition: 'all 0.3s' }}
                />
              </IconButton>
              <IconButton href="https://github.com/sunkist5691">
                <GitHubIcon
                  className="contact__button"
                  style={{
                    fontSize: '43px',
                    transition: 'all 0.3s',
                    color: 'black',
                  }}
                />
              </IconButton>
              <IconButton href="https://www.instagram.com/jkincali/">
                <InstagramIcon
                  className="contact__button"
                  style={{
                    fontSize: '50px',
                    transition: 'all 0.3s',
                    color: '#f50057',
                  }}
                />
              </IconButton>
            </section>
          </Paper>
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
