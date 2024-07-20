import "../styles/Head.css";

function Head() {
  return (
    <div className="headsection">
      <div className="imagehead">
        <img
          src="./images/home_page.jpg"
          className="imageheadsection"
          data-aos="fade-right"
          data-aos-duration="500">
            
          </img>
      </div>

      <div className="headcontent" data-aos="fade-left" data-aos-duration="500">
        <h1 className="heading">ARIOSE</h1>
        <p className="headp">
        <h2>Welcome to ARIOSE</h2>
        <br></br>
        Automated Real-time Integrated Oversight and Surveillance Engine
        Protecting Your Finances with Cutting-Edge Technology.
        
        
        
        </p>
      </div>
    </div>
  );
}
export default Head;