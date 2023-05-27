import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Post() {

    // Initialise Post page to be blank
    const [post, setPost] = useState([])
    const [share, setShare] = useState([])

    // useEffect(() => {
    //     console.log('xx')
    // }, [] );

    // Get Post details from database
    const loadPost = async() => {
        const result = await axios.get("http://localhost:8080/users") // change the link as necessary
        const shareResult = await axios.get("xxx") // update link
        setPost(result.data)
        setShare(shareResult.data)
        console.log(result.data);
    }

    const percent = share.SHARE_COUNT_CURRENT / share.SHARE_COUNT_TOTAL

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                {/* change all of this to dynamic */}
                <h1>{post.POST_TITLE}</h1>
                <h3>Goal {percent}</h3>
                <p>{post.POST_CONTENT}</p>
                <a href="https://example.com/faq.html" rel="noreferrer"> { /* change the link */ }
                    Link to Pitch Deck
                </a>
                <br></br>
                <Link className="btn btn-primary btn-outline-light m-2" to="/invest">
                    Invest
                </Link>
            </div>
        </div>
    </div>
  )
}
