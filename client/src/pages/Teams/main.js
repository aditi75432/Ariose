import React, { useState, useEffect } from 'react';

const Card = () => {
    const [isSocialVisible, setSocialVisible] = useState(false);
  
    const toggleSocial = () => {
      setSocialVisible((prevVisible) => !prevVisible);
    };
  
    useEffect(() => {
      const social = document.getElementById('card-social');
  
      const handleTransitionEnd = () => {
        if (!isSocialVisible) {
          social.classList.remove('down-animation');
        }
      };
  
      social.addEventListener('transitionend', handleTransitionEnd);
  
      return () => {
        social.removeEventListener('transitionend', handleTransitionEnd);
      };
    }, [isSocialVisible]);
  
    return (
      <div className="card">
        {/* ... your card content */}
        <div className="card__social" id="card-social">
          {/* ... your social links */}
        </div>
        <div
          className="card__social-toggle"
          id="card-toggle"
          onClick={toggleSocial}
        >
          <i className="ri-add-line"></i>
        </div>
      </div>
    );
  };
  
  export default Card;
  