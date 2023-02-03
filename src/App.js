import './App.css';
import {BrowserRouter, Routes, Route, Navigate, Outlet} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import MovieDetails from "./components/MovieDetails";
import AddMovie from "./components/AddMovie";
import {isExpired} from "react-jwt";
import Error from "./components/Error";
import Footer from "./components/Footer";
import React from "react";

function App() {

    const isNotLogged = isExpired(localStorage.getItem('token'));

    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<><NavigationBar/><Outlet/><Footer/></>}>
                  <Route index element={<Home />} />
                  <Route path="signin" element={!isNotLogged ? <Navigate replace to="/"/> : <Login/>} />
                  <Route path="signup" element={!isNotLogged ? <Navigate replace to="/"/> : <Register/>} />
                  <Route path="details" element={<MovieDetails />} />
                  <Route path="add" element={isNotLogged ? <Navigate replace to="/"/> : <AddMovie/>} />
                  <Route path="*" element={<Error />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
