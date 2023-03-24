import React from "react";
import "../style/Landingpage.scss";
import logo from "../assets/logo.png";
import illustrator from "../assets/illustrator.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp ,faBars} from "@fortawesome/free-solid-svg-icons";
import { Link, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Signuppage from "./Signuppage";

export default function Landingpage() {
  return (
    <div className="landingpage">
      <div className="header">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <div>
            <p>MENU</p> 
            <p><FontAwesomeIcon icon={faBars} bounce /></p>
          </div>
          <button type='button'> CONTACT US</button>
        </div>
      </div>
      <section>
        <div className="left">
          <p>Whatever is your abilities this is your community</p>
          <p>TogetherWe</p>
          <p>We believe that everyone deserves to feel connected and supported, which is why we've created a space where you can share your ideas ,ask for advice , and learn from others</p>
          <div className="mobileimg" ><img src={illustrator} alt="img"/></div>
          <div>
            <button><Link to="./Loginpage" className="routelink" ><pre> login </pre></Link></button> 
            <button><Link to="./Signuppage" className="routelink">signup</Link></button>
          </div>
        </div>
        <div className="right">
          <img src={illustrator} alt="img" className="pcimg"/>
        </div> 
      </section>
      <footer>

      </footer>
      <div className="swipeup">
        <p>swipe up</p>
        <p><FontAwesomeIcon icon={faAngleUp} bounce /></p>
      </div>
    </div>
  );
}
/*style={{ color: 'inherit', textDecoration: 'inherit'}}*/