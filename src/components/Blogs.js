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
        <ul>
        { blogs.map((blog) => {
          return <li>{blog.userId},
           {blog.subject}, 
           {blog.content}</li>;
          
        })}
      </ul>
    )

}

export default Blogs;