import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-img footer-item">
          <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" />
        </div>
        <div className="footer-item">
          <ul>
            <li>The Basic</li>
            <li>About TMDB</li>
            <li>Contact Us</li>
            <li>API</li>
            <li>System Status</li>
          </ul>
        </div>
        <div className="footer-item">
          <ul>
            <li>Get involved</li>
            <li>Contribution Bible</li>
            <li>3rd Party Applications</li>
            <li>Add New Movie</li>
            <li>Add New TV Show</li>
          </ul>
        </div>
        <div className="footer-item">
          <ul>
            <li>Community</li>
            <li>Guidelines</li>
            <li>Discussion</li>
            <li>Leaderboard</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="footer-item">
          <ul>
            <li>Legal</li>
            <li>Terms of Use</li>
            <li>API Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
