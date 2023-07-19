import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import extLink from '../images/ext-link.png'
import Loader from '../components/Loader.jsx'

export default function Post({isAuth, setPageTitle}) {

    // Initialise Post page to be blank
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState([])
    const [share, setShare] = useState([])
    const {id} = useParams()

    console.log('id is', id);

    useEffect(() => {
        loadPost()
        
    }, [] );

    // Get Post details from database
    const loadPost = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/api/post/${id}`) // change the link as necessary
            setPost(result.data);
            setShare((result.data.share.shareCountCurrent * 100) / result.data.share.shareCountTotal);
            setPageTitle(`${result.data.postTitle} • BackItUp`);
            setTimeout(() => {
                setLoading(false);
            }, 700)
            // console.log(result.data);
            // console.log(share);
        } catch (error) {
            // console.log(error);
        }
    }

    // const percent = share.SHARE_COUNT_CURRENT / share.SHARE_COUNT_TOTAL

  return (
    <div className='container'>
        
        {loading
        
        ? <div className='container-center-login'><Loader /></div>
        
        :
        <div class="container my-5">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                
            <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 class="display-4 fw-bold lh-1" style={{ textAlign: "left" }}>{post.postTitle}</h1>
                <p class="lead" style={{ textAlign: "left" }}>{post.postDescription}</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <Link className="btn btn-solid-dark btn-lg px-4 me-md-2 fw-bold" to={isAuth.isLoggedIn ? `/invest/${id}` : `/oops`} >
                        Invest
                    </Link>
                </div>
            </div>
            <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <img class="rounded-lg-3" src="bootstrap-docs.png" alt="" width="720"/>
            </div>
            </div>
            <div>
                
            </div>
            <div className="row mt-5 mx-5">
           
                <div className="col-md-8"  style={{ textAlign: "left" }}>
                    <div class="progress mb-3">
                        <div class="progress-bar bg-success" style={{ width: `${share}%` }} role="progressbar" aria-valuenow={{ share }} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h2>{post.postDescription}</h2>
                    <p>{post.postContent}</p>
                    <a href="https://example.com/faq.html" rel="noreferrer" className='text-align-center'> { /* change the link */ }
                        Link to Pitch Deck
                        <img src={extLink} alt="Link to Pitch Deck" style={{ height: 12, margin: 5 }}/>
                    </a>
                    <br></br>
                    
                </div>
                <div className="col-md-3 offset-md-1">
                    <div style={{ textAlign: "left" }}>
                        <p><strong>A PROUD PROJECT BY</strong></p>
                        <h3>{post.user.userName}</h3>
                        <p><strong>SHARE PRICE</strong></p>
                        <h3>{post.share.shareCountPrice}</h3>
                        
                        <p><strong>REMAINING SHARES</strong></p>
                        <h3>{post.share.remainingShare}</h3>
                    </div>
                    
                    <Link className="btn btn-solid-dark btn-lg px-4 me-md-2 fw-bold mt-5 d-flex justify-content-center" to={isAuth.isLoggedIn ? `/invest/${id}` : `/oops`} >
                        Invest
                    </Link>
                </div>
                
            </div>
            
        </div>
        }
    </div>
  )
}
