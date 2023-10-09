import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import ServicesGallery from '../components/HomeGallery';
import NavBooking from '../components/NavBooking';
import BookingInfo from '../components/BookingInfo';
import ServicesTab from '../components/ServicesTab';

export default function Booking() {

  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
          window.addEventListener("scroll", () => {
              if (window.scrollY > 500) {
                  setBackToTop(true);
              } else {
                  setBackToTop(false);
              }
          })
      }, [])

  function scrollUp() {
          window.scrollTo({
              top: 0,
              behavior: "smooth",
          })
      }
  
  return (
    <>
        <NavBooking />
        <div className="booking-container">
        <BookingInfo />
        <ServicesGallery />
        <ServicesTab />
        </div>
        <Footer />

        {backToTop && (
                    <button className="btt-button" onClick={scrollUp}>Back To Top <i className="bi bi-arrow-up-short"></i></button>
                )}
    </>
  )
}