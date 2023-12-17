import React from "react";
import { Link } from "react-router-dom";
import css from "./Home.module.css";
import img from "../Images/Home.png";
import logo from "../Images/logo2.png";
import Navbar from "../Components/Navbar1";
// client\public\OIP.jpeg
const Home = () => {
  
  return (
    <div className={css.main}>
      <Navbar></Navbar>
      <div className={css.body}>
        <img src={img} alt="ERR" />
      </div>
      <div className={css.head}>
        <h1>
          The <span className={css.away}>Doctor</span> <br />
          <span>is Just a Click </span>
          <br />
          <span className={css.away}>Away</span>
          
        </h1>
        
      </div>
      {/* <Link to="/login">
        <button className={css.log}>LogIn</button>
      </Link> */}
      <div className={css.log}>Find and book a doctor online in minutes for any health need. No queues, no hassle. Log in now to access our services and enjoy the benefits of online health care.





</div>
    </div>
  );
};

export default Home;
