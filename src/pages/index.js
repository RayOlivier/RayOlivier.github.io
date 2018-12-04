import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

import gitChatDM from '../assets/images/gitChat-DMCrop.jpg'
import HQLanding from '../assets/images/HQLanding.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'Ray Olivier'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>
                  Lorem ipsum dolor adipiscing
                  <br />
                  amet dolor consequat
                </h2>
              </header>
              <p>
                Adipiscing a commodo ante nunc accumsan et interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis sed volutpat
                aclacus nascetur ac non. Lorem curae et ante amet sapien sed
                tempus adipiscing id accumsan.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic01} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <ul className="major-icons">
                <li>
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
                </li>
              </ul>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>
                  Lorem ipsum dolor adipiscing
                  <br />
                  amet dolor consequat
                </h2>
              </header>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                Adipiscing id accumsan adipiscing ipsum.
              </p>
              <p>
                Blandit faucibus proin. Ac aliquam integer adipiscing enim non
                praesent vis commodo nunc phasellus cubilia ac risus accumsan.
                Accumsan blandit. Lobortis phasellus non lobortis dit varius mi
                varius accumsan lobortis. Blandit ante aliquam lacinia lorem
                lobortis semper morbi col faucibus vitae integer placerat
                accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing
                curae consequat feugiat etiam dolore.
              </p>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                Adipiscing id accumsan adipiscing ipsum.
              </p>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Projects</h2>
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
                <li>
                  <a target="_blank" href="#" className="button">
                    X
                  </a>
                </li>
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
