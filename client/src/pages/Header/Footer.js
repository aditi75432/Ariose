import React from 'react';
import './Footer.css';
import logo_image from "./logo_image.png";

const Footer = () => {
  return (
    <>
    
    <footer>
    
      <div className="f-item-con">
      <div className="logo">
            <img src={logo_image} alt="MSC" class="logo" />
    </div>
        <div className="app-info">

        </div>
        <div className="useful-links">
          <div className="footer-title links-title">Links</div>
          <ul className='links-ul'>
            <a href="/"><li>Home</li></a>
            <a href="/blog"><li>Blogs</li></a>
            <a href="/transaction"><li>Transactions</li></a>
            <a href="/faq"><li>FAQ</li></a>
            <a href="/contact"><li>Contact Us</li></a>
          </ul>
        </div>
        <div className="help-sec">
          <div className="footer-title">Address</div>
          <ul className='help-ul'>
            <li>India</li>
          </ul>
        </div>
        <div className="g-i-t">
          <div className="footer-title">Get in Touch</div>

                  <div className="social-links-footer" >
                    <a href="https://x.com/Ad_75432"><i class="fa fa-twitter"></i></a>
                    <a href="https://www.instagram.com/luky75432/"><i class="fa fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/aditi-mehta-6b471a287/"><i class="fa fa-linkedin"></i></a>            
                  </div>


        </div>
      </div>
      <div className='cr-con'> AVAA &copy; 2024 | All Rights Reserved.</div>
    </footer>
    
    </>
  );
}

export default Footer;


/*<span className='app-name'>
<span className='app-initial'>MSC</span></span>*/