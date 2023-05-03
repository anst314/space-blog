import {useState, useEffect} from 'react';
import Blogs from './components/Blogs';
import CreateBlog from './components/CreateBlog';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import logo from './logo.svg';
import './App.css';
import EditBlog from './components/EditBlog';
import NavBar from './components/NavBar';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setUser(token)
    }
  }, []);
  function handleLogIn(token) {
    localStorage.setItem('token', token)
    setUser(token)
  }
  return (
    <div className="App">
       { user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/blogs' element={ <Blogs user={user} setUser={setUser}/> }/>
        <Route path='/createblog' element={ <CreateBlog user={user} setUser={setUser}/> }/>
        <Route path='/edit/:id' element={ <EditBlog user={user} setUser={setUser}/> }/>
        <Route path='/*' element={ <Blogs user={user} setUser={setUser}/> }/>
        {/* <Route path='/orders' element={ <OrderHistoryPage user={user} setUser={setUser}/>  }/>
        <Route path='/*' element={<Navigate to='/orders/new' />}/> */}
      </Routes>
      </>
     : 
      <AuthPage setUser={setUser} handleLogIn={handleLogIn}/>
      }
      {/* <>
      <main>
        <header>
          <a href=""className="logo">Space Blog</a>
          <nav>
          <a href="">LogIn</a>
          <a href="">Register</a>
          </nav>
        </header>
      </main>
      </> */}
    </div>

    
  )
}

export default App;
