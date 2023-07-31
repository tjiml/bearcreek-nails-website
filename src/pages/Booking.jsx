import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import ServicesGallery from '../components/HomeGallery';
import NavBooking from '../components/NavBooking';
import BookingInfo from '../components/BookingInfo';
import ServicesTab from '../components/ServicesTab';

export default function Booking() {
  
  return (
    <>
        <NavBooking />
        <div className="booking-container">
        <BookingInfo />
        <ServicesGallery />
        <ServicesTab />
        </div>
        <Footer />
    </>
  )
}