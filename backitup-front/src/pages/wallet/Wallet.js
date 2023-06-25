import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import TopupList from "./TopupList"

export default function Wallet({currUser, isAuth}) {

   // Initialise Wa;;et page to be blank
   const [wallet, setWallet] = useState([]) 
   const [invs, setInvs] = useState([])  
   const [topups, setTopups] = useState([])
   const [wds, setWds] = useState([])
   const {id} = useParams()

   console.log('my current user walletid', currUser);

   useEffect(() => {
       loadWallet()
   }, [] );

   // Get Post details from database
   const loadWallet = async () => {
       const result = await axios.get(`http://localhost:8080/api/user/${currUser.userID}/wallet`) // change the link as necessary
       console.log(result.data, "my wallet");
       setWallet(result.data)
       // setShare(shareResult.data)
       console.log(result.data);

       console.log("my wallet", wallet);
        const result2 = await axios.get(`http://localhost:8080/api/listTopUp/${id}`)
        setTopups(result2.data)

        const result3 = await axios.get(`http://localhost:8080/api/listWithdrawal/${id}`)
        setWds(result3.data)

        const result4 = await axios.get(`http://localhost:8080/api/listinvest/user/${currUser.userID}`)
        setWds(result4.data)
   }

   // const percent = share.SHARE_COUNT_CURRENT / share.SHARE_COUNT_TOTAL

 return (
   <div className='container'>
       <div className="row">
           <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
               
                <h1>{currUser.userName}'s Wallet</h1>
                <h3>Active Balance: {wallet.activeBalance}</h3>
                <Link className="btn btn-dark m-2" to="/topup">
                      Top-up
                </Link>
                <Link className="btn btn-outline-dark m-2" to="/withdraw">
                      Withdraw
                </Link>
           </div>
       </div>
       <div className="row">
            <h1>My Portfolio</h1>
        </div>
        <div className='container'>
        <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">#</th>    
                    <th scope="col">Title</th>
                    <th scope="col">Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        invs.map((inv, index) => (
                            <tr>
                            <th scope="row" key="index">{index + 1}</th>
                            <td>{inv.topupID}</td> /** need to fix */
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        <div className="row">
            <h1>Recent Top-ups</h1>
        </div>
        <div className='container'>
        <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">#</th>    
                    <th scope="col">ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Verified?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        topups.map((topup, index) => (
                            <tr>
                            <th scope="row" key="index">{index + 1}</th>
                            <td>{topup.topupID}</td>
                            <td>{topup.topupDT}</td>
                            <td>{topup.topupAmount}</td>
                            <td>
                                {topup.pendingStatus
                                ? 'N'
                                : 'Y'}
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    <div className="row">
            <h1>Recent Withdrawals</h1>
        </div>
        <div className='container'>
        <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">#</th>    
                    <th scope="col">ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Verified?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        wds.map((wd, index) => (
                            <tr>
                            <th scope="row" key="index">{index + 1}</th>
                            <td>{wd.withdrawalID}</td>
                            <td>{wd.withdrawalDT}</td>
                            <td>{wd.withdrawalAmount}</td>
                            <td>
                                {wd.pendingStatus
                                ? 'N'
                                : 'Y'}
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
   </div>
   </div>
   </div>
 )
}
