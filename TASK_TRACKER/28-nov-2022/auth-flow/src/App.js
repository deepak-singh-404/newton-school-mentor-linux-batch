import React from "react";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>


          <Route path="login" index element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
