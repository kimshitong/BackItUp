import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

export default function WithdrawalList() {

  // Initialise homepage to be blank
  const [wds, setWds] = useState([])

  useEffect(() => {
    loadWds()
  }, []);

  // Get list of users from database
  const loadWds = async () => {
    const result = await axios.get("http://localhost:8080/api/listWithdrawal")
    console.log(result);
    setWds(result.data)
    console.log(result.data);
  }

  const clickVerify = (withdrawalID) => {
    const date = new Date();
    const dt = date.toISOString().substr(0, 19);
    axios.get(`http://localhost:8080/api/withdrawal/verify/${withdrawalID}/${dt}`)
    alert("Successfully verified! Please refresh the page.")
  }

  const clickUnverify = (withdrawalID) => {
    const date = new Date();
    const dt = date.toISOString().substr(0, 19);
    axios.get(`http://localhost:8080/api/withdrawal/unverify/${withdrawalID}/${dt}`)
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
              <th scope="col">Withdrawal ID</th>
              <th scope="col">Amount</th>
              <th scope="col">Action</th>
              <th scope="col">Verified On</th>
            </tr>
          </thead>
          <tbody>
            {
              wds.map((wd, index) => (
                <tr>
                  <th scope="row" key="index">{index + 1}</th>
                  <td>{wd.withdrawalDT}</td>
                  <td>{wd.wallet.walletId}</td>
                  <td>{wd.withdrawalID}</td>
                  <td>{wd.withdrawalAmount}</td>
                  <td>
                    {wd.pendingStatus == true
                      ? <button className='btn btn-outline-success max-2' onClick={() => clickVerify(wd.withdrawalID)}>Verify</button>
                      : <button className='btn btn-outline-danger max-2' onClick={() => clickUnverify(wd.withdrawalID)}>Unverify</button>
                    }
                  </td>
                  <td>{wd.withdrawalDoneDT}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
