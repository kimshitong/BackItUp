import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

const Search = (props) => {
    return (
      <form>
          <div>
            Search by title
            <input className="m-2" value={props.filterBy} onChange={props.changeBy}/>
            ESG only
            <input className="m-2" type="checkbox" onChange={props.filterHandler} />
        </div>
      </form>
    )
  }

export default function Home() {

    // Initialise homepage to be blank
    const [posts, setPosts] = useState([])
    const [showAll, setShowAll] = useState('')
    const [esg, setEsg] = useState(false)

    useEffect(() => {
        loadPosts();
    }, [] );

    // Get list of posts from database
    const loadPosts = async() => {
        const result1 = await axios.get("http://localhost:8080/api/listPosts/status/1") // change the link
        const result2 = await axios.get("http://localhost:8080/api/listPosts/status/2")
        setPosts([...result1.data, ...result2.data])
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
    <div className='container'>
        <div className='py-4'>
            <Search filterBy={showAll} changeBy={handleSearchChange} filterHandler={filterHandler}/>
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Founder</th> {/* change to 'Company'? */}
                        <th scope="col">Description</th> {/* see google sheet for db architecture, cell e37 */}
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
            </table>
        </div>
    </div>
  )
}
