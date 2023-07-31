import React from "react";
import { Link } from "react-router-dom";

export default function ServicesTab() {
    return (
        <>
        <div className="small-our-services container-fluid py-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 col-sm-12">
                    <h4 className="sub-titles">OUR SERVICES</h4>
                    <h2 className="titles text-start">Select services from manicures, pedicures, and more!</h2>
                    <hr className="solid"/>
                    <p className="lorem text-start">Our nail salon provides a comprehensive array of services, including classic manicures, pedicures, gel applications, and intricate nail art. Our experienced technicians and premium products ensure that you leave with stunning, well-groomed nails that make you feel confident and pampered.</p>
                    <Link to="/services"><button className="view-services-btn">VIEW SERVICES <i className="bi bi-chevron-right"></i></button></Link>
                </div>
                <div className="col-lg-4 col-md-10 col-sm-12"></div>
            </div>
        </div>
        </>
    )
}