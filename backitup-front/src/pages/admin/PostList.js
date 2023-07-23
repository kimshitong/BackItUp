import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

export default function PostList() {

    // Initialise homepage to be blank
    const [posts, setPosts] = useState([])

    useEffect(() => {
        loadPosts()
    }, [] );

    // Get list of users from database
    const loadPosts = async () => {
        const result = await axios.get("http://localhost:8080/api/listPosts")
        console.log(result);
        setPosts(result.data)
        console.log(result.data);
    }

    const clickVerify = (postID) => {
        const date = new Date();
        const formattedDate = date.toISOString().substr(0, 19);
        axios.get(`http://localhost:8080//api/post/verify/${postID}/${formattedDate}`)
        alert("Successfully verified! Please refresh the page.")
    }

    const clickUnverify = (postID) => {
        const date = new Date();
        const formattedDate = date.toISOString().substr(0, 19);
        axios.get(`http://localhost:8080//api/post/unverify/${postID}/${formattedDate}`)
        alert("Successfully unverified! Please refresh the page.")
    }

  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table border shadow">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Post Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Pitch Deck</th>{/* change to 'Company'? */}
                    <th scope="col">Action</th>{/* see google sheet for db architecture, cell e37 */}
                    <th scope="col">Verified on</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post, index) => (
                            <tr>
                            <th scope="row" key="index">{index + 1}</th>
                            <td>{post.postCreateDT}</td>
                            <td>{post.postTitle}</td>
                            <td>{post.postDescription}</td> {/* placeholder, replace with short desc */}
                            <td>{post.postURL}</td>
                            <td>
                                {post.pendingStatus
                                    ? <button className='btn btn-outline-success max-2' onClick={() => clickVerify(post.postID)}>Verify</button>
                                    : <button className='btn btn-outline-danger max-2' onClick={() => clickUnverify(post.postID)}>Unverify</button>
                                }
                            </td>
                            <td>{post.postApprovedDT}</td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
