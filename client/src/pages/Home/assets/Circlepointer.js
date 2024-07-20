import "./Circlepointer.css";

function Circlepointer(props)
{
    return(
        <>
        <div className="goal" data-aos="flip-up" data-aos-duration="1000">
        <img src={props.img} className="goalimg"/>
            
            <div className="goalcontent">
                <h3>{props.head}</h3>
              <p> {props.content}
              </p>
            </div>
            </div>
        </>
    )
}
export default Circlepointer;