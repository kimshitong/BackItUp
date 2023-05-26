import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

    // Initialise homepage to be blank
    const [projects, setProjects] = useState([])

    useEffect(() => {
        console.log('xx')
    }, [] );

    // Get list of projects from database
    const loadProjects = async() => {
        const result = await axios.get("http://localhost:8080/users") // change the link
        setProjects(result.data)
        console.log(result.data);
    }

  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Founder</th> {/* change to 'Company'? */}
                    <th scope="col">Description</th> {/* see google sheet for db architecture, cell e37 */}
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projects.map((project, index) => (
                            <tr>
                            <th scope="row" key="index">{index + 1}</th>
                            <td>{project.title}</td>
                            <td>{project.username}</td>
                            <td>{project.description}</td>
                            <td>
                                <button className='btn btn-outline-primary max-2'>View</button>
                                <button className='btn btn-primary max-2'>Donate</button>
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
