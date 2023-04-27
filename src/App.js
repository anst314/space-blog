import {useState} from 'react';
import Blogs from './components/Blogs';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import logo from './logo.svg';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
       { user ? 
      <>
      {/* <NavBar user={user} setUser={setUser}/> */}
      <Routes>
        <Route path='/blogs' element={ <Blogs user={user} setUser={setUser}/> }/>
        {/* <Route path='/orders' element={ <OrderHistoryPage user={user} setUser={setUser}/>  }/>
        <Route path='/*' element={<Navigate to='/orders/new' />}/> */}
      </Routes>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
    </div>
  );
}

export default App;
