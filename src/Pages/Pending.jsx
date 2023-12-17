import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Doctor from "./Doctor";
import Nav2 from "../Components/Nav2";
import css from '../Pages/Pending.module.css'
const Pending = () => {
  const loc = useLocation();
  // const [click, setClick] = useState({
  //   i: null,
  // });
  const uid = loc.pathname.split("/")[3];
  const [appState, storeState] = useState([
    {
      Pid: "",
      Fname: "",
      Lname: "",
      age: "",
      address: "",
      descr: "",
      contact: "",
      gender: "",
      AppDate:""
    },
  ]);

  useEffect(() => {
    const fetchState = async () => {
      try {
        let res = await axios.get(
          `http://localhost:3001/doctor/pending/${uid}`
        );
        storeState(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    fetchState();
  }, [uid]);

  const handleAccept = async (index) => {
    try {
      // setClick({ i: index });
      await axios.post(`http://localhost:3001/doctor/pending/accept/${uid}`, {
        i: index,
      });
      console.log({ i: index });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  const handleReject = async (index) => {
    
    try {
      // setClick({ i: index });
      await axios.post(`http://localhost:3001/doctor/reject/${uid}`, {
        i: index,
      });
      console.log({ i: index });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Nav2 ></Nav2>
    <div className={css.main}>
      <Doctor />
      <h1 className={css.text}>Pending Requests </h1>
      <div className={css.wrap} > 
        {appState.map((req, index) => (
          <div key={index}>
             <h3 className={css.a}>Pending Request {index+1}</h3>
            <p className={css.p}>First Name: {req.Fname }</p>
            <p className={css.p}>Last Name: {req.Lname}</p>
            <p className={css.p}>Age: {req.age}</p>
            <p className={css.p}>Description: {req.descr}</p>
            <p className={css.p}>Contact: {req.contact}</p>
            <p className={css.p}>Address: {req.address}</p>
            <p className={css.p}>Gender: {req.gender}</p>
            <p className={css.p}>Requested Date: {req.AppDate}</p>
            <button
              className={css.button}
              id="a"
              value="accept"
              onClick={() => handleAccept(index)} // Pass a function reference
            >
              Accept
            </button>
            <button
              className={css.button}
              value="reject"
              onClick={()=>handleReject(index)}
            >
              Reject
            </button>
            <hr />
            <hr />  
          </div>
        ))}
      </div>
      <div></div>
    </div>
    </>
  );
};

export default Pending;
