import "./Upcoming.css";
import Hovercard from "./assets/Hovercard";


function Upcoming()
{
    return(
        <>
        <div className="upcomingsection" data-aos="fade-up">
        <Hovercard img="./images/event1.jpg" content=" Blockchain technology ensures all transaction records are permanent and tamper-proof" name="Immutable Records:"/>
        <Hovercard img="./images/event2.jpg" content=" Deep learning algorithms analyze transaction patterns to predict and prevent fraud effectively." name="Advanced Analytics:"/>
        <Hovercard img="./images/event3.jpg" content=" A sleek and intuitive interface allows users to easily navigate and manage their transaction security." name="User-friendly Interface:"/>
        </div>
        </>
    )
}
export default Upcoming;