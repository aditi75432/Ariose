import React from 'react';
import './Card.css';
const Card = ({ name, imageSrc, profession, socialLinks }) => {
  console.log(imageSrc);
  return (
    <div className="cardteam" data-aos="flip-right" data-aos-duration="1000">
      <div className="card__border">
        <img src={imageSrc} alt='card-img' className="card__img" />
      </div>
      <h3 className="card__name">{name}</h3>
      <span className="card__profession">{profession}</span>
      <div className="card__social" id="card-social">
        <div className="card__social-control">

          {/* icons dont show */}
          <ul className="card__social-list">
            {socialLinks.map((link, index) => (
              <li key={index} className="card__social-item">
                <a href={link.url} className="card__social-link">
                  <i className={link.icon}></i>
                </a>
              </li>
            ))}
          </ul>

          {/* substitute icons w numbers, now it works, but does not show w css */}
          {/* <ul className="card__social-list">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" className="card__social-link">
                  {index + 1}
              </a>
              ))}
              </ul> */}

        </div>
      </div>
    </div>
  );
};

export default Card;