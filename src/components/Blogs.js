import { useEffect, useState } from "react";
 
  
  function Blogs() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('/api/blogs').then(function(data){
            return data.json()
        }).then(function(data){
            console.log(data.blogs)
            setBlogs(data.blogs)
        })
    }, [])
    return(
        <div>Blogs</div>
    )

}

export default Blogs;