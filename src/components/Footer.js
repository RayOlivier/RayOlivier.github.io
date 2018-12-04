import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        {/* <ul className="icons">
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
        </ul> */}

        {/* <ul className="copyright">
                    <li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul> */}
        <section
          style={{ background: 'rgba(35, 35, 35, 0.8)', padding: '2vh' }}
          id="four"
          className=" style2 special"
        >
          <div className="container">
            <header className="major">
              <h2>Contact</h2>
            </header>
            <p>Email: rayolivier@outlook.com</p>
            {/* <ul className="actions uniform">
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
            </ul> */}
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
              {/* <li>
            <a href="#" className="icon alt fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li> */}
              {/* <li>
            <a href="#" className="icon alt fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li> */}
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
        </section>
      </section>
    )
  }
}

export default Footer
