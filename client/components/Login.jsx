import React, { useState } from 'react'
import { createAuthModel,getUserDetails } from '../services';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const initialState = { uname: "", gmail: "", pwd: "" };
    const [userDetails, setUserdetails] = useState(initialState);
    const navigate = useNavigate();

    const handleEdit = (e) => {
        e.preventDefault();
        setUserdetails({ ...userDetails, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userDetails);
        getUserDetails(userDetails);
        if (userDetails.response) {
            navigate("/dashboard");
        } else {
            console.log('User does not exist');
            navigate("/register");
            setUserdetails(initialState);
        }
    }
    return (
        <>
            <form>
                <div className="login">
                    <label>Username: </label>
                    <input type="text" name="uname" id="uname" value={userDetails.uname} autoComplete='uname' onChange={(e) => handleEdit(e)} />
                    <label>Email Id: </label>
                    <input type="email" name="email" id="gmail" value={userDetails.gmail} autoComplete='gmail' onChange={(e) => handleEdit(e)} />
                    <label>Password: </label>
                    <input type="password" name="pwd" id="pwd" value={userDetails.pwd} autoComplete='pwd' onChange={(e) => handleEdit(e)} />
                    <input type="submit" value="Login" onClick={(e) => handleSubmit(e)} />
                </div></form>
        </>
    )
}
