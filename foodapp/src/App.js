import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './component/Header';
import Cards from "./component/Cards";
import "./component/CssFile/Cards.css";
import "./component/CssFile/Header.css";
import { Routes, Route } from 'react-router-dom';
import CardDetails from './component/CardDetails';
import "./component/CssFile/CardDetails.css";
import Payment from "./component/Payment";
import BannerPage from './component/BannerPage';
import SignUp from './component/SignUp';
import Login from './component/Login';
import Success from './component/Success';
import Cancle from './component/Cancle';

function App() {
  return (
    <>

      <Routes>

      {/* <Route  path="/" element={<LogSign/>} /> */}
      <Route  path="/" element={<BannerPage/>} />
      <Route  path="/signup" element={<SignUp/>} />
      <Route  path="/login" element={<Login/>} />
        {/* <Route  path="/forms" element={<Cards />} /> */}
        
        <Route  path="/home" element={<Cards />} />
        {/* <Route  path="/login" element={<BannerPage/>} /> */}
        <Route  path="/cart" element={<CardDetails/>} />
        <Route  path="/payment" element={<Payment/>} />
        <Route  path="/success" element={<Success/>} />
        <Route  path="/cancle" element={<Cancle/>} />
      </Routes>
      {/* <Footer/> */}

    </>

  );
}

export default App;