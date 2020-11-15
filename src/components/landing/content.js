import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBriefcase,
  faCalendar,
  faTerminal,
  faGraduationCap,
  faUserGraduate,
  faCode,
} from "@fortawesome/free-solid-svg-icons"

export default class Content extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query projectsQuery {
            allProjectsJson {
              edges {
                node {
                  project
                  link
                  description
                  language
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <section className="content" id="content">
              <div className="container">
                {/* Job subsection */}
                <div className="subsection">
                  <h1>
                    <span className="dot"></span>What do I{" "}
                    <span className="word">do</span>?
                  </h1>

                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <h3>GE Aviation</h3>
                        <h4>
                          <FontAwesomeIcon
                            icon={faBriefcase}
                            className="mr-2"
                          />{" "}
                          Senior Software Engineer
                        </h4>
                        <h4>
                          <FontAwesomeIcon icon={faCalendar} className="mr-2" />{" "}
                          Nov 2016 - Present
                        </h4>
                      </div>

                      <div className="card-text">
                        ◆ Wrote high quality source code using Node, Vue and
                         and Golang to reprogram, update,
                        and added new features to complex GE system applications.
                        <br />◆ Worked in a customer facing team, wherein
                        interpersonal and communication skills are also utilized
                        and refined.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="subsection">
                  {" "}
                  <h1 className="mt-5">
                    <span className="dot"></span>What do I{" "}
                    <span className="word">know</span>?
                  </h1>
                  <div className="row">
                    {/* First column */}
                    <div className="col-lg-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title">
                            <h3>Languages</h3>
                          </div>
                          <div className="card-text">
                          <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Javascript
                            </div>
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Golang
                            </div>
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Java
                            </div>
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              HTML
                            </div>
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              CSS
                            </div>
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Language
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title">
                            <h3>Workflows</h3>
                          </div>

                          <div className="card-text">
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Agile
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Second column */}
                    <div className="col-lg-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="card-title">
                            <h3>Frameworks</h3>
                          </div>

                          <div className="card-text">
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Node
                            </div>

                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Vue
                            </div>

                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              GatsbyJS
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-body">
                          <div className="card-title">
                            <h3>Technologies</h3>
                          </div>

                          <div className="card-text">
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Web Development
                            </div>

                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              Android Mobile Development
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="subsection">
                  <h1 className="mt-5">
                    <span className="dot"></span>What did I{" "}
                    <span className="word">study</span>?
                  </h1>

                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <h3>Birla Institute of Technology, Pilani</h3>
                        <h4>
                          <FontAwesomeIcon
                            icon={faGraduationCap}
                            className="mr-2"
                          />
                          Computer Science
                        </h4>
                        <h4>
                          <FontAwesomeIcon
                            icon={faUserGraduate}
                            className="mr-2"
                          />{" "}
                          Jun 2017
                        </h4>
                      </div>

                      <div className="card-text">
                        I earned my Master's Degree in Software Systems in
                        Birla Institute of Technology.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="subsection">
                  <h1 className="mt-5">
                    <span className="dot"></span>What have I{" "}
                    <span className="word">experimented with</span>?
                  </h1>
                  <div className="row">
                    {data.allProjectsJson.edges.map(({ node }, index) => (
                      <div className="col-lg-4" key={index}>
                        <div className="card mb-4">
                          <div className="card-body">
                            <div className="card-title">
                              <h3>{node.project}</h3>
                              <h4>
                                <FontAwesomeIcon
                                  icon={faCode}
                                  className="mr-2"
                                />
                                {node.language}
                              </h4>
                            </div>

                            <div className="card-text">{node.description}</div>
                          </div>
                          <div className="card-footer">
                            <a
                              href={node.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      />
    )
  }
}