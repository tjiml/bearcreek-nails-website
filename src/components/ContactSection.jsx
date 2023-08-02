import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactSection() {

    const [submitMessage, setSubmitMessage] = useState(true);

    function submit() {
      if (document.querySelector('.first-name-contact').value === '' || 
          document.querySelector('.last-name-contact').value === '' || 
          document.querySelector('.email-contact').value === '' || 
          document.querySelector('.message-contact').value === '') {
        document.querySelector('.required-contact-info').innerHTML = 'ALL INPUT FIELDS REQUIRED'
      } else if (!document.querySelector('.email-contact').value.includes('@gmail.com') && 
                 !document.querySelector('.email-contact').value.includes('@yahoo.com') &&
                 !document.querySelector('.email-contact').value.includes('@hotmail.com')) {
          document.querySelector('.required-contact-info').innerHTML = 'ENTER A VALID EMAIL'
      } else if (document.querySelector('.message-contact').value.length < 10) {
        document.querySelector('.required-contact-info').innerHTML = 'MESSAGE MUST CONTAIN MORE THAN 10 CHARACTERS';
      } else {
          setSubmitMessage(false);
      }
    }
  
    function reloadContactPage() {
      window.location.href = window.location.href;
    }

    return (
        <>
        <div className="container">
        <div className="container py-5">
            <div className="row justify-content-center py-2">
                <div className="col-3">
                    <h5 className="solid-line"></h5>
                </div>
            </div>
            <div className="row justify-content-center text-center">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h1 className="page-titles">Contact Bear Creek Nails</h1>
                </div>
            </div>
        </div>
        </div>
    
        <div className="contact-container container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-10 col-sm-10 mx-5">
                <div className="row py-5" id="contact-information">
                <p className="sub-titles">WE'D LOVE TO HEAR FROM YOU </p>
                <p className="contact-text mb-5">We'll be more than happy to assist you with any questions or inquiries you may have.</p>
                        <div className="col-1">
                            <ul className="icons">
                                <li><i className="bi bi-geo-alt"></i></li>
                                <li><i className="bi bi-telephone"></i></li>
                                <li><i className="bi bi-envelope"></i></li>
                                <li><i className="bi bi-facebook"></i></li>
                                <li><i className="bi bi-yelp"></i></li>
                            </ul>
                        </div>
                        <div className="col-10">
                            <ul>
                                <li className="contact-info">2589 S Lewis Way, CO 80227</li>
                                <li className="contact-info">303 - 923 - 8321</li>
                                <li className="contact-info">bearcreeknails@gmail.com</li>
                                <li className="contact-info"><a href="https://www.facebook.com/bearcreeknails" target="_blank" className="facebook-link">facebook/bearcreeknails</a></li>
                                <li className="contact-info"><a href="https://www.facebook.com/bearcreeknails" target="_blank" className="yelp-link">yelp/bearcreeknails</a></li>
                            </ul>
                        </div>
                </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              {submitMessage ? (
                <div>
                  <div className="row py-5">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <h4 className="send-message-title">SEND US A MESSAGE</h4>
                      <p className="required-contact-info"></p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <input type="text" className="first-name-contact col-12" placeholder='First Name'></input>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <input type="text" className="last-name-contact col-12" placeholder='Last Name'></input>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <input type="text" className="email-contact col-12" placeholder='Email'></input>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <textarea type="text" className="message-contact col-12" placeholder='Leave us a message...' minLength={10} maxLength={100}></textarea>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <button className="submit-message-btn my-3" onClick={submit}>submit</button>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="row justify-content-center text-center">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <h2 className="message-recieved-text"><i className="bi bi-check"></i> Your message has been sent! We appreciate your comments and concerns.</h2>
                      <button className="reload-message-btn my-5" onClick={reloadContactPage}>send new message</button>
                    </div>
                  </div>
                </div>
              )}
              
            </div>
          </div>
        </div>
        </>
    )
}