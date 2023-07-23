import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

export default function PostUser({ currUser }) {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    loadPosts()
  }, []);

  const loadPosts = async () => {
    const result = await axios.get(`https://orbital-1690142964708.azurewebsites.net/api/listPosts/comp/${currUser.userID}`)
    setPosts(result.data)
  }

  return (
    <div className="container">
      <div className="border rounded p-4 mt-2 shadow">
        <h2 className="m-1" style={{ textAlign: "left" }}>My Posts</h2>

        <div>
          <div className='py-4'>
            <table className="table border shadow">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Project</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  posts.map((post, index) => (
                    <tr>
                      <th scope="row" key="index">{index + 1}</th>
                      <td>
                        <Link to={`/post/${post.postID}`}>
                          {post.postTitle}
                        </Link>
                      </td>
                      <td>
                        <Link className="btn btn-solid-dark m-2" to={`/post/${post.postID}/edit`}>
                          Edit
                        </Link>
                      </td>
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

