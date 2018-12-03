import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
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
        {/* <ul className="copyright">
                    <li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul> */}
      </section>
    )
  }
}

export default Footer
