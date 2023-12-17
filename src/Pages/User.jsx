import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Nav2 from "../Components/Nav2";
import css from '../Pages/User.module.css'
// import
const User = () => {
  const loc = useLocation();
  const [uname, setUname] = useState("");
  const uid = loc.pathname.split("/")[2];
  // console.log('uid');
  useEffect(() => {
    // Make the API call to get uname
    axios
      .get("http://localhost:3001/user/" + uid) // Replace '1' with the actual user ID
      .then((response) => {
        setUname(response.data[0].uname); // Assuming the response is an array and uname is the property
      })
      .catch((error) => {
        console.error("Error fetching uname:", error);
      });
  }, []);
  return (
    <>      <Nav2></Nav2>
    <div className={css.main}>
      {/* <Link to={"/"}>
        <button>Log Out</button>
      </Link> */}
      {/* <Nav2></Nav2> */}
      <Link to={`/status/${uid}`}><button>Check Status</button></Link>
      <div className={css.user}>Welcome {uname}</div>
      <div className={css.paraMain}>
      <p className={css.para}>We’re thrilled to welcome you ! Your choice to select the best in the business is greatly appreciated. We’re confident that our services will live up to your expectations. Don’t forget, you can easily book your appointments with just a click of a button. Welcome aboard!
      <br />
      Absolutely! Please note that you can start scheduling your appointments using the button or link provided below. We've made the process simple and convenient for you. Enjoy our services!</p>
      </div>
      <div className={css.button}>
        <Link className={ css.l}to={"/form/"+uid}>Book Appointemnt</Link>
      </div>
    </div>
    </>

  );
};

export default User;
