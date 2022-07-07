import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'
import { FiCodepen } from 'react-icons/fi'
import './Aside.scss'

function Aside() {
  return (
    <>
      <aside orientation="right" className="sm-dsply ps-fixed-b">
        <div className="as-cont c-flex">
          <ul className="tr-hover">
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
                href="https://twitter.com/maleecky_"
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
      </aside>
      <aside orientation="left" className="sm-dsply  ps-fixed-b emasb">
        <div className="as-cont c-flex tr-hover">
          <a
            href="mailto:marickomary7@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            marickomary7@gmail.com
          </a>
        </div>
      </aside>
    </>
  )
}

export default Aside
