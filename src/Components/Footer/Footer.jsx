import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'
import { FiCodepen } from 'react-icons/fi'
import './footer.scss'
function Footer() {
  return (
    <footer id="end" className="center-aligned">
      <div className="sm-social">
        <ul className="flex-np">
          <li>
            <a
              href="https://github.com/maleecky"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FiGithub />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/maleecky"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FiInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/marick-omary"
              rel="noopener noreferrer"
              target="_blank"
            >
              {' '}
              <FiTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/marickomary/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FiLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/maleecky"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FiCodepen />
            </a>
          </li>
        </ul>
      </div>
      <a
        href="https://github.com/maleecky"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>designed & built by abdumarick omary</p>
      </a>
    </footer>
  )
}

export default Footer
