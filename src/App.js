import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import CreatePost from "./components/Post/CreatePost";
import Login from "./components/Login/Login";
import { useState } from "react";
import {signOut} from 'firebase/auth'
import { auth } from "./firebase-config";


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));


  function SignOut() {
     signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login'
     })
  }

  return (
    <div>
      <Router>
        <Navbar isAuth={isAuth} signOut={SignOut}/>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth}/>} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/post" element={<CreatePost/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
