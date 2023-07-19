import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google'

import jwt_decode from "jwt-decode";

export default function AddUserAuth({ user, setUser, onNext }) {

  function handleCallbackResponse(response) {
    console.log(response.credential);
    var userObject = jwt_decode(response.credential)
    console.log(userObject);
    console.log(userObject.name);
    // setUser({...user, userEmail: userObject.email});
    setUser({
      userName: userObject.name,
      userEmail: userObject.email,
      userHP: "",
      userPass: "",
      userType: "",
      userVerified: false,
      userEvidence: "",
      userOauthType: "GOOGLE",
      userOauthIdentifier: userObject.sub
    })
    console.log(user);
    onNext();
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "502112046738-80gbpokjtcn2qqur1su4g69jp28dtvgk.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    )
  }, [])
  
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div id="signInDiv"></div>
  )
}