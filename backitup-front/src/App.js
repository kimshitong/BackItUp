import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./layout/Navbar"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddUser from "./users/AddUser"
import Post from './pages/Post'
import Invest from './pages/Invest'
import Admin from './pages/Admin';
import Thanks from './pages/Thanks';
import { useState } from 'react';
import LogIn from './pages/LogIn';
import CreatePost from './pages/CreatePost';
import CreateCompany from './pages/CreateCompany';
import Wallet from './pages/Wallet';
import Oops from './pages/Oops';
import Topup from './pages/Topup';
import Withdraw from './pages/Withdraw';


function App() {

  const [isAuth, setIsAuth] = useState([])
  const [currUser, setCurrUser] = useState([])

  const { isLoggedIn, userID } = isAuth

  return (
    <div className="App">
      <Router>
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} currUser={currUser} setCurrUser={setCurrUser}/>

        <Routes>
          <Route exact path ="/" element={<Home/>} />
          <Route exact path ="/adduser" element={<AddUser/>} />
          <Route path ="/post" element={<Post/>} /> {/* find a way to make this a unique link for each project */}
          <Route path ="/post/:id" element={<Post/>} /> {/* find a way to make this a unique link for each project */}
          <Route exact path ="/invest" element={<Invest/>} /> {/* find a way to make this a unique link for each project */}
          <Route exact path ="/admin" element={<Admin/>} />
          <Route exact path ="/thanks" element={<Thanks/>} />
          <Route exact path ="/login" element={<LogIn setCurrUser={setCurrUser} setIsAuth={setIsAuth} />} />
          <Route path ="/create" element={<CreatePost />} />
          <Route path ="/createcompany" element={<CreateCompany currUser={currUser} />} />
          <Route path ="/wallet" element={<Wallet currUser={currUser} setCurrUser={setCurrUser}/>} />
          <Route path ="/wallet/:id" element={<Wallet currUser={currUser} />} />
          <Route path ="/topup" element={<Topup currUser={currUser} isAuth={isAuth} />} />
          <Route path ="/oops" element={<Oops />} />
          <Route path ="/withdraw" element={<Withdraw currUser={currUser} isAuth={isAuth} />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
