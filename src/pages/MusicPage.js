import React from "react";
import { Link } from "react-router-dom";

//PAGE ARCHIVED

const MusicPage = () => {
  return (
    <div className="musicPage">
      <div className="musicText">
        MUSIC PAGE CURRENTLY UNDER CONSTRUCTION. <br />
        Thank you for visiting!
      </div>
      <div className="backToHomeDiv">
        <Link className="backToHome" to="/">
          Go back to Home Page
        </Link>
      </div>
    </div>
  );
};

export default MusicPage;
