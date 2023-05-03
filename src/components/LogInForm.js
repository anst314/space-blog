import { useState } from 'react';
//import {login} from '../../utilities/users-service';

export default function LoginForm({ handleLogIn }) {

const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});

const [error, setError] = useState('');

function handleChange(evt) {
  setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
  setError('');
}

async function handleSubmit(evt) {
  // Prevent form from being submitted to the server
  evt.preventDefault();
  try {
   fetch("/api/login", {
    method: "POST", 
    headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,      
    })
   }).then(function(data) {
    return data.json()
})
   
   .then(function(data){
          const token = data.token
          if(token) {
            handleLogIn(token)
          }
            }).catch(function(error){
                console.log(error)
            })

  } catch {
    setError('Log In Failed - Try Again');
  }
}

return (
  <div>
     <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={handleChange}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={handleChange}/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={handleSubmit}>LogIn</button>

    <p className="error-message">&nbsp;{error}</p>
  </div>
);
}