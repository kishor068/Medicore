import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Nav2 from "../Components/Nav2";
import css from "../Pages/AppForm.module.css";
const AppForm = () => {
  const [pdetails, setPdetails] = useState({
    Fname: "",
    Lname: "",
    age: "",
    contact: "",
    gender: "",
    address: "",
    descr: "",
    // dept: "select",
    AppDate: "",

    // default value for department dropdown
    // DrID: "",
  });
  const nav = useNavigate();
  const [departments, setDepartments] = useState([{}]);
  const loc = useLocation();
  const [doctors, setDoctors] = useState([{ uname: "" }]);
  console.log(loc.pathname.split("/"));
  const uid = loc.pathname.split("/")[2];
  useEffect(() => {
    // Fetch the list of departments
    // You need to implement the actual API call to get the department list
    // For simplicity, I'm providing a static list here
    const fetchDoctors = async () => {
      try {
        let res = await axios.get(`http://localhost:3001/form`);
        let resp = await axios.get(`http://localhost:3001/form/dept`);

        setDoctors(res.data);
        setDepartments(resp.data);
        // console.log(res.data);
        // console.log(doctors)
      } catch (err) {
        console.log(err);
      }
    };

    fetchDoctors();
  }, []);
  useEffect(() => {
    console.log(doctors);
  }, [doctors]);

  // useEffect(() => {
  //   // Fetch the list of departments
  //   // You need to implement the actual API call to get the department list
  //   // For simplicity, I'm providing a static list here
  //   const fetchDept = async () => {
  //     try {
  //       let res = await axios.get(`http://localhost:3001/form/dept`);

  //       setDoctors(res.data);
  //       // console.log(res.data);
  //       // console.log(doctors)
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchDept();
  // }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/form/" + uid, pdetails);
      console.log("sent" + pdetails);
      nav(`/status/${uid}`);
    } catch (err) {
      console.log(err);
    }
  };
  const [dept, setDept] = useState([{}]);
  const handleChange = (e) => {
    setPdetails({ ...pdetails, [e.target.name]: e.target.value });
    console.log(pdetails);
  };
  // const handle=async(e)=>{
  //   setDept({ ...dept, [e.target.name]: e.target.value });
  //   console.log(dept);
  //   try
  //   {
  //     let res=await axios.post('http://localhost:3001/getDoc',dept);
  //     setDoctors(res.data);
  //   }
  //   catch(err)
  //   {
  //     console.log(err);
  //   }
  // }
  // const handle = async (e) => {
  //   setDept({ ...dept, [e.target.name]: e.target.value });
  //   console.log(dept);
  //   try {
  //     let res = await axios.post("http://localhost:3001/getDoc", {
  //       Dname: dept.dept,
  //     });
  //     setDoctors(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const handle = async (e) => {
    const selectedDepartment = e.target.value;
    setDept(selectedDepartment);

    try {
      let res = await axios.post("http://localhost:3001/getDoc", {
        Dname: selectedDepartment,
      });
      setDoctors(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Nav2></Nav2>
    <div className={css.main}>
      {/* <Link to={"/"}>
        <button>Log Out</button>
      </Link> */}
          <h2 className={css.head}>Book your Appointments here!!!</h2>
      <div className={css.flex}>
        <div>
          <input
            className={css.input}
            type="text"
            name="Fname"
            placeholder="Fname"
            value={pdetails.Fname}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className={css.input}
            type="text"
            name="Lname"
            placeholder="Lname"
            value={pdetails.Lname}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={css.flex}>
        <div>
          <input
            className={css.input}
            type="text"
            name="contact"
            placeholder="contact"
            value={pdetails.contact}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className={css.input}
            type="text"
            name="age"
            placeholder="Age"
            value={pdetails.age}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={css.flex}>
        <div>
          <input
            className={css.input}
            type="Gender"
            name="gender"
            placeholder="Gender"
            value={pdetails.gender}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className={css.input}
            type="text"
            name="address"
            placeholder="Address"
            value={pdetails.address}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* <div className={css.flex}> */}
      <div>
        <textarea
          className={css.text}
          type="text"
          name="descr"
          placeholder="descr"
          value={pdetails.descr}
          onChange={handleChange}
          rows={5}
        />
      </div>
      <div className={css.options}>
        <select
          className={css.sel}
          name="dept"
          id="dept"
          value={dept}
          onChange={handle}
        >
          {departments.map((dept) => (
            <option key={dept.value} value={dept.Dname}>
              {dept.Dname}
            </option>
          ))}
        </select>

        {/* Display the list of doctors based on the selected department */}
        {/* <select
  name="Doctor"
  id="Doctor"
  defaultValue={"select"}
  value={doctors.uname}
  onChange={handleChange}
>
  <option value="">Select Doctor</option>
  {doctors.map((doc, i) => (
    <option key={i} value={doc.uname}>
      {`${doc.uname}`}
    </option>
  ))}
</select> */}
        <select
          className={css.sel}
          name="DrID"
          id="DrID"
          defaultValue={"select"}
          value={pdetails.DrID}
          onChange={handleChange}
        >
          <option value="">Select Doctor</option>
          {doctors.map((doc, i) => (
            <option key={i}>{doc.uname}</option>
          ))}
        </select>
      </div>
      <div>
        {/* <legend></legend> */}
        <input className={css.date}
          type="date"
          name="AppDate"
          placeholder="date"
          value={pdetails.Appdate}
          onChange={handleChange}
        />
      </div>
      <div className={css.btn} onClick={handleClick}>
        Book
      </div>
    </div>
    </>
    // </div>
    
  );
};

export default AppForm;
