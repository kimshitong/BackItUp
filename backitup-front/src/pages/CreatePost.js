import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/styles.css'

export default function CreatePost({currUser, setPageTitle}) {

    let navigate = useNavigate()

    const [post, setPost] = useState({
        post_TITLE: "",
        post_DESCRIPTION: "",
        post_CONTENT: "",
        post_SUSTAINABLE: "",
        postURL: "",
        SHARE_COUNT_TOTAL: "",
        SHARE_COUNT_PRICE: "",
        SHARE_COUNT_MIN: "",
        post_RAISED_DT: ""
    })

    const [postRaiseDate, setPostRaiseDate] = useState(new Date());
    const [postEndDate, setPostEndDate] = useState(new Date());

    const [photo, setPhoto] = useState(null)

    const {post_TITLE, post_CONTENT, post_DESCRIPTION, post_SUSTAINABLE, postURL,
        SHARE_COUNT_TOTAL, SHARE_COUNT_PRICE, SHARE_COUNT_MIN , post_RAISED_DT } = post;

    const [checked, setChecked] = useState(false)
    const [value, setValue] = useState("0")

    useEffect(() => {
        setPageTitle("Create Post • BackItUp") 
    }, [] )

    const handleCheckChange = (event) => {
        setChecked(!checked);
    }

    const handleFileChange = (e) => {
        setPhoto(e.target.files[0])
    }


    const handleChange = (event) => {
        // testing valuation
        // console.log(parseInt(SHARE_COUNT_TOTAL), "total is");
        // console.log(parseFloat(SHARE_COUNT_PRICE), "price is");
        setValue(parseInt(SHARE_COUNT_TOTAL) * parseFloat(SHARE_COUNT_PRICE))
        setPost({...post, [event.target.name]: event.target.value});
        // console.log(SHARE_COUNT_TOTAL);
        console.log(post);
    }

    // Post user registration info to database
    const onSubmit = async (event) => {
        event.preventDefault()
        try {
            const apiUrl = '/api/createPost';
            const date = new Date();
            // const exp = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000)
            // const formattedExp = exp.toISOString().substr(0, 19)
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
                postRaisedDT: postRaiseDate.toISOString().substr(0, 19),
                postExpireDT: postEndDate.toISOString().substr(0, 19),
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
            const response = await axios.post(`http://localhost:8080/api/createPost`, pdata, {
                headers: {
                  'Content-Type': 'application/json'
                }
            }
            
            );
            const photoFormData = new FormData()
            photoFormData.append('file', photo)

            // Get current post ID
            let count = 0

            const postList = await axios.get("http://localhost:8080/api/listPosts")
            console.log("currPOSTID:::", postList.data.length);

            await axios.post(`http://localhost:8080/api/post/submitPhoto/${postList.data.length}`, photoFormData)
                .then((response) => {
                    console.log("Successful image upload", response.data);
                })
            // if (photo) {
            //     const reader = new FileReader();
            //     reader.onload = (event) => {
            //         const fileData = event.target.result;
            //         localStorage.setItem(`user-photo-${currUser.userID}`, fileData);
            //     };
            //     reader.readAsDataURL(photo);
            // }
            console.log("post creation success");

            // console.log(response.data); // The created user object returned from the backend
          } catch (error) {
            console.error(error);
            console.log("post creation failure")
          }

  
        navigate("/")
    };

  return (
    <div className="container my-5">
        <div className="col-md-8 offset-md-2 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Start your journey today.</h2>
            <form onSubmit={(event) => onSubmit(event)}>
            <div className="row g-3" style={{ textAlign: "left" }}>
                <h4>General Information</h4>
                <div className="col-md-6">
                    <div>
                        <label
                            htmlFor="Title"
                            className="form-label">
                            Title
                        </label>
                        <input
                            required type={"text"}
                            className="form-control"
                            placeholder="My Title"
                            name="post_TITLE"
                            value={post_TITLE}
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                </div>
                
                <div className="col-md-6">
                    <label
                        htmlFor="Company"
                        className="form-label">
                        Company
                    </label>
                    <input class="form-control" type="text" placeholder={`${currUser.userName}`} aria-label="Disabled input example" disabled></input>
                </div>
                <div className="row">
                    <div className="col-md-11">
                        <label
                            htmlFor="Description"
                            className="form-label">
                            Description
                        </label>
                        <input
                            required type={"text"}
                            className="form-control"
                            placeholder="A one-line summary of your project"
                            name="post_DESCRIPTION"
                            value={post_DESCRIPTION}
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                      
                    <div class="col-md-1 align-self-end">
                        <input type="checkbox" class="btn-check" id="btn-check" value={post_SUSTAINABLE}
                            onChange={(event) => handleCheckChange(event)} autocomplete="off" />
                        <label class={ checked ? "btn btn-success" : "btn btn-outline-dark" } for="btn-check">ESG</label>
                    </div>
                </div>
                <div className="">
                    <label
                        htmlFor="Content"
                        className="form-label">
                        Pitch
                    </label>
                    <textarea
                        required type={"text"}
                        class="form-control"
                        placeholder="A summary of why your idea will change the world. Possible things to include: goals, user flows, and innovations."
                        name="post_CONTENT"
                        value={post_CONTENT}
                        onChange={(event) => handleChange(event)}
                        id="exampleFormControlTextarea1"
                        rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="Pitch"
                        className="form-label">
                        Link to Pitch Deck
                    </label>
                    <input
                        required type={"text"}
                        className="form-control"
                        placeholder="Google Drive, Dropbox, etc"
                        name="postURL"
                        value={postURL}
                        onChange={(event) => handleChange(event)}
                    />
                    <small id="urlHelp" className="form-text text-muted">Please ensure that the link is visible to the public.</small>
                </div>
                <hr />
                <h4>Fundraising Information</h4>
                <div className="col-md-4">
                    <label
                        htmlFor="shareCountTotal"
                        className="form-label">
                        Total Shares
                    </label>
                    <input 
                        required type={"text"} 
                        className="form-control"
                        placeholder="999"
                        name="SHARE_COUNT_TOTAL"
                        value={SHARE_COUNT_TOTAL}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                
                <div className="col-md-4">
                    
                    <label
                        htmlFor="shareCountPrice"
                        className="form-label">
                        Share Price
                    </label>
                    <div class="input-group">
                    <span class="input-group-text">$</span>
                    <input 
                        required type={"text"} 
                        className="form-control"
                        placeholder="Round off to the nearest 0.01"
                        name="SHARE_COUNT_PRICE"
                        value={SHARE_COUNT_PRICE}
                        onChange={(event) => handleChange(event)}
                    />
                    </div>
                </div>
                <div className="col-md-4">
                    <label
                        htmlFor="shareCountMin"
                        className="form-label">
                        Minimum Share Purchase
                    </label>
                    <input
                        required type={"text"}
                        className="form-control"
                        placeholder="1"
                        name="SHARE_COUNT_MIN"
                        value={SHARE_COUNT_MIN}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <h5>Your current company valuation: ${value}</h5>
                </div>
                
                <hr />
                <h4>Post Information</h4>
                <div className="col-md-4">
                    <label className="form-label">Start Date</label>
                    {/* <DatePicker
                        type={"text"}
                        value={post_RAISED_DT}
                        name="post_RAISED_DT"
                        onChange={handleChange}
                        minDate={moment()}
                        
                        className="form-control"
                        disabledKeyboardNavigation
                    /> */}
                    <DatePicker
                        id="custom"
                        isClearable
                        className='form-control'
                        filterDate={d => {
                            return new Date() < d;
                        }}
                        showTimeSelect
                        dateFormat="MMMM d, yyyy h:mmaa"
                        selected={postRaiseDate}
                        onChange={date => setPostRaiseDate(date)}
                        selectsStart
                        startDate={postRaiseDate}
                        endDate={postEndDate}
                    />
                </div>
                <div className='col-md-4 custom-datepicker'>
                    <label className='form-label'>End Date</label>
                    <DatePicker
                        id="custom"
                        isClearable
                        className='form-control'
                        filterDate={d => {
                            return new Date() < d;
                        }}
                        showTimeSelect
                        dateFormat="MMMM d, yyyy h:mmaa"    
                        selected={postEndDate}
                        selectsEnd
                        startDate={postRaiseDate}
                        endDate={postEndDate}
                        minDate={postRaiseDate}
                        onChange={date => setPostEndDate(date)}
                    />
                </div>

                <div className='col-md-4'>
                    <label className='form-label'>Photo</label>
                    <input
                        type={"file"}
                        className="form-control"
                        // placeholder={`${user.userName}`}
                        name="Photo"
                        // value={user.userName}
                        onChange={(event) => handleFileChange(event)}
                        
                        
                        
                    />
                </div>
                
                <button type="submit" className="btn btn-solid-dark">Submit</button>
                
            </div>
            </form>
        </div>
    </div>

  )
}