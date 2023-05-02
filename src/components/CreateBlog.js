import { useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function CreateBlog({user}) {
    const navigate = useNavigate();
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    function handleContentChange(event) {
        setContent(event.target.value)
    }
    function handleSubjectChange(event) {
        setSubject(event.target.value)
    }
    function handleCreate() {
        console.log(subject, content, user)
        const decodedUser = jwt_decode(user)
        console.log(decodedUser)
        fetch("/api/createBlog", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify({
                content: content,
            subject: subject,
            userId: decodedUser.user._id    
            })}).then(function(data){
                navigate("/blogs")
                console.log(data)
            }).catch(function(error){
                console.log(error)
            })
    }
    return(
        <div>
            Create your blog here:
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Subject</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" value={subject} onChange={handleSubjectChange}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Content</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={content} onChange={handleContentChange}></textarea>
</div>
<button type="button" class="btn btn-primary" onClick={handleCreate}>Create Blog</button>

        </div>

    )

}

export default CreateBlog;