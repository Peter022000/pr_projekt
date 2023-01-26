import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import MovieDetails from "./components/MovieDetails";
import AddMovie from "./components/AddMovie";
import {isExpired} from "react-jwt";

function App() {

    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<NavigationBar />}>
                  <Route index element={<Home />} />
                  <Route path="signin" element={!isExpired(localStorage.getItem('token')) ? <Navigate replace to="/"/> : <Login/>} />
                  <Route path="signup" element={!isExpired(localStorage.getItem('token')) ? <Navigate replace to="/"/> : <Register/>} />
                  <Route path="details" element={<MovieDetails />} />
                  <Route path="add" element={isExpired(localStorage.getItem('token')) ? <Navigate replace to="/"/> : <AddMovie/>} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
