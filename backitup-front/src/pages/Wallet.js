import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

export default function Wallet(currUser, isAuth) {

   // Initialise Wa;;et page to be blank
   const [wallet, setWallet] = useState([])
   const {id} = useParams()

   console.log('id isss', currUser.userID);

   useEffect(() => {
       loadWallet()
   }, [] );

   // Get Post details from database
   const loadWallet = async () => {
       const result = await axios.get(`http://localhost:8080/api/user/${id}/wallet`) // change the link as necessary
       console.log(result.data, "my wallet");
       setWallet(result.data)
       // setShare(shareResult.data)
       console.log(result.data);
   }

   // const percent = share.SHARE_COUNT_CURRENT / share.SHARE_COUNT_TOTAL

 return (
   <div className='container'>
       <div className="row">
           <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
               
                <h1>Hello {currUser.userName}</h1>
                <h3>Active Balance: {wallet.activeBalance}</h3>
                <Link className="btn btn-dark m-2" to="/topup">
                      Top-up
                </Link>
                <Link className="btn btn-outline-dark m-2" to="/withdraw">
                      Withdraw
                </Link>
           </div>
       </div>
   </div>
 )
}
