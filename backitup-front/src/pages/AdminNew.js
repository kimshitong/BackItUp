// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Link } from "react-router-dom"

// const Filter = (props) => {
//     return (
//       <div>
//         <input type="radio" value="Users" />Users
        
//         <input type="radio" value="Investments" />Investments
        
//         <input type="radio" value="Wallet" />Wallet
//       </div>
//     )
//   }

//   const onChangeValue = (e) => {
//     setFilter(e.target.value)
//   }

// export default function Admin() {

//     <Filter onChange={onChangeValue}/>

//     const [filter, setFilter] = useState("users") // default view is users

//     // Initialise homepage to be blank
//     const [users, setUsers] = useState([])

//     useEffect(() => {
//         loadUsers()
//     }, [] );

//     // Get list of users from database
//     const loadUsers = async () => {
//         // if users
//         if (filter == "Users") {
//             const result = await axios.get("httpss:/orbitbi-169004users")
//             console.log(result);
//             setUsers(result.data)
//             console.log(result.data);
//         } else if (filter == "Investments") {

//         } else if (filter == "Wallet") {
            
//         }
        
//     }

//     const clickVerify = (userID) => {
//         axios.get(`httpss:/orbitbi-169004${userID}/verify`)
//         alert("Successfully verified! Please refresh the page.")
//     }

//     const clickUnverify = (userID) => {
//         axios.get(`http://localhost:8080/${userID}/unverify`)
//         alert("Successfully unverified! Please refresh the page.")
//     }

//   return (
//     <div className='container'>
        
//     </div>
//   )
// }
