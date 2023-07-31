import React, { useState } from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import NavGallery from '../components/NavGallery';
import ServicesAndBookingTab from '../components/ServicesAndBookingTab';
import GalleryPageThree from '../components/GalleryPageThree';

export default function GalleryThree() {
  
  return (
    <>
        <NavGallery />
        <GalleryPageThree />
        <ServicesAndBookingTab />
        <Footer />
    </>
  )
}