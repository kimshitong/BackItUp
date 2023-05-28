import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddUser() {

    let navigate = useNavigate()

    const [post, setPost] = useState({
        post_TITLE: "",
        post_DESCRIPTION: "",
        post_CONTENT: "",
        postURL: "",
        SHARE_COUNT_TOTAL: "",
        SHARE_COUNT_PRICE: "",
        SHARE_COUNT_MIN: ""
    })

    const {post_TITLE, post_CONTENT, postURL,
        SHARE_COUNT_TOTAL, SHARE_COUNT_PRICE, SHARE_COUNT_MIN } = post;

    const handleChange = (event) => {
        setPost({...post, [event.target.name]: event.target.value});
    }

    // Post user registration info to database
    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            const data = {
                postTitle: post_TITLE,
                postDescription: "",
                postContent: post_CONTENT,
                postURL: postURL,
                shareCountTotal: SHARE_COUNT_TOTAL,
                shareCountMin: SHARE_COUNT_MIN,
                shareCountCurrent: "0",
                shareCountPrice: SHARE_COUNT_PRICE,
                postStatus: "0",
                postCreateDT: new Date().toLocaleString()
              };

              console.log(data)
              
            // Create a user with the created wallet.java
            const response = await axios.post('http://localhost:8080/api/createPost/{}', data, {
                headers: {
                  'Content-Type': 'application/json'
                }
            }
            
            );
            console.log(response.data);

            // console.log(response.data); // The created user object returned from the backend
          } catch (error) {
            console.error(error);
            console.log("diu")
          }
  
        navigate("/")
    };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Start your journey today.</h2>
                <form onSubmit={(event) => onSubmit(event)}>
                <div className="mb-3">
                    <label
                        htmlFor="Title"
                        className="form-label">
                        Title
                    </label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="Kim"
                        name="post_TITLE"
                        value={post_TITLE}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="Content"
                        className="form-label">
                        Content
                    </label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="kim@backitup.com"
                        name="post_CONTENT"
                        value={post_CONTENT}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="Pitch"
                        className="form-label">
                        Link to Pitch Deck
                    </label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="+65 9123 4567"
                        name="postURL"
                        value={postURL}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="shareCountTotal"
                        className="form-label">
                        Total Number of Shares
                    </label>
                    <input 
                        type={"text"} 
                        className="form-control"
                        placeholder="Please choose a strong password e.g. 0Rb1tA1!"
                        name="SHARE_COUNT_TOTAL"
                        value={SHARE_COUNT_TOTAL}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="shareCountPrice"
                        className="form-label">
                        Account Type
                    </label>
                    <input 
                        type={"text"} 
                        className="form-control"
                        placeholder="Please choose a strong password e.g. 0Rb1tA1!"
                        name="SHARE_COUNT_PRICE"
                        value={SHARE_COUNT_PRICE}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
               
                <div className="mb-3">
                    <label
                        htmlFor="shareCountMin"
                        className="form-label">
                        Documents
                    </label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="Insert public shareable link"
                        name="SHARE_COUNT_MIN"
                        value={SHARE_COUNT_MIN}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <button type="submit" className="btn btn-outline-primary">Submit</button>
                </form>
            </div>
            
        </div>
    </div>

  )
}