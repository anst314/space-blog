import { useState } from 'react';
//import {login} from '../../utilities/users-service';

export default function LoginForm({ setUser }) {

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
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
  //  const user = await login(credentials);
  //  console.log(user);
  //  setUser(user);
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
  <button type="submit" class="btn btn-primary">LogIn</button>

    <p className="error-message">&nbsp;{error}</p>
  </div>
);
}