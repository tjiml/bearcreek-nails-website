import React, { useState } from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import NavGallery from '../components/NavGallery';
import ServicesAndBookingTab from '../components/ServicesAndBookingTab';
import GalleryPageOne from '../components/GalleryPageOne';

export default function GalleryOne() {
  
  return (
    <>
        <NavGallery />
        <GalleryPageOne />
        <ServicesAndBookingTab />
        <Footer />
    </>
  )
}