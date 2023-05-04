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
            return(
                <div class="card mb-2">
                <div class="card-body">
        <h5 class="card-title">{blog.subject}</h5>
        <p class="card-text">{blog.content}</p>
        {decodedUser.user._id === blog.userId && <button style={{marginRight: "10px"}} onClick={() => handleDelete(blog._id)}>Delete</button>}
        {decodedUser.user._id === blog.userId && <button onClick={() => handleEdit(blog._id)}>Edit</button>}
  </div>


                </div>
            )
        })}
      </ul>
    )

}

export default Blogs;