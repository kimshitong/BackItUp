import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddUser() {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        email: ""
    })

    const {name, email} = user;

    const onInputChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    // Post user registration info to database
    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            // Create a wallet.java
            // const walletResponse = await axios.get('http://localhost:8080/api/wallet', {})
            // var data =walletResponse.data;
            // var walletId = walletResponse.data.WALLET_ID;
            // console.log(walletId)
            // console.log(data)

            const data = {
                USER_NAME: name,
                USER_HP: "0122155420",
                USER_EMAIL: email,
                USER_PASS: "password",
                USER_TYPE: "user"
              };
            

      
              console.log(data)
            // Create a user with the created wallet.java
            const response = await axios.post('http://localhost:8080/api/createUser', data, {
                headers: {
                  'Content-Type': 'application/json'
                }
            }
            
            );
            console.log(response.data);

            // console.log(response.data); // The created user object returned from the backend
          } catch (error) {
            console.error(error);
            console.log("diu")
          }
  
        navigate("/")
    };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Register User</h2>
                <form onSubmit={(event) => onSubmit(event)}>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        Name
                    </label>
                    <input type={"text"} className="form-control" placeholder="Enter your name..." name="name" value={name} onChange={(event) => onInputChange(event)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                        Email
                    </label>
                    <input type={"text"} className="form-control" placeholder="kim@backitup.com" name="email" value={email} onChange={(event) => onInputChange(event)}/>
                </div>
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                </form>
            </div>
            
        </div>
    </div>

  )
}
