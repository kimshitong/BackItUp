import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import "../styles/styles.css"
import Search from "../components/Search"

export default function Home({setPageTitle, setUserType}) {

    // Initialise homepage to be blank
    const [posts, setPosts] = useState([])
    const [showAll, setShowAll] = useState('')
    const [esg, setEsg] = useState(false)

    useEffect(() => {
        loadPosts();
        setUserType("")
    }, [] );

    // Get list of posts from database
    const loadPosts = async() => {
        const result1 = await axios.get("http://localhost:8080/api/listPosts/status/1") // change the link
        const result2 = await axios.get("http://localhost:8080/api/listPosts/status/2")
        setPosts([...result1.data, ...result2.data])
        setPageTitle("BackItUp • Equity crowd-funding made easy")
        // console.log(result.data);
    }

    const handleSearchChange = (event) => {
        event.preventDefault()
        setShowAll(event.target.value)
    }

    const filterHandler = (event) => {
        if (event.target.checked) {
          setEsg(true)
        } else {
          setEsg(false)
        }
      }

    const postsToShow = (showAll === '') && !esg
    ? posts
    : showAll === ''
    ? posts.filter(post => post.postSustainable)
    : esg
    ? posts.filter(post => post.postTitle.toLowerCase().includes(showAll)).filter(post => post.postSustainable)
    : posts.filter(post => post.postTitle.toLowerCase().includes(showAll))
    
  return (
    <div className='container-fluid'>
        <div className='py-4'>
            <h1 style={{ textAlign: "left" }}>Latest Posts</h1>
            <div>
                <Search filterBy={showAll} changeBy={handleSearchChange} filterHandler={filterHandler} setEsg={setEsg} />
            </div>
            <div className="grid-container">
              {postsToShow.map((post, index) => (
                <Link key={index} className="card text-right" to={'/post/' + post.postID}>
                    {/* <img class="card-img-top" src="..." alt="Card image cap"></img> */}
                    <div class="card-body" style={{ textAlign: "left" }}>
                        <p class="card-text" className="text-left">{post.postTitle}</p>
                        <p class="card-text">{post.user.userName}</p>
                        <p class="card-text">{post.postDescription}</p>
                        <p class="card-text">{post.postSustainable ? 'Y' : 'N'}</p>
                    </div>
                  
                </Link>
                ))}
            </div>
            <div class="card bg-dark text-black mt-5">
                {/* <img class="card-img" src="..." alt="Card image" /> */}
                <div class="card">
                    <h5 class="card-title m-3">Can't find what you're looking for?</h5>
                    <p class="card-text">Be the change that you want to see in the world. Create your own post to make your dreams a reality.</p>
                    <Link class="btn card-text mb-3" to="/adduser">Start Now.</Link>
                </div>
            </div>
            {/* <table className="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Company</th>
                        <th scope="col">Description</th>
                        <th scope="col">ESG</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        postsToShow.map((post, index) => (
                            <tr>
                            <th scope="row" key="index">{index + 1}</th>
                            <td>{post.postTitle}</td>
                            <td>{post.user.userName}</td>
                            <td>{post.postDescription}</td>
                            <td>{post.postSustainable ? 'Y' : 'N'}</td>
                            <td>
                                <Link className="btn btn-outline-primary" to={'/post/' + post.postID} >
                                    View
                                </Link>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table> */}
        </div>
    </div>
  )
}
