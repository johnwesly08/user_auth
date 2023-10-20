import React from 'react'


export default function UserAuth() {
  return (
    <>
    <div className="userAuth">
        <label>Username: </label>
        <input type="text" name="username" id="uname" />
        <label>Email Id: </label>
        <input type="email" name="email" id="gmail" />
        <label>Password: </label>
        <input type="password" name="password" id="pwd" />
        <input type="button" value="submit" />
    </div>
    </>
  )
}

