import React from "react";
import { ExternalLink } from "react-external-link";
// import { Link } from "react-router-dom";

const BannerLinks = () => {
  return (
    <>
      <div className="externalLinks">
        <ExternalLink href="https://github.com/RhoneLachner">
          <span className="code">Coding</span>
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/rhonelachner/">
          <span className="linkedIn">LinkedIn</span>
        </ExternalLink>
        <ExternalLink href="https://hopeandfailure.com">
          <span className="music">Music</span>
        </ExternalLink>

        {/* <Link className="music" to="/music">
            Music
          </Link> */}
      </div>
    </>
  );
};

export default BannerLinks;
