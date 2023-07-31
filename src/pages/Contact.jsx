import React, { useState } from 'react'
import Footer from '../components/Footer'
import ServicesAndBookingTab from '../components/ServicesAndBookingTab';
import HomeGallery from '../components/HomeGallery';
import NavContact from '../components/NavContact';
import ContactSection from '../components/ContactSection';

export default function Contact() {

  
  return (
    <>
      <NavContact />
      <ContactSection />
      <HomeGallery />
      <ServicesAndBookingTab />
      <Footer />
    </>
  )
}