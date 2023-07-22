import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import TopupList from "./TopupList"
import WithdrawalListUser from "./WithdrawalListUser"

export default function Wallet({currUser}) {

   // Initialise Wallet page to be blank
   const [wallet, setWallet] = useState([]) 
   const [invs, setInvs] = useState([])  
   const [topups, setTopups] = useState([])
   const [wds, setWds] = useState([])
   const {id} = useParams()

   const [ displayA, setDisplayA ] = useState(true) // topups
   const [ displayB, setDisplayB ] = useState(false) // withdrawals

    const showA = () => {
        setDisplayA(true)
        setDisplayB(false)
    }

    const showB = () => {
        setDisplayA(false)
        setDisplayB(true)
    }

   console.log('my current user walletid', currUser);

   useEffect(() => {
       loadWallet()
   }, [] );

   // Get Post details from database
   const loadWallet = async () => {
       const result = await axios.get(`https://orbital-1690047930899.azurewebsites.net/api/user/${currUser.userID}/wallet`) // change the link as necessary
       console.log(result.data, "my wallet");
       setWallet(result.data)
       // setShare(shareResult.data)
       console.log(result.data);

       console.log("my wallet", wallet);
        const result2 = await axios.get(`https://orbital-1690047930899.azurewebsites.net/api/listTopUp/${id}`)
        setTopups(result2.data)

        const result3 = await axios.get(`https://orbital-1690047930899.azurewebsites.net/api/listWithdrawal/${id}`)
        setWds(result3.data)

   }

   // const percent = share.SHARE_COUNT_CURRENT / share.SHARE_COUNT_TOTAL

 return (
   <div className='container'>
    <div className='border rounded p-4 mt-2 shadow'>
    
       <div className="row">
           <div className="d-flex mx-2 align-items-center" style={{ textAlign: "left" }}>
               
                <div className="col-md-9">

                    <h3>Active Balance: ${wallet.activeBalance}</h3>
                </div>
                <div className='col-md-3'>
                    <Link className="btn btn-solid-dark m-2" to="/topup">
                        Top-up
                    </Link>
                    <Link className="btn btn-outline-dark m-2" to="/withdraw">
                        Withdraw
                    </Link>
                </div>
                
           </div>
        </div>
        <hr />
        <div className="row">
            <div class="nav nav-pills nav-fill bg-light rounded mx-2">
                <button className={ displayA ? 'btn btn-admin-dark flex-fill my-2 mx-1 shadow-sm' : 'btn btn-admin-inactive flex-fill my-2 mx-1'} onClick={() => showA()}>Recent Top-ups</button>
                <button className={ displayB ? 'btn btn-admin-dark flex-fill my-2 mx-1 shadow-sm' : 'btn btn-admin-inactive flex-fill my-2 mx-1'} onClick={() => showB()}>Recent Withdrawals</button>
            </div>
            {
                displayA
                ? <TopupList wallet={currUser.wallet} />
                : <WithdrawalListUser wallet={currUser.wallet} />
            }
            {/* <div className='col-md-6 mx-2' style={{ textAlign: "left" }}>
                <h4>Recent Top-ups</h4>
            </div>
            <div className='container'>
            <div className=''>
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
            </div> */}
            {/* <div className='col-md-6 mx-2' style={{ textAlign: "left" }}>
                <h4>Recent Withdrawals</h4>
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
   </div> */}
   </div>
   </div>
   </div>
 )
}
