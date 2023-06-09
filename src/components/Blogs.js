import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom"; 

  function Blogs({user}) {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const decodedUser = jwt_decode(user)
    console.log(decodedUser)
    
    function handleEdit (id) {
        navigate("/edit/" + id)
    }

    function handleDelete(id) {
        console.log(id)
        fetch('/api/delete/' + id, {
            method: 'DELETE'           
        }).then(function(data) {
            console.log(data)
            let copyOfBlogs = [...blogs]
            copyOfBlogs = copyOfBlogs.filter((blog) => blog._id != id)
            setBlogs(copyOfBlogs)
        })
    }
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
           {blog.content}
           {decodedUser.user._id === blog.userId && <button onClick={() => handleDelete(blog._id)}>Delete</button>}
           {decodedUser.user._id === blog.userId && <button onClick={() => handleEdit(blog._id)}>Edit</button>}
           </li>;         
        })}
      </ul>
    )

}

export default Blogs;