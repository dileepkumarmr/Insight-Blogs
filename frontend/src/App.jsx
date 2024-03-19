// import React from 'react';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"

import { Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
// import { UserContextProvider } from './context/UserContext'


const App = () => {
  return (
    <div>
      <Navbar />
      {/* <UserContextProvider> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      {/* </UserContextProvider> */}


      <Footer />
    </div>
  );
}

export default App;
