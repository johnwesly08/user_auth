import React, { useState } from 'react'
import { createAuthModel } from '../services';


export default function UserAuth() {
  const initialState = {uname : "", gmail : "", pwd : ""}
  const [userDetails,setUserDetails]= useState(initialState);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createAuthModel(userDetails)
    .then((response) => {
      console.log(response);
      if(response.status === 200)  {
        alert("Registration Successful");
      }
    }).catch((e) => {
      console.log(e.message);
    })
  }

  const handleEdit = (e) =>{
    e.preventDefault();
    setUserDetails({...userDetails, [e.target.id]: e.target.value})
  }

  return (
    <><form>
    <div className="userAuth">
        <label>Username: </label>
        <input type="text" name="uname" id="uname" value={userDetails.uname} autoComplete='uname' onChange={(e)=> handleEdit(e)}/>
        <label>Email Id: </label>
        <input type="email" name="email" id="gmail" value={userDetails.gmail} autoComplete='gmail' onChange={(e)=> handleEdit(e)}/>
        <label>Password: </label>
        <input type="password" name="pwd" id="pwd" value={userDetails.pwd} autoComplete='pwd' onChange={(e)=> handleEdit(e)}/>
        <input type="submit" value="signup" onClick={(e)=> handleSubmit(e)}/>
    </div></form>
    </>
  )
}

