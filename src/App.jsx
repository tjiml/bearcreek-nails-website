import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import GalleryOne from './pages/GalleryOne'
import GalleryTwo from './pages/GalleryTwo'
import GalleryThree from './pages/GalleryThree'
import Booking from './pages/Booking'
import ServicesAndBookingTab from './components/ServicesAndBookingTab'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import NavHome from './components/NavHome'
import NavBooking from './components/NavBooking'
import NavContact from './components/NavContact'
import NavServices from './components/NavServices'
import NavGallery from './components/NavGallery'
import HomeBanner from './components/HomeBanner'
import HomeAboutUs from './components/HomeAboutUs'
import ServicesMenu from './components/ServicesMenu'
import ServicesGallery from './components/HomeGallery'
import ServicesTab from './components/ServicesTab'
import HomeGallery from './components/HomeGallery'
import GalleryPageOne from './components/GalleryPageOne'
import GalleryPageTwo from './components/GalleryPageTwo'
import GalleryPageThree from './components/GalleryPageThree'
import ContactSection from './components/ContactSection'
import BookingInfo from './components/BookingInfo'
import BookingTab from './components/BookingTab'

export default function App() {
  return (
    <>
     <BrowserRouter>
     <ScrollTop />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/services" element={<Services/>} />
        <Route path="/gallery_one" element={<GalleryOne/>} />
        <Route path="/gallery_two" element={<GalleryTwo/>} />
        <Route path="/gallery_three" element={<GalleryThree/>} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/booking" element={<Booking/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}
