import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

export default function Home() {

    // Initialise homepage to be blank
    const [posts, setPosts] = useState([])

    useEffect(() => {
        loadPosts();
    }, [] );

    // Get list of posts from database
    const loadPosts = async() => {
        const result = await axios.get("http://localhost:8080/api/listPost") // change the link
        setPosts(result.data)
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
                        posts.map((post, index) => (
                            <tr>
                            <th scope="row" key="index">{index + 1}</th>
                            <td>{post.POST_title}</td>
                            <td>{post.USER_ID}</td>
                            <td>{post.POST_CREATE_DT}</td> {/* placeholder, replace with short desc */}
                            <td>
                                <Link className="btn btn-outline-light" to="/post">
                                    View
                                </Link>
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
