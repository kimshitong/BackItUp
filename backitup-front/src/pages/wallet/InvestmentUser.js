import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

export default function InvestmentUser({currUser}) {
    
    const [invs, setInvs] = useState([])  

    useEffect(() => {
        loadInvs()
    }, [] );
    
    const loadInvs = async () => {
        const result = await axios.get(`http://localhost:8080/api/listinvest/user/${currUser.userID}`)
        setInvs(result.data)
    }

  return (
    <div className="container">
        <div className="border rounded p-4 mt-2 shadow">
            <h2 className="m-1" style={{ textAlign: "left" }}>Portfolio</h2>
           
            <div>
                <div className='py-4'>
                    <table className="table border shadow">
                        <thead>
                            <tr>
                            <th scope="col">#</th>    
                            <th scope="col">Project</th>
                            <th scope="col">Company</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                invs.map((inv, index) => (
                                    <tr>
                                    <th scope="row" key="index">{index + 1}</th>
                                    <td>{inv.topupID}</td> /** need to fix */
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

