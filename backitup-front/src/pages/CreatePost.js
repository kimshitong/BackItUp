import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreatePost({currUser}) {

    let navigate = useNavigate()

    const [post, setPost] = useState({
        post_TITLE: "",
        post_DESCRIPTION: "",
        post_CONTENT: "",
        post_SUSTAINABLE: "",
        postURL: "",
        SHARE_COUNT_TOTAL: "",
        SHARE_COUNT_PRICE: "",
        SHARE_COUNT_MIN: ""
    })

    const {post_TITLE, post_CONTENT, post_DESCRIPTION, post_SUSTAINABLE, postURL,
        SHARE_COUNT_TOTAL, SHARE_COUNT_PRICE, SHARE_COUNT_MIN } = post;

    const [checked, setChecked] = useState(false)

    const handleCheckChange = (event) => {
        setChecked(!checked);
        console.log(checked);
    }

    const handleChange = (event) => {
        setPost({...post, [event.target.name]: event.target.value});
    }

    // Post user registration info to database
    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            const apiUrl = '/api/createPost';
            const date = new Date();
            const exp = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000)
            const formattedExp = exp.toISOString().substr(0, 19)
            const formattedDate = date.toISOString().substr(0, 19);
            const pdata = {
                postTitle: post_TITLE,
                postDescription: post_DESCRIPTION,
                postContent: post_CONTENT,
                postURL: postURL,
                postSustainable: checked,
                shareCountTotal: parseInt(SHARE_COUNT_TOTAL),
                shareCountMin: parseInt(SHARE_COUNT_MIN),
                shareCountCurrent: 0,
                shareCountPrice: parseFloat(SHARE_COUNT_PRICE),
                postStatus: 0,
                postCreateDT: formattedDate,
                postExpireDT: formattedExp,
                userID: currUser.userID
              };

              console.log(pdata)

            //   fetch(apiUrl, {
            //     method: 'POST',
            //     headers: {
            //       'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(pdata)
            //   })
            //     .then(response => response.json())
            //     .then(data => {
            //       // Handle the response data
            //       console.log(data);
            //     })
              
            // Create a user with the created wallet.java
            const response = await axios.post(`https://orbital-1687703004396.azurewebsites.net/api/createPost`, pdata, {
                headers: {
                  'Content-Type': 'application/json'
                }
            }
            
            );
            console.log("post creation success");

            // console.log(response.data); // The created user object returned from the backend
          } catch (error) {
            console.error(error);
            console.log("post creation failure")
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
                        placeholder="Tinder for Pets"
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
                        placeholder="A summary of why your idea will change the world..."
                        name="post_CONTENT"
                        value={post_CONTENT}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="Description"
                        className="form-label">
                        Description
                    </label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="Your project in one line"
                        name="post_DESCRIPTION"
                        value={post_DESCRIPTION}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="ESG"
                        className="form-label">
                        Sustainable
                    </label>
                    <input
                        type="checkbox"
                        value={post_SUSTAINABLE}
                        onChange={(event) => handleCheckChange(event)} />                       
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
                        placeholder="Ensure it is publicly visible!"
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
                        placeholder="999"
                        name="SHARE_COUNT_TOTAL"
                        value={SHARE_COUNT_TOTAL}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="shareCountPrice"
                        className="form-label">
                        Share Price
                    </label>
                    <input 
                        type={"text"} 
                        className="form-control"
                        placeholder="Round off to the nearest 0.01"
                        name="SHARE_COUNT_PRICE"
                        value={SHARE_COUNT_PRICE}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
               
                <div className="mb-3">
                    <label
                        htmlFor="shareCountMin"
                        className="form-label">
                        Minimum Purchase
                    </label>
                    <input
                        type={"text"}
                        className="form-control"
                        placeholder="1"
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