import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {

    function backToTop() {
        window.scrollTo ({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <>
    <div className="container-fluid py-5 bg-dark">
        <div className="row justify-content-center">
            <div className="col-lg-6 col-ms-8 col-sm-12">
                <h1 className="footer-titles text-center">business hours</h1>

                    <div className="row">
                        <div className="col-4">
                            <ul className="footer-info">
                                <li>monday - friday</li>
                                <li>saturday</li>
                                <li>sunday</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul className="footer-info">
                                <li>9am - 7pm</li>
                                <li>9am - 6pm</li>
                                <li>closed</li>
                            </ul>
                        </div>
                    </div>
            </div>

            <div className="col-lg-6 col-md-8 col-sm-12">
                <div className="row">
                    <h1 className="footer-titles text-center">contact information</h1>
                        <div className="col-1">
                            <ul className="footer-info">
                                <li><i className="bi bi-geo-alt"></i></li>
                                <li><i className="bi bi-telephone"></i></li>
                                <li><i className="bi bi-envelope"></i></li>
                                <li><i className="bi bi-facebook"></i></li>
                            </ul>
                        </div>
                        <div className="col-10">
                            <ul className="footer-info">
                                <li>2589 S Lewis Way, CO 80227</li>
                                <li>303 - 923 - 8321</li>
                                <li>bearcreeknails@gmail.com</li>
                                <li className="facebook-footer"><a href="https://www.facebook.com/bearcreeknails" target='_blank' className='bc-footer'>facebook/bearcreeknails</a></li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>

        <div className="row justify-content-center pt-3" id="copyright-section">
            <div className="col-2">
                {/* empty */}
            </div>
            <div className="col-8">
                <p className="text-center">©copyright 2023. <a href="https://www.facebook.com/bearcreeknails" className="bc-footer" target='_blank'>Bear Creek Nails.</a> All rights reserved.</p>
            </div>
            <div className="col-2">
                <p className="text-end"><i className="arrow-up bi bi-arrow-up-circle" onClick={backToTop}></i></p>
            </div>
        </div>
    </div>
    </>
  )
}