import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import axios from 'axios';
import { server } from './main';
import { Context } from './main';
import { useContext } from 'react';

function App() {
  const {setUser, setIsAuthenticated} = useContext(Context);
  useEffect(() => {
    axios.get(`${server}/users/me`, {
      withCredentials: true,
    }).then(res=> {
      setUser(res.data.user);
      setIsAuthenticated(true);
    }).catch((error) => {
      setUser({});
      setIsAuthenticated(true);
    })
  }, [])

  return (
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
    <Toaster/>
  </Router>
  );
}

export default App
