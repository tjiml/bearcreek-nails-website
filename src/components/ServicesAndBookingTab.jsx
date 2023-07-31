import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ServicesAndBookingTab() {

  const [currentTab, setCurrentTab] = useState(true);

  function tabBooking() {
    setCurrentTab(false);
  }

  function tabService() {
    setCurrentTab(true);
  }

  return (
    <>
    <div className="container py-5">
          <div className="row">
            <div className="col-lg-10 col-md-11 col-sm-12">
            {currentTab ? (
                <div>
                  <div className="row justify-content-center text-center my-3">
                    <div className="col">
                      <h4 className="sub-titles" id="service-tab-active">SERVICES</h4>
                    </div>
                    <div className="col">
                      <h4 className="sub-titles" onClick={tabBooking} id="booking-tab">BOOKINGS</h4>
                    </div>
                  </div>
                  <h2 className="py-3" id="titles">Select services from manicures, pedicures, and more!</h2>
                  <hr className="solid"/>
                  <p className="lorem text-start">Our nail salon provides a comprehensive array of services, including classic manicures, pedicures, gel applications, and intricate nail art. Our experienced technicians and premium products ensure that you leave with stunning, well-groomed nails that make you feel confident and pampered.</p>
                  <Link to="/services"><button className="view-services-btn my-3">view services <i className="bi bi-chevron-right"></i></button></Link>
                </div>
              ) : (
                <div>
                  <div className="row justify-content-center text-center my-3">
                    <div className="col">
                      <h4 className="sub-titles" onClick={tabService} id="service-tab">SERVICES</h4>
                    </div>
                    <div className="col">
                      <h4 className="sub-titles" id="booking-tab-active">BOOKINGS</h4>
                    </div>
                  </div>
                  <h2 className="py-3" id="titles">Start scheduling your appointment today!</h2>
                  <hr className="solid"/>
                  <p className="lorem text-start">Come book your appointment  at  <strong>Bear Creek Nails</strong> located on <strong>2589 W Lewis Way, Lakewood CO.</strong> We offer convenient online scheduling and responsive customer service to accommodate your preferred date and time seamlessly.</p>
                  <Link to="/booking"><button className="view-booking-btn my-3">book appointment <i className="bi bi-chevron-right"></i></button></Link>
                </div>
              )}
            </div>
          </div>
        </div>
    </>
  )
} 