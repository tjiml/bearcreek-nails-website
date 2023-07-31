import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function BookingInfo() {

    const [bookingPage1, setBookingPage1] = useState(true);
    const [bookingPage2, setBookingPage2] = useState(true);
  
    function nextPage() {
      if (document.querySelector('.first-name-booking').value === '' || 
          document.querySelector('.last-name-booking').value === '' || 
          document.querySelector('.email-booking').value === '' || 
          document.querySelector('.phone-booking').value === '') {
        document.querySelector('.required-booking-info').innerHTML = 'ALL INPUT FIELDS REQUIRED'; 
      } else if (!document.querySelector('.email-booking').value.includes('@gmail.com') && 
                 !document.querySelector('.email-booking').value.includes('@yahoo.com') && 
                 !document.querySelector('.email-booking').value.includes('@hotmail.com')) {
          document.querySelector('.required-booking-info').innerHTML = 'ENTER A VALID EMAIL';
      } else if (!document.querySelector('.phone-booking').value.includes('0') &&
                 !document.querySelector('.phone-booking').value.includes('1') && 
                 !document.querySelector('.phone-booking').value.includes('2') &&
                 !document.querySelector('.phone-booking').value.includes('3') &&
                 !document.querySelector('.phone-booking').value.includes('4') &&
                 !document.querySelector('.phone-booking').value.includes('5') &&
                 !document.querySelector('.phone-booking').value.includes('6') &&
                 !document.querySelector('.phone-booking').value.includes('7') &&
                 !document.querySelector('.phone-booking').value.includes('8') &&
                 !document.querySelector('.phone-booking').value.includes('9')) {
        document.querySelector('.required-booking-info').innerHTML = 'ENTER A VALID NUMBER';
      } else if (document.querySelector('.phone-booking').value.length !== 10) {
        document.querySelector('.required-booking-info').innerHTML = 'ENTER A VALID NUMBER';
      } else {
        setBookingPage1(false);
        setBookingPage2(true);
        document.querySelector('.required-booking-info').innerHTML = '';
      }
    }
  
    function returnBack() {
      setBookingPage1(true);
      document.querySelector('.required-booking-info').innerHTML = '';
      document.querySelector('.required-date-info').innerHTML = '';
    }
  
    function nextPage2() {
      setBookingPage2(false);
    }
  
    function confirmAppointment() {
      if (document.querySelector('.date-booking').value === '' || document.querySelector('.time-booking').value === '') {
        document.querySelector('.required-date-info').innerHTML = 'ALL INPUT FIELDS REQUIRED'
      } else {
        document.querySelector('.booking-info-container').style.display = 'none';
        document.querySelector('.confirmation-container').style.display = 'block';
      }
    }
    
    return (
        <>
        <div className="container py-5">
            <div className="row justify-content-center py-2">
                <div className="col-3">
                    <h5 className="solid-line"></h5>
                </div>
            </div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h1 className="page-titles">Schedule Your Appointment</h1>
            </div>
          </div>
        </div>

        <div className="booking-info-container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              {bookingPage1 ? (
                <div>
                  <p className="required-booking-info"></p>
                  <input type="text" className="first-name-booking col-lg-4 col-md-4 col-4" placeholder='First Name'></input>
                  <input type="text" className="last-name-booking col-lg-4 col-md-4 col-4" placeholder='Last Name'></input>
                  <br/>
                  <input type="email" className="email-booking col-lg-4 col-md-4 col-4" placeholder='Email'></input>
                  <input type="tel" className="phone-booking col-lg-4 col-md-4 col-4" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='Phone Number'></input>
                  <br/>
                  <button className="continue-btn my-3" onClick={nextPage}>continue</button>
                </div>
              ) : (
                <div>
                  <div className="container">
                    <div className="row">
                      <h1 className='titles'>Select Your Services</h1>
                      <div className="col-lg-4 col-md-8 col-sm-10">
                          <h2 className="booking-items py-2">Full Sets <i className="bi bi-chevron-down"></i></h2>
                              <div className="row justify-content-center">
                                  <div className="col-10">
                                    <ul className="service-items text-start">
                                      <li>
                                        <input className="form-check-input" type="checkbox" value="" id="item1"/>
                                          <label class="form-check-label" for="item1">
                                            Natural Acrylics or Overlay
                                          </label>
                                      </li>
                                      <li>
                                        <input className="form-check-input" type="checkbox" value="" id="item2"/>
                                          <label class="form-check-label" for="item2">
                                            Natural Acrylics with White Tips
                                          </label>
                                      </li>
                                      <li>
                                        <input className="form-check-input" type="checkbox" value="" id="item3"/>
                                          <label class="form-check-label" for="item3">
                                            Pink & White
                                          </label>
                                      </li>
                                      <li>
                                        <input className="form-check-input" type="checkbox" value="" id="item4"/>
                                          <label class="form-check-label" for="item4">
                                            Color Powder
                                          </label>
                                      </li>
                                      <li>
                                        <input className="form-check-input" type="checkbox" value="" id="item5"/>
                                          <label class="form-check-label" for="item5">
                                            Gel Powder
                                          </label>
                                      </li>
                                      <li>
                                        <input className="form-check-input" type="checkbox" value="" id="item6"/>
                                          <label class="form-check-label" for="item6">
                                            Dip Powder
                                          </label>
                                      </li>
                                    </ul>
                                  </div>         
                                </div>
                      </div>
                      <div className="col-lg-4 col-md-8 col-sm-10">
                        <h2 className="booking-items py-2">Manicures <i className="bi bi-chevron-down"></i></h2>
                          <div className="row justify-content-center">
                                <div className="col-10">
                                    <ul className="service-items text-start">
                                    <li>
                                        <input className="form-check-input" type="checkbox" value="" id="item7"/>
                                          <label class="form-check-label" for="item7">
                                            Basic Manicure
                                          </label>
                                      </li>
                                      <li>
                                        <input className="form-check-input" type="checkbox" value="" id="item8"/>
                                          <label class="form-check-label" for="item8">
                                            Deluxe Manicure
                                          </label>
                                      </li>
                                      <li>
                                      <li>
                                        <input className="form-check-input" type="checkbox" value="" id="item9"/>
                                          <label class="form-check-label" for="item9">
                                            Bear Creek Manicure
                                          </label>
                                      </li>
                                        <input className="form-check-input" type="checkbox" value="" id="item10"/>
                                          <label class="form-check-label" for="item10">
                                            *Add Paraffin Wax*
                                          </label>
                                      </li>
                                      <li>
                                        <input className="form-check-input" type="checkbox" value="" id="item11"/>
                                          <label class="form-check-label" for="item11">
                                            *Add Gel/Shellac Wax*
                                          </label>
                                      </li>
                                      <li>
                                        <input className="form-check-input" type="checkbox" value="" id="item12"/>
                                          <label class="form-check-label" for="item12">
                                            *Add Gel/Shellac Polish*
                                          </label>
                                      </li>
                                      </ul>
                                </div>         
                              </div>
                      </div>
                      <div className="col-lg-4 col-md-8 col-sm-10">
                        <h2 className="booking-items py-2">Pedicure <i className="bi bi-chevron-down"></i></h2>
                            <div className="row justify-content-center">
                                    <div className="col-10">
                                        <ul className="service-items text-start">
                                          <li>
                                            <input className="form-check-input" type="checkbox" value="" id="item13"/>
                                              <label class="form-check-label" for="item13">
                                                Basic Pedicure
                                              </label>
                                          </li>
                                          <li>
                                            <input className="form-check-input" type="checkbox" value="" id="item14"/>
                                              <label class="form-check-label" for="item14">
                                                Deluxe Pedicure
                                              </label>
                                          </li>
                                          <li>
                                            <input className="form-check-input" type="checkbox" value="" id="item15"/>
                                              <label class="form-check-label" for="item15">
                                                Bear Creek Pedicure
                                              </label>
                                          </li>
                                          <li>
                                            <input className="form-check-input" type="checkbox" value="" id="item16"/>
                                              <label class="form-check-label" for="item16">
                                              *Add Paraffin Wax*
                                            </label>
                                          </li>
                                          <li>
                                            <input className="form-check-input" type="checkbox" value="" id="item17"/>
                                              <label class="form-check-label" for="item17">
                                              *Add Callus Removal*
                                            </label>
                                          </li>
                                          <li>
                                            <input className="form-check-input" type="checkbox" value="" id="item18"/>
                                              <label class="form-check-label" for="item18">
                                              *Add Gel/Shellac Polish*
                                            </label>
                                          </li>
                                        </ul>
                                    </div>
                                </div>
                      </div>
                      <div className="row justify-content-center py-5">
                        <div className="col-lg-4 col-md-8 col-sm-10">
                            <h2 className="booking-items py-2">Gel / Shellac Polish <i className="bi bi-chevron-down"></i></h2>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                        <ul className="service-items text-start">
                                        <li>
                                          <input className="form-check-input" type="checkbox" value="" id="item19"/>
                                            <label class="form-check-label" for="item19">
                                              Gel/Shellac Polish Color
                                            </label>
                                        </li>
                                        <li>
                                          <input className="form-check-input" type="checkbox" value="" id="item20"/>
                                            <label class="form-check-label" for="item20">
                                              Gel/Shellac Removal
                                            </label>
                                        </li>
                                        <li>
                                          <input className="form-check-input" type="checkbox" value="" id="item21"/>
                                            <label class="form-check-label" for="item21">
                                              Mani & Gel/Shellac Polish Color
                                            </label>
                                        </li>
                                        <li>
                                          <input className="form-check-input" type="checkbox" value="" id="item22"/>
                                            <label class="form-check-label" for="item22">
                                                Deluxe Mani & Gel/Shellac Polish Color
                                            </label>
                                        </li>
                                        <li>
                                          <input className="form-check-input" type="checkbox" value="" id="item23"/>
                                            <label class="form-check-label" for="item23">
                                              *Extra French Gel/Shellac Polish*
                                            </label>
                                        </li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-10">
                            <h2 className="booking-items py-2">Kids Services <i className="bi bi-chevron-down"></i></h2>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                        <ul className="service-items text-start">
                                          <li>
                                            <input className="form-check-input" type="checkbox" value="" id="item23"/>
                                              <label class="form-check-label" for="item23">
                                                Kids Manicure
                                              </label>
                                          </li>
                                          <li>
                                            <input className="form-check-input" type="checkbox" value="" id="item23"/>
                                              <label class="form-check-label" for="item23">
                                                Kids Pedicure (Under 5 yrs)
                                              </label>
                                          </li>
                                          <li>
                                            <input className="form-check-input" type="checkbox" value="" id="item23"/>
                                              <label class="form-check-label" for="item23">
                                                Kids Pedicure (Under 11 yrs)
                                              </label>
                                          </li>
                                          <li>
                                            <input className="form-check-input" type="checkbox" value="" id="item23"/>
                                              <label class="form-check-label" for="item23">
                                                Nail Polish Change (Under 5 yrs)
                                              </label>
                                          </li>
                                          <li>
                                            <input className="form-check-input" type="checkbox" value="" id="item23"/>
                                              <label class="form-check-label" for="item23">
                                                Nail Polish Change (Under 11 yrs)
                                              </label>
                                          </li>
                                          <li>
                                            <input className="form-check-input" type="checkbox" value="" id="item23"/>
                                              <label class="form-check-label" for="item23">
                                                *Extra French Gel/Shellac Polish*
                                              </label>
                                          </li>
                                          <li>
                                            <input className="form-check-input" type="checkbox" value="" id="item23"/>
                                              <label class="form-check-label" for="item23">
                                                *Additional Designs*
                                              </label>
                                          </li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-10">
                            <h2 className="booking-items py-2">Additional Services <i className="bi bi-chevron-down"></i></h2>
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                        <ul className="service-items text-start">
                                          <li>
                                            <input className="form-check-input" type="checkbox" value="" id="item24"/>
                                              <label class="form-check-label" for="item24">
                                                Polish Hands/Feet
                                              </label>
                                          </li>
                                          <li>
                                            <input className="form-check-input" type="checkbox" value="" id="item25"/>
                                              <label class="form-check-label" for="item25">
                                                French Polish Hands/Feet
                                              </label>
                                          </li>
                                          <li>
                                            <input className="form-check-input" type="checkbox" value="" id="item26"/>
                                              <label class="form-check-label" for="item26">
                                                Nail(s) Repair
                                              </label>
                                          </li>
                                          <li>
                                            <input className="form-check-input" type="checkbox" value="" id="item27"/>
                                              <label class="form-check-label" for="item27">
                                                Acrylic/Dip Nail Removal
                                              </label>
                                          </li>
                                          <li>
                                            <input className="form-check-input" type="checkbox" value="" id="item28"/>
                                              <label class="form-check-label" for="item28">
                                                Paraffin Treatment Hands/Feet
                                              </label>
                                          </li>
                                          <li>
                                            <input className="form-check-input" type="checkbox" value="" id="item29"/>
                                              <label class="form-check-label" for="item29">
                                                French Polish With Any Service
                                              </label>
                                          </li>
                                          <li>
                                            <input className="form-check-input" type="checkbox" value="" id="item30"/>
                                              <label class="form-check-label" for="item30">
                                                10 Minute Additional Massage
                                              </label>
                                          </li>
                                          <li>
                                            <input className="form-check-input" type="checkbox" value="" id="item31"/>
                                              <label class="form-check-label" for="item231">
                                                Cuticle Trim
                                              </label>
                                          </li>
                                          <li>
                                            <input className="form-check-input" type="checkbox" value="" id="item32"/>
                                              <label class="form-check-label" for="item32">
                                                Nail Trimmming & Shaping
                                              </label>
                                          </li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center text-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        {bookingPage2 ? (
                          <div>
                            <button className="display-time-date-btn my-3" onClick={nextPage2}>continue</button>
                            <br/>
                            <button onClick={returnBack} className="back-btn-1">back</button>
                          </div>
                        ) : (
                          <div>
                            <h1 className='titles'>Select Date</h1>
                            <p className="required-date-info"></p>
                              <input type="date" className="date-booking col-8"></input>
                              <br/>
                              <input type="time" className="time-booking col-8"></input>
                              <br/>
                              <button className="confirm-appt-btn my-3" onClick={confirmAppointment}>book appointment</button>
                              <br/>
                              <button className="back-btn-2" onClick={returnBack}>back</button>
                          </div>
                        )}
                    </div>
          </div>
                </div>
              )}
            </div>
          </div>
          
        </div>

        <div className="confirmation-container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <h4 className='appt-confirmed-text'>Your appointment has been booked! We look forward to seeing you!</h4>
              <Link to="/home"><button className="return-home-btn my-5">return home</button></Link>
            </div>
          </div>
        </div>
        </>
    )
}