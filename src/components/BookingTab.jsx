import React from "react";
import { Link } from "react-router-dom";

export default function BookingTab() {
    return (
        <>
         <div className="container-fluid py-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-10 col-sm-12">
                    <h4 className="sub-titles">Visit Bear Creek Nails Today!</h4>
                    <h2 className="titles text-start">Start scheduling your appointment</h2>
                    <hr className="solid"/>
                    <p className="lorem text-start">Come book your appointment  at  <strong>Bear Creek Nails</strong> located on <strong>2589 W Lewis Way, Lakewood CO.</strong> We offer convenient online scheduling and responsive customer service to accommodate your preferred date and time seamlessly.</p>
                    <Link to='/booking'><button className="view-booking-btn">BOOK APPOINTMENT <i className="bi bi-chevron-right"></i></button></Link>
                </div>
                <div className="col-lg-4 col-md-10 col-sm-12"></div>
            </div>
        </div>
        </>
    )
}