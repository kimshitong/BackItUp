import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./layout/Navbar"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddUser from "./users/AddUser"
import Post from './pages/Post'
import Invest from './pages/Invest'
import Admin from './pages/admin/Admin';
import Thanks from './pages/Thanks';
import { useState } from 'react';
import LogIn from './pages/LogIn';
import CreatePost from './pages/CreatePost';
import CreateCompany from './pages/CreateCompany';
import Wallet from './pages/wallet/Wallet';
import Oops from './pages/Oops';
import Topup from './pages/Topup';
import Withdraw from './pages/Withdraw';
import Footer from './layout/Footer'
import { Helmet } from 'react-helmet';

function App() {

  const [isAuth, setIsAuth] = useState({ isLoggedIn: false, userID: null })
  const [currUser, setCurrUser] = useState({})

  const [pageTitle, setPageTitle] = useState("BackItUp • Equity crowd-funding made easy")

  const { isLoggedIn, isCompany, userID } = isAuth

  return (
    <div className="App">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <Router>
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} currUser={currUser} setCurrUser={setCurrUser}/>

        <Routes>

          {/* Public routes */}
          <Route exact path ="/" element={<Home setPageTitle={setPageTitle} />} />
          <Route exact path ="/adduser" element={<AddUser setPageTitle={setPageTitle} />} />
          <Route path ="/post" element={<Post isAuth={isAuth} setPageTitle={setPageTitle} />} /> {/* find a way to make this a unique link for each project */}
          <Route path ="/post/:id" element={<Post isAuth={isAuth} setPageTitle={setPageTitle} />} /> {/* find a way to make this a unique link for each project */}
          <Route exact path ="/admin" element={<Admin/>} />
          <Route exact path ="/thanks" element={<Thanks/>} />
          <Route exact path ="/login" element={<LogIn setCurrUser={setCurrUser} setIsAuth={setIsAuth} setPageTitle={setPageTitle} />} />
          <Route path ="/create" element={<CreatePost currUser={currUser} />} />
          <Route path ="/createcompany" element={<CreateCompany currUser={currUser} />} />
          <Route path ="/wallet" element={<Wallet currUser={currUser} setCurrUser={setCurrUser}/>} />
          <Route path ="/wallet/:id" element={<Wallet currUser={currUser} />} />
          <Route path ="/oops" element={<Oops setPageTitle={setPageTitle} />} />
        
          {/* Private routes */}
          <Route path ="/invest/:id" element={<Invest isAuth={isAuth} />} />
          <Route path ="/topup" element={<Topup currUser={currUser} isAuth={isAuth} />} />
          <Route path ="/withdraw" element={<Withdraw currUser={currUser} isAuth={isAuth} />} />

        </Routes>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
