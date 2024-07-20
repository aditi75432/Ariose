import "./Bootcamp.css";
import Teamleft from "./assets/Teamleft";
import Teamright from "./assets/Teamright";


import Bootintro from "./assets/Bootintro";
function Bootcamp(){
    return(
        <>
        <div className="boot">
            <Bootintro/>
        </div>
        <div className="mentorsection">
            <div className="circlementor">
                <h3>Web Development Mentors</h3>
                <Teamleft image="/public/images/kartik.jpg" name="Kartik Ohri" content=" is a final year Computer Science student at the Jawaharlal Nehru University
                                                    GSoC Contributor
                                                    Current GSoC Mentor and forever Open source geek"/>
                <Teamright image="/public/images/rajat.jpeg" name="Rajat Aggarwal" content=" is a software Engineer at Airtel Digital
                                                    Full Stack Developer
                                                    Open Source Contributor
                                                    Runner up @KWOC'19
                                                    Published 2 IEEE papers on a new algorithm
                                                    MNITJ'22 passout"/>
            </div>

        </div>
        
        </>
    )
}
export default Bootcamp;