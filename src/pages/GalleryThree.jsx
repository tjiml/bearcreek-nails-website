import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import NavGallery from '../components/NavGallery';
import ServicesAndBookingTab from '../components/ServicesAndBookingTab';
import GalleryPageThree from '../components/GalleryPageThree';

export default function GalleryThree() {

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
        <NavGallery />
        <GalleryPageThree />
        <ServicesAndBookingTab />
        <Footer />

        {backToTop && (
                    <button className="btt-button" onClick={scrollUp}>Back To Top <i className="bi bi-arrow-up-short"></i></button>
                )}
    </>
  )
}