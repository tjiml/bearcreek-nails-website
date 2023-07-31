import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeAboutUs() {
  return (
    <>
        <div className="container-fluid py-5" id="about-us-section">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10 text-center">
              <img className="about-us-image"></img>
            </div>
            <div className="col-lg-5 col-md-8 col-sm-10 py-5">
              <h5 className="sub-titles">ABOUT US</h5>
              <h1 className="titles">Bear Creek Nails</h1>
              <hr className="solid"/>

              <p className="lorem text-start">Welcome to Bear Creek Nails, where excellence meets elegance. Our expert technicians are dedicated to providing top-notch nail services, from classic manicures and pedicures to intricate nail art and innovative gel applications.</p>
              <p className="lorem text-start">Immerse yourself in a luxurious and hygienic atmosphere, where we prioritize your comfort and satisfaction. With a diverse range of premium nail products and a keen eye for detail, we promise to transform your nails into stunning masterpieces that reflect your unique style.</p>
              <p className="lorem text-start">Discover a haven of relaxation and creativity, ensuring that you leave feeling pampered and delighted with your polished and immaculate nails.</p>
              <Link to="/contact"><button className="view-more-btn my-3">view more <i className="bi bi-chevron-right"></i></button></Link>
            </div>
          </div>
        </div>
    </>
  )
}
