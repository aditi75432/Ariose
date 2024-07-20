import "./About.css";

function About() {
  return (
    <div className="aboutsection">
      <div
        className="aboutcontent"
        data-aos="fade-left"
        data-aos-duration="500"
      >
        <h4>What is ARIOSE?
        </h4>
        
        ARIOSE is a state-of-the-art credit card fraud detection platform designed to safeguard your financial transactions with unparalleled precision and security. Leveraging the power of advanced machine learning algorithms and blockchain technology, ARIOSE ensures that your transactions are not only secure but also transparent and immutable.
      </div>
      <img
        src="./images/about_image.jpg"
        className="imagesection"
        data-aos="fade-right"
        data-aos-duration="500"
      ></img>
    </div>
  );
}
export default About;
