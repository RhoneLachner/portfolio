import React from "react";
import FadeInAnimation from "../../../../utils/animation/motionAnimation";
import "./bio.css";

const Bio = () => {
  return (
    <>
      <div>
        <div className="rhoneIs">
          Hello! My name is Rhone and I am a Full-Stack Software Engineer
          <br></br>
          and Musician based in Portland, Oregon.
        </div>
        <div className="bioDiv">
          <FadeInAnimation wrapperElement="p" className="bioText">
            <br />
            I am a creative and innovative problem solver, empathetic team
            builder, optimist, and communicative collaborator with a passion for
            learning, problem solving, music, and community. <br />
            <br></br>I thrive in both collaborative and solo environments, and
            feel best when I am actively spending time researching, learning,
            creating, and helping others.
            <br></br>
            <br></br>
            I believe strongly in inclusion, equity, authenticity, and
            diversity, and I enjoy approaching Tech with a holistic and
            human-centered perspective. <br />
            <br />
            <br></br>
            Recent Tech Stack:
            <br></br>
            JavaScript ◆ React.js ◆ TypeScript ◆ Node.js ◆ Contentful CMS ◆
            Material UI ◆ REST APIs ◆ Postgres
            <br></br>
            <br></br>
            Currently Learning:
            <br></br>
            Golang ◆ Docker ◆ Playwright ◆ Next.js
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            Thank you for taking a look at my portfolio!
          </FadeInAnimation>
        </div>
      </div>
    </>
  );
};

export default Bio;
