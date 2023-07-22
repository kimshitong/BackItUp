import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

export default function PaymentsList() {

    // Initialise homepage to be blank
    const [pmts, setPmts] = useState([])

    useEffect(() => {
        loadPmts()
    }, [] );

    // Get list of pmts from database
    const loadPmts = async () => {
        const result = await axios.get("https://orbital-1690047930899.azurewebsites.net/api/listPayment")
        console.log(result);
        setPmts(result.data)
        console.log(result.data);
    }

    const clickVerify = (paymentId) => {
        axios.get(`https://orbital-1690047930899.azurewebsites.net/${paymentId}/verify`)
        alert("Successfully verified! Please refresh the page.")
    }

    const clickUnverify = (paymentId) => {
        axios.get(`https://orbital-1690047930899.azurewebsites.net/${paymentId}/unverify`)
        alert("Successfully unverified! Please refresh the page.")
    }

  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Payer</th>{/* change to 'Company'? */}
                    <th scope="col">Payee</th>{/* see google sheet for db architecture, cell e37 */}
                    <th scope="col">Verified</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pmts.map((pmt, index) => (
                            <tr>
                            <th scope="row" key="index">{index + 1}</th>
                            <td>{pmt.paymentId}</td>
                            <td>{pmt.paymentDt}</td>
                            <td>{pmt.paymentAmount}</td>
                            <td>{pmt.walletFrom.walletId}</td>
                            <td>{pmt.walletTo.walletId}</td>
                            <td>
                                {
                                    pmt.userVerified ? 'Y' : 'N'
                                }
                            </td>
                            <td>
                                {!pmt.userVerified
                                    ? <button className='btn btn-outline-success max-2' onClick={() => clickVerify(pmt.paymentId)}>Verify</button>
                                    : <button className='btn btn-outline-danger max-2' onClick={() => clickUnverify(pmt.paymentId)}>Unverify</button>
                                }
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
