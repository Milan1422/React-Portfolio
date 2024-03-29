import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_GATECH from "../../assets/img/experience/gatech.png";
import L_COOKSYS from "../../assets/img/experience/cooksys.png";
import Tilt from "react-tilt";
import "./Experience.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_GATECH} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Full Stack Software Developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Technology:</strong> JavaScript, CSS, HTML, MERN
                    <br />
                    <strong>Duration:</strong> DECEMBER 2020 - MAY 2021
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed</strong> Fundamentals to build seamless applications from front-end to back-end.
                      </li>
                      <li><strong>Perfomed</strong> Many applications starting from simple code refactoring and implementation of semantic code, to the use of asyn functions, Object-Oriented-Programming, Object-Relational-Mapping, to then finish complete front to back MERN applications. 
                      </li>
                      <li><strong>Sharpened</strong> Skills of teamwork related activities from project planning to github code merging to final product deployment. All while meeting due datelines.</li>
                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_COOKSYS} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Software Developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Technology:</strong> JavaScript, Java, Spring Boot, React
                    <br />
                    <strong>Duration:</strong> JULY 2022 - Present (COMPLETION SEPTEMBER 2022)
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed</strong> New skills in Java language and Spring framework.
                      </li>
                      <li><strong>Perfomed</strong> Many applications both solo or as a team which involved strict self dicipline and constant communication with the CS team. 
                      </li>
                      <li><strong>Sharpened</strong> Skills in Javascript and React. Also, obtained a better understanding of database structures.</li>
                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
