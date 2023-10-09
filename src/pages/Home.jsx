import React, { useState, useEffect } from 'react'
import NavHome from '../components/NavHome';
import HomeBanner from '../components/HomeBanner';
import HomeAboutUs from '../components/HomeAboutUs';
import Footer from '../components/Footer'
import HomeGallery from '../components/HomeGallery';
import ServicesAndBookingTab from '../components/ServicesAndBookingTab';

export default function Home() {

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
        <NavHome /> 
        <HomeBanner />
        <HomeAboutUs />
        <HomeGallery />
        <ServicesAndBookingTab />
        <Footer />

        {backToTop && (
                    <button className="btt-button" onClick={scrollUp}>Back To Top <i className="bi bi-arrow-up-short"></i></button>
                )}
    </>
  )
}