import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login/Login.js";
import UserContext from "./contexts/UserContext.js";
import Register from "./pages/Register/Register.js";
import Home from "./pages/Home/Home.js";

export default function App() {

  const [token, setToken] = useState(null);

  return (
    <BrowserRouter>
        <UserContext.Provider value={{token, setToken}}>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/Home" element={<Home/>} />
          </Routes>
        </UserContext.Provider>
    </BrowserRouter>
  );
}