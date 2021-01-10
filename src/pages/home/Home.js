import React from "react";
import "./Home.css";
import SocialLinks from "../../components/SocialLinks";

function Home() {
  return (
    <div className="home">
      <div className="home__name">
        Lewis <br /> Young
      </div>
      <SocialLinks />
    </div>
  );
}

export default Home;
