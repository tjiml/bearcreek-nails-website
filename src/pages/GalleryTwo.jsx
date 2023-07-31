import React, { useState } from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import NavGallery from '../components/NavGallery'
import ServicesAndBookingTab from '../components/ServicesAndBookingTab'
import GalleryPageTwo from '../components/GalleryPageTwo'

export default function GalleryTwo() {

  return (
    <>
        <NavGallery />
        <GalleryPageTwo />
        <ServicesAndBookingTab />
        <Footer />
    </>
  )
}