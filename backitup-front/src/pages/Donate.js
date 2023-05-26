import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Donate() {

    let navigate = useNavigate()

    const [amt, setAmount] = useState("")

    const onInputChange = (event) => {
        const result = event.target.value.replace(/\D/g, '');
        setAmount(result);
    }

    // Post user donation info to database
    const onSubmit = async (event) => {
        event.preventDefault()
        await axios.post("http://localhost:8080/user", amt) // change link as necessary
        navigate("/")
    }

  return (
    
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Back the future now!</h2>
                <form onSubmit={(event) => onSubmit(event)}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            Amount
                        </label>
                        <input type={"text"} className="form-control" placeholder="Enter a number..." name="amt" value={amt} onChange={(event) => onInputChange(event)}/>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Donate Now!</button>
                </form>
            </div>
        </div>
    </div>
  )
}
