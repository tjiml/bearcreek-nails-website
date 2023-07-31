import React, { useState } from 'react'
import NavHome from '../components/NavHome';
import HomeBanner from '../components/HomeBanner';
import HomeAboutUs from '../components/HomeAboutUs';
import Footer from '../components/Footer'
import HomeGallery from '../components/HomeGallery';
import ServicesAndBookingTab from '../components/ServicesAndBookingTab';

export default function Home() {

  return (
    <>
        <NavHome /> 
        <HomeBanner />
        <HomeAboutUs />
        <HomeGallery />
        <ServicesAndBookingTab />
        <Footer />
    </>
  )
}