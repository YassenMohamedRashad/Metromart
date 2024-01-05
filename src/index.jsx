<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter } from 'react-router-dom';
=======
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import AccountDetails from "./Components/AccountDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/nav.css";
>>>>>>> Hyman



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
=======
	<React.StrictMode>
		<BrowserRouter>
			<Nav />

			<Routes>
				<Route path="/Metromart/" element={<App />} />
				<Route path="/Metromart/login" element={<Login />} />
				<Route path="/Metromart/signup" element={<Signup />} />
				<Route path="/Metromart/accountdetails" element={<AccountDetails />} />
			</Routes>

			<Footer />
		</BrowserRouter>
	</React.StrictMode>
>>>>>>> Hyman
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

