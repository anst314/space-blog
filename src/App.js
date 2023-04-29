import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Blogs from './components/Blogs';
import CreateBlog from './components/CreateBlog';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import logo from './logo.svg';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setUser(token)
      navigate("/createblog");
    }
  }, []);
  return (
    <div className="App">
       { user ? 
      <>
      {/* <NavBar user={user} setUser={setUser}/> */}
      <Routes>
        <Route path='/blogs' element={ <Blogs user={user} setUser={setUser}/> }/>
        <Route path='/createblog' element={ <CreateBlog user={user} setUser={setUser}/> }/>
        {/* <Route path='/orders' element={ <OrderHistoryPage user={user} setUser={setUser}/>  }/>
        <Route path='/*' element={<Navigate to='/orders/new' />}/> */}
      </Routes>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
      <>
      <main>
        <header>
          <a href=""className="logo">Space Blog</a>
          <nav>
          <a href="">LogIn</a>
          <a href="">Register</a>
          </nav>
        </header>
      </main>
      </>
    </div>

    
  )
}

export default App;
