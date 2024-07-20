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
            <a href="/events"><li>Events</li></a>
            <a href="/team"><li>Team</li></a>
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
                    <a href="https://twitter.com/IgdtuwMsc"><i class="fa fa-twitter"></i></a>
                    <a href="https://www.instagram.com/msc.igdtuw/"><i class="fa fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A86461771&keywords=microsoft%20learn%20student%20ambassador%20student%20chapter%20-%20igdtuw&origin=RICH_QUERY_SUGGESTION&position=0&searchId=58750bde-97d7-4272-a0bc-cb0f0f6a58e6&sid=o9w"><i class="fa fa-linkedin"></i></a>            
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