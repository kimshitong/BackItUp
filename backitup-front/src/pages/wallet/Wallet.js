import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import TopupList from "./TopupList"
import WithdrawalListUser from "./WithdrawalListUser"

export default function Wallet({ currUser }) {

  // Initialise Wallet page to be blank
  const [wallet, setWallet] = useState([])
  const [invs, setInvs] = useState([])
  const [topups, setTopups] = useState([])
  const [wds, setWds] = useState([])
  const { id } = useParams()

  const [displayA, setDisplayA] = useState(true) // topups
  const [displayB, setDisplayB] = useState(false) // withdrawals

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
  }, []);

  // Get Post details from database
  const loadWallet = async () => {
    const result = await axios.get(`http://localhost:8080/api/user/${currUser.userID}/wallet`) // change the link as necessary
    setWallet(result.data)

    console.log("my wallet", wallet);
    const result2 = await axios.get(`http://localhost:8080/api/listTopUp/${id}`)
    setTopups(result2.data)

    const result3 = await axios.get(`http://localhost:8080/api/listWithdrawal/${id}`)
    setWds(result3.data)

  }


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
            <button className={displayA
              ? 'btn btn-admin-dark flex-fill my-2 mx-1 shadow-sm'
              : 'btn btn-admin-inactive flex-fill my-2 mx-1'}
              onClick={() => showA()}>Recent Top-ups</button>
            <button className={displayB
              ? 'btn btn-admin-dark flex-fill my-2 mx-1 shadow-sm'
              : 'btn btn-admin-inactive flex-fill my-2 mx-1'}
              onClick={() => showB()}>Recent Withdrawals</button>
          </div>
          {
            displayA
              ? <TopupList wallet={currUser.wallet} />
              : <WithdrawalListUser wallet={currUser.wallet} />
          }
        </div>
      </div>
    </div>
  )
}
