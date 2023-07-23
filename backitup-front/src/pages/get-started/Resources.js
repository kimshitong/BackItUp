import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Resources({ setPageTitle, setUserType }) {

  useEffect(() => {
    setUserType("")
    setPageTitle("Resources • BackItUp ")
  }, []);

  return (
    <div>
      <div class="px-4 my-5 text-center border-bottom">
        <h1 class="hero-title display-4 fw-bold">We're here to help.</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">A collection of our favorite entrepreneurship resources, curated for you.</p>

        </div>

      </div>
      <div className='container mb-5'>
        <div className='row g-3'>
          <div className='col-md-6 px-5' style={{ textAlign: "left" }}>
            <h3 class="display-10 fw-bold">Jacob's Picks</h3>
            <p>A great talk from Supernova 2007 that still remains highly relevant today.</p>
            <iframe width="560" height="315"
              src="https://www.youtube.com/embed/Xe1TZaElTAs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
            <hr />
            <p>Learn how to market your products and leverage virality with TikTok.</p>
            <iframe width="560" height="315"
              src="https://www.youtube.com/embed/Vt7ZWcyNc18"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
            <hr />
            <p>This one's less about entrepreneurship -- stay true to yourself and your product.</p>
            <iframe width="560" height="315"
              src="https://www.youtube.com/embed/OIlSXRC-B-I"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
          <div className='col-md-6 px-5' style={{ textAlign: "left" }}>
            <h3 class="display-10 fw-bold">Kim's Picks</h3>
            <p>Man like Geoff.</p>
            <iframe width="560" height="315"
              src="https://www.youtube.com/embed/gcevHkNGrWQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
            <hr />
            <p>One of the most important skills you must have.</p>
            <iframe width="560" height="315"
              src="https://www.youtube.com/embed/17XZGUX_9iM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
            <hr />
            <p>A classic.</p>
            <iframe width="560" height="315"
              src="https://www.youtube.com/embed/yQLhWtgAT0A"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>

        </div>
      </div>
    </div>
  )
}
