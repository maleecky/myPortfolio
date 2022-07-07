import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { FiExternalLink } from 'react-icons/fi'
import Abportfolio from '../../Assets/Images/Abportifolio.png'
import './jobs.scss'

function Jobs() {
  return (
    <section id="works" className="padspace">
      <div className="s-header">
        <h2 className="flex-np">Some Things I’ve Built</h2>
      </div>
      <div className="s-sp">
        <div className="cr-flex jcwcn">
          <div className="project-image">
            <a href="#home">
              <img
                src={Abportfolio}
                alt="Abdumalik's portifolio"
              />
            </a>
          </div>
          <div className="project-details">
            <div className="project-title">
              <h5 className="unique-text">Featured Projects</h5>
              <a href="#home">
                <h3>Personal portifolio</h3>
              </a>
            </div>
            <div className="project-info">
              <p>
                Abdumarick Omary is a front-end developer skilled in designing
                interactive systems and progressively enhanced web applications.
                Located in Arusha, Tanzania
              </p>
            </div>
            <div className="tools">
              <ul className="flex-np">
                <li>
                  <p>React</p>
                </li>
                <li>
                  <p>Gsap</p>
                </li>
                <li>
                  <p>html5</p>
                </li>
                <li>
                  <p>animate.css</p>
                </li>
                <li>
                  <p>emailJs</p>
                </li>
              </ul>
            </div>
            <div className="p-direct">
              <a
                href="http://github.com/maleecky"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
              <a href="#home" target="_blank" rel="noopener noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Jobs
