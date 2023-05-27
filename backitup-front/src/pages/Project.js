import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Project() {

    // Initialise project page to be blank
    const [project, setProject] = useState([])

    // useEffect(() => {
    //     console.log('xx')
    // }, [] );

    // Get project details from database
    const loadProject = async() => {
        const result = await axios.get("http://localhost:8080/users") // change the link as necessary
        setProject(result.data)
        console.log(result.data);
    }

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                {/* change all of this to dynamic */}
                <h1>Title</h1>
                <h3>% of goal</h3>
                <p>content content content</p>
                <a href="https://example.com/faq.html" rel="noreferrer"> { /* change the link */ }
                    Link to Pitch Deck
                </a>
                <br></br>
                <Link className="btn btn-primary btn-outline-light m-2" to="/donate">
                    Donate
                </Link>
            </div>
        </div>
    </div>
  )
}
