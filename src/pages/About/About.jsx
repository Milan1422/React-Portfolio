// react and react components
import React, { useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// local components
import "./About.css";
import { Card } from "react-bootstrap";

const About = () => {

  const [avatarURL, setAvatarURL] = useState()
  const [githubBio, setGithubBio] = useState()

  useEffect(() => {
    fetch("https://api.github.com/users/webdevmilan")
      .then((res) => res.json())
      .then(
        (result) => {
          setGithubBio(result.bio)
          setAvatarURL(result.avatar_url)
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Card>
                  <Card.Img variant="top" src={avatarURL} thumbnail fluid/>
                  <Card.Body>
                    <Card.Title>Bio</Card.Title>
                    <Card.Text>{githubBio}</Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Jesus Milan</strong>
                <br />
                Jesus Milan is a goal-driven, patient, responsible, eager to be
                a top performer type of software developer.
                <br />
                In May 2021, I successfully completed the full stack bootcamp
                program from Georgia Tech. Additionally, in Sepetember 2022, I
                will also have completed Cook Systems' FastTrack training
                program.
                <br />
                During both of these programs I have gained hands on experience
                on many technical appliactions, methodical programming paradigms
                such as OOP and many other technologies which can be found
                below.
                <br />
                This knowledge have improved my skills in developing, deploying,
                troubleshooting and maintaining applications.
                <br />
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Contact Me
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1rDDtO1HT92Tswu6TzfJPPt_U65-w3kh9/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
