import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

export default function UsersList() {

    // Initialise homepage to be blank
    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [] );

    // Get list of users from database
    const loadUsers = async () => {
        const result = await axios.get("https://orbital-1687703004396.azurewebsites.net/users")
        console.log(result);
        setUsers(result.data)
        console.log(result.data);
    }

    const clickVerify = (userID) => {
        axios.get(`https://orbital-1687703004396.azurewebsites.net/${userID}/verify`)
        alert("Successfully verified! Please refresh the page.")
    }

    const clickUnverify = (userID) => {
        axios.get(`https://orbital-1687703004396.azurewebsites.net/${userID}/unverify`)
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
                        users.map((user, index) => (
                            <tr>
                            <th scope="row" key="index">{index + 1}</th>
                            <td>{user.userName}</td>
                            <td>{user.userEmail}</td>
                            <td>{user.userHP}</td> {/* placeholder, replace with short desc */}
                            <td>{user.userPass}</td>
                            <td>{user.userType}</td>
                            <td>
                                {
                                    user.userVerified ? 'Y' : 'N'
                                }
                            </td>
                            <td>{user.userEvidence}</td>
                            <td>
                                {!user.userVerified
                                    ? <button className='btn btn-outline-primary max-2' onClick={() => clickVerify(user.userID)}>Verify</button>
                                    : <button className='btn btn-outline-primary max-2' onClick={() => clickUnverify(user.userID)}>Unverify</button>
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
