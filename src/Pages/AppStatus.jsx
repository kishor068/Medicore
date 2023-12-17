import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Nav2 from '../Components/Nav2';
const AppStatus = () => {
const [state,storeState]=useState([{
    status:""
}])
const [doctor,setDoctor]=useState([{
  Dname:"",
  RoomNo:""
}])
const loc=useLocation();
let uid=loc.pathname.split('/')[2];
    useEffect(() => {
        const fetchState = async () => {
          try {
            let res = await axios.get(
              `http://localhost:3001/status/${uid}`
            );
            storeState(res.data);
            let res2=await axios.get('http://localhost:3001/status/val/'+uid);
            setDoctor(res2.data)
            console.log(res);
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchState();
      }, []);

      return (
        <div>
          <Nav2></Nav2>
          <h1>Your Appointment Status will be updated here.</h1>
    
          {state.map((res, i) => (
            <div key={i}>
              {res.status === 1 ? (
                <div>
                  <h3>Your Appointment has been accepted</h3>
                  <p>
                    {doctor.map((val, i) => (
                      <div key={i}>
                        <div>Dr{val.uname} will be available in Room No:{val.RoomNo}</div>
                        {/* <div>{val.RoomNo}</div> */}
                      </div>
                    ))}
                  </p>
                </div>
              ) : res.status === 2 ? (
                <div>
                  <h3>Your Appointment has been Rejected!! Sorry</h3>
                </div>
              ) : (
                <div>
                  <h3>Your status is still pending!!!</h3>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    };

export default AppStatus
