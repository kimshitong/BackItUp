import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

export default function InvestmentRowTitle({ inv }) {

  const [invsPost, setInvsPost] = useState([])

  useEffect(() => {
    loadInvs()
  }, []);

  const loadInvs = async () => {
    try {
      const post = await axios.get(`https://orbital-1690146023037.azurewebsites.net/api/postbyshare/${inv.share.shareId}`)
      setInvsPost(post.data)
      // console.log(post.data);
    } catch (error) {

    }
  }

  return (
    <>
      {invsPost.postTitle}
    </>
  )
}

