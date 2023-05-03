import { useState } from "react";
import {signUp} from './utilities/users-service';
import { useNavigate } from "react-router-dom";

function SignUpForm({setUser}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const disable = formData.password !== formData.confirm;

  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    
    try {
      // data to be send to the backend to create a new user
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password
      }
      console.log(userData)
      // returns a token with the user info
      const user = await signUp(userData); // user service
      console.log('SignUpForm', user)

      setUser(user);
      navigate("/createblog");

    } catch (error) {
      setFormData({...formData, error: "Sign Up Failed - Try Again"})
    }
};

  const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value, error: ''})
  };

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Name</label>
        <input type="text" class="form-control" name="name" value={formData.name} onChange={handleChange}/>
    </div>  
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name="email" value={formData.email} onChange={handleChange}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={formData.password} onChange={handleChange}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Confirm</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name="confirm" value={formData.confirm} onChange={handleChange}/>
  </div>
  <button type="submit" disabled={disable} class="btn btn-primary">SignUp</button>
            {/* <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
            
            <label>Email</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} required/>
            
            <label>password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required/>
            
            <label>Confirm</label>
            <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required/>

            <button type="submit" disabled={disable}>SIGN UP</button> */}
        </form>
      </div>

      <p className="error-message">{formData.error}</p>
    </div>
  );
}

export default SignUpForm;