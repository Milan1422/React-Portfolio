import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// Projects
import L_CodeRefactor from "../../assets/img/projects/coderefactor.png";
import L_DayPlanner from "../../assets/img/projects/dayplanner.png";
import L_TeamTesting from "../../assets/img/projects/teamtesting.png";
import L_NoteTaker from "../../assets/img/projects/notetaker.png";
import L_ECommerceBackend from "../../assets/img/projects/ecommerce.png";
import L_FitnessTracker from "../../assets/img/projects/fitnesstracker.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// Skills
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_JQUERY from "../../assets/img/skills/jquery-1.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_JAVA from "../../assets/img/skills/java.svg";
import L_NPM from "../../assets/img/skills/npm.svg";
import L_HEROKU from "../../assets/img/skills/heroku.svg";
import L_SEQUELIZE from "../../assets/img/skills/sequelize.svg";
import L_MYSQL from "../../assets/img/skills/mysql-6.svg";
import L_POSTMAN from "../../assets/img/skills/postman.svg";
import L_PGSQL from "../../assets/img/skills/pgsql.svg";
import L_SPRING from "../../assets/img/skills/spring.svg";

import "./ProjectTimeline.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: Code Refactor */}
          <ImageEvent
            date="10/10/2020"
            className="text-center"
            text="Code Refactor App"
            src={L_CodeRefactor}
            alt="Code Refactor App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This application shows the
                        correct use of semantic code to improve search
                        optimization without affecting looks or behavior.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Semantic Tags</li>
                          <li>Search Optimization</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/Milan1422/HW1-Code-Refactor"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Day Planner */}
          <ImageEvent
            date="01/23/2021"
            className="text-center"
            text="Day Planner"
            src={L_DayPlanner}
            alt="Day Planner"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This app lets you save
                        to-do activities for your workday based on time-stamps.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            Save to-do reminders based on the hour of the day
                          </li>
                          <li>save to-dos to local storage</li>
                          <li>Styled with Material-UI</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              HTML
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              CSS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JQUERY}
                                alt="JQuery"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JQuery
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/Milan1422/HW5-Work-Day-Schedule"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Team Testing */}
          <ImageEvent
            date="02/27/2020"
            className="text-center"
            text="Team Testing"
            src={L_TeamTesting}
            alt="Team Testing"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that lets you build
                        a coding team.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Add team member according to their role</li>
                          <li>Uses Jester for code testing</li>
                          <li>
                            Uses classes and object models to build team member
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JAVASCRIPT"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JAVASCRIPT
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NPM}
                                alt="NPM"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              NPM
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/Milan1422/TeamTestingApp"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://drive.google.com/file/d/1MwXp4ipylM-vIC7sahgzCZMW_TQKs_W7/view"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Note Taker */}
          <ImageEvent
            date="03/06/2020"
            className="text-center"
            text="Note Taker"
            src={L_NoteTaker}
            alt="Note Taker"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that lets you
                        create notes.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Create new notes</li>
                          <li>Delete Notes</li>
                          <li>Edit Notes</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              JAVASCRIPT
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HEROKU}
                                alt="PostgreSQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              HEROKU
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://intense-beach-32989.herokuapp.com/"
                  target="_blank"
                >
                  SEE LIVE AT HEROKU
                </UrlButton>
                <UrlButton
                  href="https://github.com/Milan1422/Note-To-Self"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: E-Commerce BackEnd */}

          <ImageEvent
            date="03/20/2021"
            className="text-center"
            text="ECommerce BackEnd"
            src={L_ECommerceBackend}
            alt="ECommerce BackEnd"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This app builds the back
                        end code for an ecommerce website.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Modifying inventory</li>
                          <li>Use of routes to connect with MySQL database</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JAVASCRIPT"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JAVASCRIPT
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SEQUELIZE}
                                alt="Sequelize"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Sequelize
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MYSQL}
                                alt="MySQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MySQL
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_POSTMAN}
                                alt="Postman"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Postman
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/Milan1422/ECommerce-App"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://drive.google.com/file/d/1tbodqt5_2--Z5TKCd0h7Nw50015zfYEz/view"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Fitness Tracker */}
          <ImageEvent
            date="04/17/2021"
            className="text-center"
            text="Fitness Tracker"
            src={L_FitnessTracker}
            alt="Fitness Tracker"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This app lets you track
                        your workout and display graphs based on your rutines.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Choose type of workout</li>
                          <li>Set yout times and reps</li>
                          <li>Start new workout or continue a current one</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVASCRIPT}
                                alt="JAVASCRIPT"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JAVASCRIPT
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HEROKU}
                                alt="HEROKU"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              HEROKU
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://afternoon-brushlands-33991.herokuapp.com"
                  target="_blank"
                >
                  SEE LIVE AT HEROKU
                </UrlButton>
                <UrlButton
                  href="https://github.com/Milan1422/FitPal-Tracker"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Quiz-API */}
          <ImageEvent
            date="07/29/2022"
            className="text-center"
            text="Quiz-API"
            src={L_ECommerceBackend}
            alt="Quiz-API"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A small RESTful API that
                        simulates basic backend functionality for a quiz
                        application.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Use Postman to test endpoints</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVA}
                                alt="JAVA"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JAVA
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PGSQL}
                                alt="PostgreSQL"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              PostgreSQL
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_POSTMAN}
                                alt="Postman"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Postman
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/fasttrackd-student-work/spring-assignment-quiz-api-WebDevMilan"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Twitter Backend App */}
          <ImageEvent
            date="08/5/2022"
            className="text-center"
            text="Social Media Backend"
            src={L_ECommerceBackend}
            alt="Social Media Backend"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Worked in a team to create a RESTful API using Spring
                        Boot, JPA, and Postgresql that exposes operations for
                        social media data that resembles the conceptual model of
                        Twitter.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Use Postman to test endpoints</li>
                          <li>CRUD operations on tweets</li>
                          <li>Ability to filter tweets based on mentions or hashtags</li>
                          <li>Ability to like tweets</li>
                          <li>Users can follow or unfollow other users</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_JAVA}
                                alt="JAVA"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              JAVA
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PGSQL}
                                alt="PostgreSQL"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              PostgreSQL
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_POSTMAN}
                                alt="Postman"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Postman
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SPRING}
                                alt="Spring"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Spring
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/fasttrackd-student-work/spring-assessment-social-media-sprint-7-2022-team-4"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
