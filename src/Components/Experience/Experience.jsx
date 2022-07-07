import React from 'react'
import './experience.scss'

function Experience() {
  return (
    <section id="experience" className="padspace">
      <div className="s-header">
        <h2 className="flex-np">Where I’ve Worked</h2>
      </div>
      <div className="ex-details s-sp">
        <div className="job-timeline"></div>
        <div className="job-info">
          <div className="ex-header">
            <h5>
              Creative Technologist{' '}
              <span className="unique-text">
                {' '}
                <a
                  href="https://asyxtz.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @asyxGroup
                </a>
              </span>
            </h5>
            <p>June 2019 - May 2021</p>
          </div>
          <div className="ex-info">
            <ul>
              <li>
                <p>
                  Write modern, performant, maintainable code for a diverse
                  array of client and internal projects
                </p>
              </li>
              <li>
                <p>
                  {' '}
                  Work with a variety of different languages, platforms,
                  frameworks, and content management systems such as JavaScript,
                  TypeScript, Gatsby, React, Craft, WordPress, Prismic, and
                  Netlify
                </p>
              </li>
              <li>
                <p>
                  {' '}
                  Interfaced with user experience designers and other developers
                  to ensure thoughtful and coherent user experiences
                </p>
              </li>
              <li>
                <p>
                  {' '}
                  Communicate with multi-disciplinary teams of engineers,
                  designers, producers, and clients on a daily basis
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
