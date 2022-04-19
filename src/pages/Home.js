import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bg-img.jpg";
import "../styles/Home.scss";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <p> Berkelana dengan aman<br /> tanpa meragukan <br />kenyamanan</p>
          <Link to="/booking">
            <button> ORDER NOW </button>
          </Link>
        </div>
    </div>
  );
}

export default Home;
