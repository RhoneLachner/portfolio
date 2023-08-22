import React from "react";
import { ExternalLink } from "react-external-link";
import "./bannerLinks.css";
// import { Link } from "react-router-dom";

const BannerLinks = () => {
  return (
    <>
      <div className="externalLinks">
        <ExternalLink href="https://github.com/RhoneLachner">
          <span className="bannerLinkItem">GitHub</span>
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/rhonelachner/">
          <span className="bannerLinkItem">LinkedIn</span>
        </ExternalLink>
        <ExternalLink href="https://hopeandfailure.com/">
          <span className="bannerLinkItem">Music</span>
        </ExternalLink>

        {/* <Link className="music" to="/music">
            Music
          </Link> */}
      </div>
    </>
  );
};

export default BannerLinks;
