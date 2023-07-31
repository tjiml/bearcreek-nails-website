import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeGallery() {
  
  return (
    <div className="homepage-gallery-container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6 col-md-8 col-sm-12">
                <h4 className="sub-titles py-3">OUR GALLERY</h4>
                <h2 className="titles">Explore Bear Creek's photo gallery</h2>
            </div>
          </div>
          <div className="row justify-content-center text-center py-5">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <img className="homepage-gallery-image-1 my-3"></img>
              <img className="homepage-gallery-image-2 my-3"></img>
              <img className="homepage-gallery-image-3 my-3"></img>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-6 col-md-8 col-sm-12">
              <Link to="/gallery_one"><button className="view-gallery-btn">view gallery <i className="bi bi-chevron-right"></i></button></Link>
            </div>
          </div>
        </div>
  )
}