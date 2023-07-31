import React from "react";
import { Link } from "react-router-dom";

export default function GalleryPageOne() {
    return (
        <>
         <div className="gallery-title-container pb-5">
        <div className="container py-5">
            <div className="row justify-content-center py-2">
                <div className="col-3">
                    <h5 className="solid-line"></h5>
                </div>
            </div>
            <div className="row justify-content-center text-center">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h1 className="page-titles">Gallery / Nail Designs</h1>
                </div>
            </div>
        </div>
        </div>

        <div className="gallery-container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <img className="gallery-image-1"/>
              <img className="gallery-image-2"/>
              <img className="gallery-image-3"/>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <img className="gallery-image-4"/>
              <img className="gallery-image-5"/>
              <img className="gallery-image-6"/>
            </div>
          </div>
        </div>

        <div className="page-number-container py-5">
          <div className="row row justify-content-center text-center">
            <div className="col-12">
              <ul className="list-inline page-number-list">
                <li className="list-inline-item"><Link to="/gallery_one" className="page-number-active">1</Link></li>
                <li className="list-inline-item"><Link to="/gallery_two" className="page-number">2</Link></li>
                <li className="list-inline-item"><Link to="/gallery_three" className="page-number">3</Link></li>
                <li className="list-inline-item"><Link to="/gallery_two" className="page-number"><i className="bi bi-chevron-right"></i></Link></li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <p className="lorem">viewing page 1 of 3</p>
            </div>
          </div>
        </div>
        </>
    )
}