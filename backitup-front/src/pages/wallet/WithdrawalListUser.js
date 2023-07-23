import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import Loader from '../../components/Loader.jsx'

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
        const result = await axios.get(`https://orbital-1690146023037.azurewebsites.net/api/listWithdrawal/${wallet.wallet_ID}`)
        setWds(result.data)
            setLoading(false);
     }

  return (
    <div className='container'>
        <div className='py-4 d-flex align-items-center justify-content-center'>
            {loading ? <Loader/> :
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
