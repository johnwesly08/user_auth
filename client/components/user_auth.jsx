import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createAuthModel, getUserDetails } from '../services';

export default function UserAuth() {
  const initialState = { uname: "", gmail: "", pwd: "" };
  const [userDetails, setUserdetails] = useState(initialState);
  const navigate = useNavigate();


  const handleEdit = (e) => {
    e.preventDefault();
    setUserdetails({ ...userDetails, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails)
    createAuthModel(userDetails)
      .then((response) => {
        console.log(response, "Registered Successfully");
      }).catch((e) => {
        console.log(e.message);
      })
    setUserdetails(initialState);
    navigate('/login');


    return (
      <><form className='regUser'>
        <div className="userAuth">
          <label>Username: </label>
          <input type="text" name="uname" id="uname" value={userDetails.uname} autoComplete='uname' onChange={(e) => handleEdit(e)} />
          <label>Email Id: </label>
          <input type="email" name="email" id="gmail" value={userDetails.gmail} autoComplete='gmail' onChange={(e) => handleEdit(e)} />
          <label>Password: </label>
          <input type="password" name="pwd" id="pwd" value={userDetails.pwd} autoComplete='pwd' onChange={(e) => handleEdit(e)} />
          <input type="submit" value="signup" onClick={(e) => handleSubmit(e)} />
        </div></form>
      </>
    )
  }
}