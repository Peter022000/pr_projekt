import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import MovieDetails from "./components/MovieDetails";
import AddMovie from "./components/AddMovie";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<NavigationBar />}>
                  <Route index element={<Home />} />
                  <Route path="signin" element={<Login />} />
                  <Route path="signup" element={<Register />} />
                  <Route path="details" element={<MovieDetails />} />
                  <Route path="add" element={<AddMovie />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
