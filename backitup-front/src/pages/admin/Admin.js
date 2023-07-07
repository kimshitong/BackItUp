import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import UsersList from './UsersList'
import PaymentList from './PaymentList'
import TopupList from './TopupList'
import WithdrawalList from './WithdrawalList'
import PostList from './PostList'

export default function Admin({setUserType}) {

    const [ displayA, setDisplayA ] = useState(true) // users
    const [ displayB, setDisplayB ] = useState(false) // payments
    const [ displayC, setDisplayC ] = useState(false) // topup
    const [ displayD, setDisplayD ] = useState(false) // withdrawal
    const [ displayE, setDisplayE ] = useState(false) // post

    useEffect(() => {
        setUserType("Admin")
      }, [] )

    const showA = () => {
        setDisplayA(true)
        setDisplayB(false)
        setDisplayC(false)
        setDisplayD(false)
        setDisplayE(false)
    }

    const showB = () => {
        setDisplayA(false)
        setDisplayB(true)
        setDisplayC(false)
        setDisplayD(false)
        setDisplayE(false)
    }

    const showC = () => {
        setDisplayA(false)
        setDisplayB(false)
        setDisplayC(true)
        setDisplayD(false)
        setDisplayE(false)
    }

    const showD = () => {
        setDisplayA(false)
        setDisplayB(false)
        setDisplayC(false)
        setDisplayD(true)
        setDisplayE(false)
    }

    const showE = () => {
        setDisplayA(false)
        setDisplayB(false)
        setDisplayC(false)
        setDisplayD(false)
        setDisplayE(true)
    }


  return (
    <div className='container'>
        
        <br></br>
        <div class="nav nav-pills nav-fill bg-light rounded">
            <button className={ displayA ? 'btn btn-admin-dark flex-fill my-2 mx-1 shadow-sm' : 'btn btn-admin-inactive flex-fill my-2 mx-1'} onClick={() => showA()}>Users</button>
            <button className={ displayB ? 'btn btn-admin-dark flex-fill my-2 mx-1 shadow-sm' : 'btn btn-admin-inactive flex-fill my-2 mx-1'} onClick={() => showB()}>Investments</button>
            <button className={ displayC ? 'btn btn-admin-dark flex-fill my-2 mx-1 shadow-sm' : 'btn btn-admin-inactive flex-fill my-2 mx-1'} onClick={() => showC()}>Top-ups</button>
            <button className={ displayD ? 'btn btn-admin-dark flex-fill my-2 mx-1 shadow-sm' : 'btn btn-admin-inactive flex-fill my-2 mx-1'} onClick={() => showD()}>Withdrawals</button>
            <button className={ displayE ? 'btn btn-admin-dark flex-fill my-2 mx-1 shadow-sm' : 'btn btn-admin-inactive flex-fill my-2 mx-1'} onClick={() => showE()}>Posts</button>
        </div>
        
        {
            displayA
            ? <UsersList />
            : displayB
            ? <PaymentList />
            : displayC
            ? <TopupList />
            : displayD
            ? <WithdrawalList />
            : <PostList />
              
        }
    </div>
  )
}
