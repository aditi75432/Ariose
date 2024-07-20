import "./Goals.css";
import Circlepointer from "./assets/Circlepointer";
function Goals()
{
    return(
        <>
        <div className="goals_container">
            <Circlepointer head="Real-time Fraud Detection" img="./images/goal4.jpg" content="Our platform continuously monitors transactions in real-time, identifying and flagging suspicious activities instantly to prevent fraud before it happens."/>
            <Circlepointer head="Blockchain Security" img="./images/goal5.jpg" content="By utilizing blockchain technology, ARIOSE guarantees the highest level of security. Each transaction is recorded on a decentralized ledger, ensuring transparency and preventing unauthorized alterations."/>
            <Circlepointer head="Machine Learning Precision" img="./images/goal2.jpg" content="Our sophisticated machine learning models are trained on vast datasets to detect even the most subtle signs of fraudulent activity, enhancing accuracy and reducing false positives."/>
        </div>
        </>
    )
}
export default Goals;