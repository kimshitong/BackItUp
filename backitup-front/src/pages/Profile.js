import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import Wallet from './wallet/Wallet'
import InvestmentUser from "./wallet/InvestmentUser"
import ViewUser from "../users/ViewUser"
import PostUser from './wallet/PostUser'

export default function Profile({currUser, setPageTitle, userType }) {

    const [ displayA, setDisplayA ] = useState(true) // profile
    const [ displayB, setDisplayB ] = useState(false) // wallet
    const [ displayC, setDisplayC ] = useState(false) // investments OR posts

    // const profileImage = ".." + currUser.userPhotoURL.slice(18)

    const showA = () => {
        setTimeout(() => {
            setDisplayA(true)
            setDisplayB(false)
            setDisplayC(false)
        }, 50)
    }

    const showB = () => {
        setDisplayA(false)
        setDisplayB(true)
        setDisplayC(false)
    }

    const showC = () => {
        setDisplayA(false)
        setDisplayB(false)
        setDisplayC(true)
    }

    useEffect(() => {
        setPageTitle(`${currUser.userName}'s Profile • BackItUp`)
        console.log("curr user type", userType);
    }, [] );

  return (
    <div className="container">
        <div className="container my-3">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow">
                <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 class="hero-title display-4 fw-bold lh-1" style={{ textAlign: "left" }}>Hello, {currUser.userName}.</h1>
                    <p class="lead" style={{ textAlign: "left" }}>The world is amazing because of people like you.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        {/* <Link className="btn btn-solid-dark btn-lg px-4 me-md-2 fw-bold" to={isAuth.isLoggedIn ? `/invest/${id}` : `/oops`} >
                            Invest
                        </Link> */}
                    </div>
                </div>
                <div class="col-lg-4 p-0 overflow-hidden">
                        <img class="rounded-lg-3" src={"/images/user/21-07-2023-00-32-33-cube.png"} alt="" width="30%"/>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-2" style={{ height: '70vh' }}>
                <div class="nav nav-pills bg-light rounded flex-column mt-2">
                    <button className={ displayA ? 'btn btn-admin-dark flex-fill my-2 mx-1 shadow-sm' : 'btn btn-admin-inactive flex-fill my-2 mx-1'} onClick={() => showA()}>My Info</button>
                    <button className={ displayB ? 'btn btn-admin-dark flex-fill my-2 mx-1 shadow-sm' : 'btn btn-admin-inactive flex-fill my-2 mx-1'} onClick={() => showB()}>My Wallet</button>
                    <button className={ displayC ? 'btn btn-admin-dark flex-fill my-2 mx-1 shadow-sm' : 'btn btn-admin-inactive flex-fill my-2 mx-1'} onClick={() => showC()}>{ userType == "Company" ? "My Posts" : "My Portfolio" }</button>
                </div>
            </div>
            <div className="col-md-10">
                { 
                displayA
                ? <ViewUser currUser={currUser} />
                : displayB
                ? <Wallet currUser={currUser} />
                : userType === 'Company'
                ? <PostUser currUser={currUser} />
                : <InvestmentUser currUser={currUser} />
                }
            </div>
        </div>
       
    </div>
  )
}
