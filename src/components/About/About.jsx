import React from "react";

const About = () => {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGLx1Zbj1mdtA/profile-displayphoto-shrink_800_800/0/1613255569737?e=1625702400&v=beta&t=KP0MmurzAdbnIBQ43L_W2fkQ3GPKrG2ap8CqLTuOCL0" style={{marginLeft: 150, width: 250}} alt="..."></img>
        </div>
        <div className="col-md-8">
          <div className="card-body text-center">
            <h4 className="card-title">About Me</h4>
            <p className="card-text">
              Hi my name is Jesus Milan. I live in Kennesaw, GA with my beautiful wife and two giant dogs. I enjoy sitting in front of a monitor for hours researching and/or improving on my coding skills, with the occational gaming session. I am soon to conclude a rigorous, fast-paced full stack web development program from Georgia Tech. This program is teaching me the fundamentals I seek to start a career in Web Development. It also puts my abilities to multitask and manage heavy workload on timely manner.
            </p>
            <p>
              I like to watch and practice many sports but soccer is by far my favorite, Go Atlanta United!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
