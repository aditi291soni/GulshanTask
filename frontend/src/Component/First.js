import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from 'axios'
import axios from '../Axiosconfig/axiosconfig'
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import {
  Radio,
  Box,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
} from "@mui/material";

import { Container } from "@mui/system";
const First = () => {
    const navigate = useNavigate();

  const [formData, setformData] = useState({
    names: "",
    email: "",
    dob: "",
    gender: "",
    enroll: "",
    batch: "",
  });
  const formHandler = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
    
  };
  // after validation this function runs
  const SubmitHandler = async(e) => {
    const age = calculate_age(formData);
    // console.log(formData);
    if (age < 18) {
      alert("you are not eligible come after " + (18 - age) + " years");
      return;
    }
    if (age > 65) {
      alert("you are not eligible");
      return;
    }
   if(age>=18 && age<65){
  console.log(formData)
   const res = await axios.post("/register",formData);
   console.log(res);
  navigate("/thankyou");

}
    
  };
 //age calculate
  const calculate_age = ({ dob }) => {
    var today = new Date();
    var birthDate = new Date(dob);
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  };
  // submit form
const validate=(e)=>{
  // page does not refresh
      e.preventDefault(); 
// all field validation
  if (formData.names && formData.dob && formData.enroll && formData.batch) {
    SubmitHandler();
  } 
  else {
    alert("please fill all details");
  }
}
  return (
    <>
      <Container className="container">
        <h1 style={{ padding: "20px" }}>REGISTRATION FORM</h1>
        <form onSubmit={validate}>
          <Box
            display="flex"
            style={{
              height: "80vh",
              width: "45vw",
              flexDirection: "column",
              justifyContent: "center",
              margin: "16px",
            }}
          >
            {/* name */}
            <TextField
              style={{ marginTop: "16px", width: "30vw" }}
              label="Enter your Name"
              value={formData.names}
              variant="outlined"
              onChange={formHandler}
              name="names"
            />
            {/* email */}
            <TextField
              style={{ marginTop: "16px", width: "30vw" }}
              value={formData.email}
              label="Enter your Email"
              variant="outlined"
              onChange={formHandler}
              name="email"
            />
            {/* DOB */}
            <FormLabel
              style={{ marginTop: "16px", width: "30vw" }}
              id="demo-controlled-radio-buttons-group"
            >
              Enter Date of Birth
            </FormLabel>
            <TextField
              style={{ marginTop: "16px", width: "30vw" }}
              value={formData.dob}
              type="date"
              hidden
              variant="outlined"
              name="dob"
              onChange={formHandler}
            />
            {/* Gender */}
            <FormControl style={{ marginTop: "16px", width: "30vw" }}>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Enter Gender
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="gender"
                value={formData.gender}
                onChange={formHandler}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
            {/* Enroll Date */}
            <FormLabel id="demo-controlled-radio-buttons-group">
              Enter enroll Date
            </FormLabel>
            <TextField
              style={{ marginTop: "16px", width: "30vw" }}
              value={formData.enroll}
              //   label="Enter enroll Date"
              variant="outlined"
              type="date"
              name="enroll"
              onChange={formHandler}
            />
            {/* Batch No. */}
            <FormControl style={{ marginTop: "16px", width: "30vw" }}>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Enter Batch No
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="batch"
                value={formData.batch}
                onChange={formHandler}
              >
                <FormControlLabel
                  value="B1"
                  control={<Radio />}
                  label="B1 (6-7AM)"
                />
                <FormControlLabel
                  value="B2"
                  control={<Radio />}
                  label="B2 (7-8AM)"
                />
                <FormControlLabel
                  value="B3"
                  control={<Radio />}
                  label="B3(8-9AM)"
                />
                <FormControlLabel
                  value="B4"
                  control={<Radio />}
                  label="B4(9-10AM)"
                />
              </RadioGroup>
              <h2>Total Amount 500/month</h2>
              <h4 style={{marginTop:0}}>
                You need to pay the monthly amount Rs 500 to register yourself
                in class.
              </h4>
            </FormControl>

            <Button type="submit" style={{ width: "14vw" }} variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
};

export default First;
