import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

    // Initialise homepage to be blank
    const [projects, setProjects] = useState([])

    useEffect(() => {
        loadProjects();
    }, [] );

    // Get list of projects from database
    const loadProjects = async() => {
        console.log("xex")

        const result = await axios.get("http://localhost:8080/api/listPost") // change the link
        setProjects(result.data)
        // list of posts : [ [], [], ['name' : ,':']]
        console.log(result.data);
        console.log("xex")
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
                            <td>{project.post_TITLE}</td>
                            <td>{project.user.user_NAME}</td>
                            <td>{project.post_CONTENT}</td>
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
