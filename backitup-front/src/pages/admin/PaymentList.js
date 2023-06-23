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
        const result = await axios.get("http://localhost:8080/api/listPayment")
        console.log(result);
        setPmts(result.data)
        console.log(result.data);
    }

    const clickVerify = (userID) => {
        axios.get(`http://localhost:8080/${userID}/verify`)
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
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>{/* change to 'Company'? */}
                    <th scope="col">HP</th>{/* see google sheet for db architecture, cell e37 */}
                    <th scope="col">Password</th>
                    <th scope="col">Type</th>
                    <th scope="col">Verified</th>
                    <th scope="col">Documents</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pmts.map((pmt, index) => (
                            <tr>
                            <th scope="row" key="index">{index + 1}</th>
                            
                            <td>
                                {
                                    pmt.userVerified ? 'Y' : 'N'
                                }
                            </td>
                            <td>
                                {!pmt.userVerified
                                    ? <button className='btn btn-outline-primary max-2' onClick={() => clickVerify(pmt.userID)}>Verify</button>
                                    : <button className='btn btn-outline-primary max-2' onClick={() => clickUnverify(pmt.userID)}>Unverify</button>
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
