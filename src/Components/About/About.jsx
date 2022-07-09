import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { BsPlayFill } from 'react-icons/bs'
import {faJsSquare, faCss3, faHtml5, faPython,faReact,faGitAlt} from '@fortawesome/free-brands-svg-icons'
import './about.scss'
function About() {
  return (
    <section id="about"className="padspace">
      <div className="s-header">
        <h2 className="flex-np">About Me</h2>
      </div>
      <div className="s-sp">
        <div className="p-info cr-flex">
          <div className="p-details">
            <p>
              {" "}
              Hello my name is Abdumarick Omary.I am happy we met, i am a web
              developer who have been in the business since the dawn of the
              internet. (Yep-that long).
            </p>
            <p>
              I am really enjoying creating projects that stand out on the
              internet, and I've had the privilege of helping different
              companies, start-up and huge advertising agency turns their vision
              into actions that lives on internet. My main focus is building
              accessible products that will improve digital experiences of
              different people
            </p>

            <p>
              I genuinely cares about your input and will create what you are
              conjuring up in your imagination. Not only will your website or
              app be aesthetically pleasing, but it will be efficient and fast
              and save your business time
            </p>
            <p>
              Here are a few technologies i've been working with recently
              <div className="flex-np">
                <div className="col">
                  <li>
                    <div className="p-icon">
                      <BsPlayFill/>
                    </div>
                    <p>Javascript(ES6+)</p>
                  </li>
                  <li>
                    <div className="p-icon">
                      <BsPlayFill/>
                    </div>
                    <p>React</p>
                  </li>
                  <li>
                    <div className="p-icon">
                      <BsPlayFill/>
                    </div>
                    <p>Php</p>
                  </li>
                </div>
                <div className="col">
                  <li>
                    <div className="p-icon">
                      <BsPlayFill/>
                    </div>
                    <p>Css3</p>
                  </li>
                  <li>
                    <div className="p-icon">
                      <BsPlayFill/>
                    </div>
                    <p>Python</p>
                  </li>
                  <li>
                    <div className="p-icon">
                      <BsPlayFill/>
                    </div>
                    <p>html5</p>
                  </li>
                </div>
              </div>
            </p>
          </div>
          <div className="stage-cube-container">
                <div className="cube-spinner">
                    <div className="cube1">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="cube2">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="cube3">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                    <div className="cube4">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="cube5">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="cube6">
                        <FontAwesomeIcon icon={faPython} color="DD0031" />
                    </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
