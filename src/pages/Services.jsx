import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import NavServices from '../components/NavServices';
import ServicesMenu from '../components/ServicesMenu';
import ServicesGallery from '../components/HomeGallery';
import BookingTab from '../components/BookingTab';


export default function Services() {

  
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
        <NavServices />
        <ServicesMenu />
        <ServicesGallery />
        <BookingTab />
        <Footer />

        {backToTop && (
                    <button className="btt-button" onClick={scrollUp}>Back To Top <i className="bi bi-arrow-up-short"></i></button>
                )}
    </>
  )
}