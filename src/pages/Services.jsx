import React from 'react'
import Footer from '../components/Footer'
import NavServices from '../components/NavServices';
import ServicesMenu from '../components/ServicesMenu';
import ServicesGallery from '../components/HomeGallery';
import BookingTab from '../components/BookingTab';


export default function Services() {

  return (
    <>
        <NavServices />
        <ServicesMenu />
        <ServicesGallery />
        <BookingTab />
        <Footer />
    </>
  )
}