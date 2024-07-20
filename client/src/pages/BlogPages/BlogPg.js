import "../styles/BlogPg.css";
import blogs from "./BlogList";
import { useState } from "react";
import Blogcol from "./assets/Blogcol";
function Blogpg()
{
    const [blogList, setblogList]=useState(blogs);
    const [value, setValue] = useState("all");

    const handleChange = (event) => {
      setValue(event.target.value);
      
      const updatedBlogList=[];
      if(event.target.value!=="all")
      {
      blogs.map((blog)=>{
        if(blog.category===event.target.value)
        {
            updatedBlogList.push(blog);
        }
      })
      setblogList(updatedBlogList);
   
    }
    else{
        setblogList(blogs);
    }
}
    return(
        <>
          <div className="filterblogs">

                <label className="labelfilter">

                <span>What is your area of interest?</span>

                <select value={value} onChange={handleChange} className="selectfilter">
                <option value="all">All</option>
                    <option value="Bank Frauds">Bank Frauds</option>


                    <option value="Credit card Fraud">Credit card Fraud</option>

                </select>

                </label>
        </div>
        <div className="blogcolsec">
            {
                blogList.map((blog)=>(
                    <Blogcol name={blog.name} content={blog.content} author={blog.author} image={blog.image}/>
                ))
            }
        </div>
        </>
    )
}
export default Blogpg;