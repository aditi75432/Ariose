import React, { useRef, useEffect } from 'react'
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"
import location from "./location.png"
import "./Contact.css";
//import { useState } from "react";
//import emailjs from 'emailjs-com'
import emailjs from '@emailjs/browser'

function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formElement = form.current;

    console.log('Form Reference:', formElement);

    emailjs.sendForm('service_gnf36lt', 'template_xzoxnk5', formElement, 'ZpuZXBX47HXKAX1O2')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  useEffect(() => {
    // Your JavaScript code goes here
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });

    return () => {
        inputs.forEach((input) => {
          input.removeEventListener("focus", focusFunc);
          input.removeEventListener("blur", blurFunc);
        });
      };
    }, []); 

  return (
    <>
    <div className="containerc">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Send us the message and contact now. Get your all queries resolved here!
          </p>

          <div className="info">
            <div className="information">
              <img src = { location } className="icon" alt="location" />
              <p>Delhi</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us:</p>
            <div className="social-media-icons">
              
              <a href="https://x.com/Ad_75432">
                <i className="fa"> <FaTwitter /> </i>
              </a>
              <a href="https://www.instagram.com/luky75432/">
                <i className="fa"> <FaInstagram /> </i>
              </a>
              <a href="https://www.linkedin.com/company/microsoft-student-chapter-igdtuw/">
                <i className="fa"> <FaLinkedin /> </i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>
      
          <form ref={form} action="https://formsubmit.co/microsoftstudentchapter.igdtuw@gmail.com" method="POST" autoComplete="off" onSubmit={ sendEmail }>
            <h3 className="title">Contact us</h3>
            <div className="input-container">
            <input type="text" name="name" className="input" id="username"/>
              <label for="">Name</label>
              <span>Name</span>
            </div>
            <div className="input-container">
            <input type="email" name="email" className="input" id="email"/>
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
            <input type="tel" name="phone" className="input" id="phone"/>
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input" id="message"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" name="submit" value="Send" className="btn" onClick={sendEmail} />
          </form>
        </div>
      </div>
    </div>
    </>
  )
}


export default Contacts