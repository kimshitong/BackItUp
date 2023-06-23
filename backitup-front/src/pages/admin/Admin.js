import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import UsersList from './UsersList'
import PaymentList from './PaymentList'
import TopupList from './TopupList'
import WithdrawalList from './WithdrawalList'

export default function Admin() {

    const [ displayA, setDisplayA ] = useState(true) // users
    const [ displayB, setDisplayB ] = useState(false) // payments
    const [ displayC, setDisplayC ] = useState(false) // topup
    const [ displayD, setDisplayD ] = useState(false) // withdrawal

    const showA = () => {
        setDisplayA(true)
        setDisplayB(false)
        setDisplayC(false)
        setDisplayD(false)
    }

    const showB = () => {
        setDisplayA(false)
        setDisplayB(true)
        setDisplayC(false)
        setDisplayD(false)
    }

    const showC = () => {
        setDisplayA(false)
        setDisplayB(false)
        setDisplayC(true)
        setDisplayD(false)
    }

    const showD = () => {
        setDisplayA(false)
        setDisplayB(false)
        setDisplayC(false)
        setDisplayD(true)
    }

  return (
    <div className='container'>
        <br></br>
        <button className='btn btn-outline-primary max-2 m-2' onClick={() => showA()}>Users</button>
        <button className='btn btn-outline-primary max-2 m-2' onClick={() => showB()}>Investments</button>
        <button className='btn btn-outline-primary max-2 m-2' onClick={() => showC()}>Top-ups</button>
        <button className='btn btn-outline-primary max-2 m-2' onClick={() => showD()}>Withdrawals</button>
        {
            displayA
            ? <UsersList />
            : displayB
            ? <PaymentList />
            : displayC
            ? <TopupList />
            : <WithdrawalList />
              
        }
    </div>
  )
}
