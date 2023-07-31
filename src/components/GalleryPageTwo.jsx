import React from "react";
import { Link } from "react-router-dom";

export default function GalleryPageTwo() {
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
              <img className="gallery-image-7"/>
              <img className="gallery-image-8"/>
              <img className="gallery-image-9"/>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <img className="gallery-image-10"/>
              <img className="gallery-image-11"/>
              <img className="gallery-image-12"/>
            </div>
          </div>
        </div>

        <div className="page-number-container py-5">
          <div className="row row justify-content-center text-center">
            <div className="col-12">
              <ul className="list-inline page-number-list">
                <li className="list-inline-item"><Link to="/gallery_one" className="page-number"><i className="bi bi-chevron-left"></i></Link></li>
                <li className="list-inline-item"><Link to="/gallery_one" className="page-number">1</Link></li>
                <li className="list-inline-item"><Link to="/gallery_two" className="page-number-active">2</Link></li>
                <li className="list-inline-item"><Link to="/gallery_three" className="page-number">3</Link></li>
                <li className="list-inline-item"><Link to="/gallery_three" className="page-number"><i className="bi bi-chevron-right"></i></Link></li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <p className="lorem">viewing page 2 of 3</p>
            </div>
          </div>
        </div>
        </>
    )
}