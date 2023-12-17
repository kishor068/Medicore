import React, { useState } from "react";
import axios from "axios";
import { parsePath, useNavigate } from "react-router-dom";
import style from "./Register.module.css";
const Register = () => {
  const [register, registerFun] = useState({
    uname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  //  const [q,fun]=useState(0);

  // const h=()=>{
  //  fun(1);
  // }
  // <button onClick={h}></button>
  // const [logStaate,setLogstate]=useState(0);
  const handleChange = (e) => {
    registerFun((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(register);
  };
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();

    // const pass = document.getElementsByName("password")[0].value;
    // const conPass = document.getElementsByName("cpassword")[0].value;
    // const uname = document.getElementsByName("uname")[0].value;
    // const email = document.getElementsByName("email")[0].value;
    const uname = register.uname;
    const email = register.email;
    const pass = register.password;
    const conPass = register.cpassword;
    console.log(pass + " " + conPass + " " + uname + " " + email);
    if (pass !== conPass) {
      alert("Both the password doesnt match!!!!");
    }
    if (pass === conPass && email != null && uname != null) {
      try {
        const apIresponse = await axios.post(
          "http://localhost:3001/register",
          register
        );
        const response = apIresponse.data;
        const userRoute = response.Output;
        console.log(response.Output);
        window.alert("Registered successfully");
        navigate("/user/" + userRoute);
      } catch (err) {
        // console.log(err);
        alert("The user already exists!!");
      }
    }
  };
  return (
    <div className={style.flex}>
      <div className={style.head}>
        {" "}
        <h1>Register</h1>
      </div>
      {/* <form action=""></form> */}
      <div className={style.reg}>
        <label className={style.label}>Username</label>
        <input
          className={style.b}
          type="text"
          name="uname"
          placeholder="Uname"
          onChange={handleChange}
        />
        <label className={style.label}>Email</label>
        <input
          className={style.b}
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <label className={style.label}>Password</label>
        <input
          className={style.b}
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <label className={style.label}>Confirm Password</label>
        <input
          className={style.b}
          type="password"
          name="cpassword"
          placeholder="cpassword"
          onChange={handleChange}
        />
        <div>
          <button className={style.button} onClick={handleClick}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
