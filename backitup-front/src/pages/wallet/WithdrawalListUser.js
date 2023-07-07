import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

export default function WithdrawalListUser({wallet}) {

    // Initialise homepage to be blank
    const [wds, setWds] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadTopups()
    }, [] );

    // Get list of users from database
    const loadTopups = async () => {
        
        console.log("my wallet", wallet);
        const result = await axios.get(`http://localhost:8080/api/listWithdrawal/${wallet.wallet_ID}`)
        setWds(result.data)
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }

    // const clickVerify = (userID) => {
    //     axios.get(`http://localhost:8080/api/invest/${shareid}/${userID}/${share_amount}/${dt}`)
    //     alert("Successfully verified! Please refresh the page.")
    // }

  return (
    <div className='container'>
        <div className='py-4'>
            {loading ? "Loading..." :
            <table className="table border shadow-sm">
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
}
        </div>
    </div>
  )
}
