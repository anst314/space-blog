import { useState } from "react";
import jwt_decode from "jwt-decode";

function CreateBlog({user}) {
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
            body: JSON.stringify({
                content: content,
            subject: subject,
            userId: decodedUser.user._id    
            })}).then(function(data){
                console.log(data)
            }).catch(function(error){
                console.log(error)
            })
    }
    return(
        <div>
            CreateBlog Paste bootstrap material here:
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Subject</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" value={subject} onChange={handleSubjectChange}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">content</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={content} onChange={handleContentChange}></textarea>
</div>
<button type="button" class="btn btn-primary" onClick={handleCreate}>Create Blog</button>

        </div>

    )

}

export default CreateBlog;