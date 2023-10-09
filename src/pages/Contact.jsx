import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import ServicesAndBookingTab from '../components/ServicesAndBookingTab';
import HomeGallery from '../components/HomeGallery';
import NavContact from '../components/NavContact';
import ContactSection from '../components/ContactSection';

export default function Contact() {

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
      <NavContact />
      <ContactSection />
      <HomeGallery />
      <ServicesAndBookingTab />
      <Footer />

      {backToTop && (
                    <button className="btt-button" onClick={scrollUp}>Back To Top <i className="bi bi-arrow-up-short"></i></button>
                )}
    </>
  )
}