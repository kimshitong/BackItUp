import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./layout/Navbar"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddUser from "./users/AddUser"
import Post from './pages/Post'
import Invest from './pages/Invest'
import Admin from './pages/Admin';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path ="/" element={<Home/>} />
          <Route exact path ="/adduser" element={<AddUser/>} />
          <Route path ="/post" element={<Post/>} /> {/* find a way to make this a unique link for each project */}
          <Route path ="/post/:id" element={<Post/>} /> {/* find a way to make this a unique link for each project */}
          <Route exact path ="/invest" element={<Invest/>} /> {/* find a way to make this a unique link for each project */}
          <Route exact path ="/admin" element={<Admin/>} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
