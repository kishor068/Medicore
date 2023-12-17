import React, { useEffect, useState } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Pending from "./Pending";
import Approved from "./Approved";
// import Pending from "./Pending";
// import Approved from "./Approved";
import css from '../Pages/Pending.module.css'
import axios from "axios";
const Doctor = () => {
  const loc = useLocation();
  const uid = loc.pathname.split("/")[3];
  console.log(uid);


  return (
    <div>
     
      <div>
        <h1 className={css.text1}>Appointments</h1>
        {/* <Routes>
          <Route path="/pending" element={<Pending/>} />
          <Route path="/approved" element={<Approved/>} />
        </Routes> */}
        <div className={css.links}>
        <Link className={css.link1} to={`/doctor/pending/${uid}`}><p>Pending</p></Link>
        <Link className={css.link2} to={`/doctor/approved/${uid}`}><p>Approved</p></Link>
        </div>
      </div>
      {/* Hello doctor */}
    </div>
  );
};

export default Doctor;
