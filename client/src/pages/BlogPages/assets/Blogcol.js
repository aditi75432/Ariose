import "./Blogcol.css";

function Blogcol(props)
{ var direct=props.name.toLowerCase().replaceAll(' ','');
    function blogdirect()
    {
        window.location.href=`/${direct}`;
    }
    return(
        <>
        <div className="blogcol" onClick={blogdirect}>
            <img src={props.image}/>
            <h3>{props.name}</h3>
            <p>{props.content.slice(0,200)}...</p>
            <h5>{props.author}</h5>
        </div>
        </>
    )
}
export default Blogcol;