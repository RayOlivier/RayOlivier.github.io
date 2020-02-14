import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

import jsIcon from '../assets/images/js_icon.png'
import angularIcon from '../assets/images/angularIcon.png'
import rxjsIcon from '../assets/images/rxjsIcon.png'
import reactIcon from '../assets/images/reactIcon.png'
import htmlIcon from '../assets/images/htmlIcon.png'
import cssIcon from '../assets/images/cssIcon.png'
import gitIcon from '../assets/images/gitIcon.png'
import sassIcon from '../assets/images/sassIcon.png'
import sqlIcon from '../assets/images/sqlIcon.png'
import nodeIcon from '../assets/images/nodeIcon.png'
import reduxIcon from '../assets/images/reduxIcon.png'
import firebaseIcon from '../assets/images/firebaseIcon.png'


import gitChatDM from '../assets/images/gitChat-DMCrop.jpg'
import HQLanding from '../assets/images/HQLanding.jpg'
import linkedInPic from '../assets/images/linkedInPic.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'Ray Olivier'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <span className="image fit-me">
                <img
                  style={{ borderRadius: '50%', height: '50%' }}
                  src={linkedInPic}
                  alt=""
                />
              </span>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>About Me</h2>
              </header>
              <p>
                I'm a full-stack developer with professional experience building frontend solutions at a large scale. I've been working as a UI developer at projekt202 since January 2019.

                Outside of code, I'm just a dog dad with a passion for video games and podcasts.
              </p>
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-12">
              <ul className="major-icons">
                {/* <li>
                  <span className="icon style1 major fa-code" />
                </li>
                <li>
                  <span className="icon style2 major fa-github" />
                </li>
                <li>
                  <span className="icon style3 major fa-code-fork" />
                </li>
                <li>
                  <span className="icon style4 major fa-css3" />
                </li>
                <li>
                  <span className="icon style5 major fa-coffee" />
                </li>
                <li>
                  <span className="icon style6 major fa-gamepad" />
                </li> */}

                <header
                  style={{ width: '100%', textAlign: 'center' }}
                  className="major"
                >
                  <h2>Skills</h2>
                  <p>JavaScript, Angular, React, SCSS, HTML, RxJS, ThreeJS, SQL, Node, Express, Firebase, and more.</p>
                </header>

                <li>
                  <div className="icon image fit">
                    <img
                      className="img"
                      src={jsIcon}
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="icon image fit">
                    <img
                      className="img"
                      src={reactIcon}
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="icon image fit">
                    <img
                      className="img"
                      src={angularIcon}
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="icon image fit">
                    <img
                      className="img"
                      src={gitIcon}
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="icon image fit">
                    <img
                      className="img"
                      src={rxjsIcon}
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="icon image fit">
                    <img
                      className="img"
                      src={htmlIcon}
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="icon image fit">
                    <img
                      className="img"
                      src={cssIcon}
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="icon image fit">
                    <img
                      className="img"
                      src={reduxIcon}
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="icon image fit">
                    <img
                      className="img"
                      src={sassIcon}
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="icon image fit">
                    <img
                      className="img"
                      src={sqlIcon}
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="icon image fit">
                    <img
                      className="img"
                      src={nodeIcon}
                      alt=""
                    />
                  </div>
                </li>
                <li>
                  <div className="icon image fit">
                    <img
                      className="img"
                      src={firebaseIcon}
                      alt=""
                    />
                  </div>
                </li>
              </ul>
            </div>
            {/* <div className="col-6">
              <header className="major">
                <h2>Technologies</h2>
              </header>
              <p>
                I have a passion for learning new technology. So far, I have
                experience with:
              </p>
              <h4>
                JavaScript ES6 | React | Redux | Node.js | PostgreSQL | Firebase
                | Express | npm | Git | SCSS | Moment.js
              </h4>
              <header className="major">
                <h2>About Me</h2>
              </header>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                Adipiscing id accumsan adipiscing ipsum.
              </p>
            </div> */}
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>DevMountain Projects</h2>
              </header>
              <p>My work so far.</p>
            </div>

            <div className="col-6">
              <span className="image fit">
                <img src={gitChatDM} alt="" />
              </span>
              <h3>gitChat</h3>
              <p>
                An instant messaging app inspired by Discord and Slack <br />{' '}
                Team Developed Web App <br />
                Technologies implemented: React | Firebase | SCSS | moment.js |
                React-Router | Markdown
              </p>
              <ul className="actions">
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/gitchat-app/gitchat"
                    className="button"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://gitchat-app.firebaseapp.com "
                    className="button"
                  >
                    Live Site
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={HQLanding} alt="" />
              </span>
              <h3>HealthQueery</h3>
              <p>
                A curation, search, and review site for LGBTQ+ inclusive
                healthcare <br />A Personally Developed Project <br />
                Technologies implemented: React | Redux | Node | Express |
                PostgreSQL | Google Maps API | Massive | SCSS
              </p>
              <ul className="actions">
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/RayOlivier/healthQueery "
                    className="button"
                  >
                    Github
                  </a>
                </li>
                {/* <li>
                  <a
                    target="_blank"
                    href="http://healthqueery.com/"
                    className="button"
                  >
                    Live Site
                  </a>
                </li> */}
              </ul>
            </div>
            {/* <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Magna feugiat lorem</h3>
              <p>
                Adipiscing a commodo ante nunc magna lorem et interdum mi ante
                nunc lobortis non amet vis sed volutpat et nascetur.
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </section>

        {/* <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Contact</h2>
            </header>
            <p>Email: rayolivier@outlook.com</p>
            <ul className="actions uniform">
              <li>
                <a href="#" className="button special">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="#" className="button">
                  Learn More
                </a>
              </li>
            </ul>
            <ul className="icons">
              <li>
                <a
                  href="https://www.linkedin.com/in/rayolivier/"
                  className="icon alt fa-linkedin"
                  target="_blank"
                >
                  <span className="label">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon alt fa-facebook">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon alt fa-instagram">
                  <span className="label">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/RayOlivier/"
                  className="icon alt fas fa-github"
                  target="_blank"
                >
                  <span className="label">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:rayolivier@outlook.com"
                  className="icon alt fa-envelope"
                  target="_blank"
                >
                  <span className="label">Email: rayolivier@outlook.com</span>
                </a>
              </li>
            </ul>
          </div>
        </section> */}
      </Layout>
    )
  }
}

export default Homepage
