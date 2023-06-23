import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import moment from 'moment'

export default function UsersList() {

    // Initialise homepage to be blank
    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [] );

    // Get list of users from database
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/api/listTopup")
        console.log(result);
        setUsers(result.data)
        console.log(result.data);
    }

    const clickVerify = (user) => {
        const date = new Date();
        const formattedDate = date.toISOString().substr(0, 19);
        // const today = new Date()
        // const now = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + 'T' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
        // console.log(moment(new Date(), moment.ISO_8601).toISOString);
        axios.get(`http://localhost:8080/api/topup/verify/${user.topupID}/${formattedDate}`)
        alert("Successfully verified! Please refresh the page.")
    }

    const clickUnverify = (userID) => {
        axios.get(`http://localhost:8080/${userID}/unverify`)
        alert("Successfully unverified! Please refresh the page.")
    }

  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Wallet ID</th>
                    <th scope="col">Top-up ID</th>
                    <th scope="col">Amount</th>{/* change to 'Company'? */}
                    <th scope="col">Action</th>{/* see google sheet for db architecture, cell e37 */}
                    <th scope="col">Verified on</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                            <th scope="row" key="index">{index + 1}</th>
                            <td>{user.topupDT}</td>
                            <td>{user.wallet.walletId}</td>
                            <td>{user.topupID}</td>
                            <td>{user.topupAmount}</td> {/* placeholder, replace with short desc */}
                            <td>
                                {user.pendingStatus
                                    ? <button className='btn btn-outline-primary max-2' onClick={() => clickVerify(user)}>Verify</button>
                                    : <button className='btn btn-outline-primary max-2' onClick={() => clickUnverify(user)}>Unverify</button>
                                }
                            </td>
                            <td>{user.topupDoneDT}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
