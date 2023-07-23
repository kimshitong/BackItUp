import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

export default function UsersList() {

  // Initialise homepage to be blank
  const [users, setUsers] = useState([])

  useEffect(() => {
    loadUsers()
  }, []);

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
              <th scope="col">Amount</th>
              <th scope="col">Action</th>
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
                  <td>{user.topupAmount}</td>
                  <td>
                    {user.pendingStatus
                      ? <button className='btn btn-outline-success max-2' onClick={() => clickVerify(user)}>Verify</button>
                      : <button className='btn btn-outline-danger max-2' onClick={() => clickUnverify(user)}>Unverify</button>
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
