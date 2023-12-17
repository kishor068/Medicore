import React, { useEffect, useState } from 'react'
import Doctor from './Doctor'
import { useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Nav2 from '../Components/Nav2';
import css from '../Pages/Pending.module.css'
const Approved = () => {
  const loc = useLocation();
  const uid = loc.pathname.split("/")[3];
  console.log(uid);
  const [state, sState] = useState([
    {
        Pid:"",
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
          `http://localhost:3001/doctor/approved/${uid}`
        );
        sState(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    fetchState();
  }, []);
  // useEffect(() => {
  //   console.log(appState);
  // }, [uid]);

  return (
    <>
      <Nav2></Nav2>
    <div className={css.main}>
         <Doctor/>
     <h1 className={css.text}> Approved Requests</h1>
     <div className={css.wrap} >
      {
        state.map((req,index)=>(
          <div key={index}>
            <h3 className={css.a}>Appointment {index+1}</h3>

            <p className={css.p}>First Name: {req.Fname }</p>
            <p className={css.p}>Last Name: {req.Lname}</p>
            <p className={css.p}>Age: {req.age}</p>
            <p className={css.p}>Description: {req.descr}</p>
            <p className={css.p}>Contact: {req.contact}</p>
            <p className={css.p}>Address: {req.address}</p>
            <p className={css.p}>Gender: {req.gender}</p>
            <p className={css.p}>Appointment Date: {req.AppDate}</p>
            <hr />
            <hr></hr>
          </div>
        ))
      }
     </div>
    </div>
    </>
  )
}

export default Approved
