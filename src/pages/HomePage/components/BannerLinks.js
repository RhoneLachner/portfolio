import React, { Component } from "react";
import { ExternalLink } from "react-external-link";
import { Link } from "react-router-dom";

export default class BannerLinks extends Component {
  render() {
    return (
      <>
        <div className="externalLinks">
          <ExternalLink href="https://github.com/RhoneLachner">
            <span className="code">Coding</span>
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/rhonelachner/">
            <span className="linkedIn">LinkedIn</span>
          </ExternalLink>
          <Link className="music" to="/music">
            Music
          </Link>
        </div>
      </>
    );
  }
}
