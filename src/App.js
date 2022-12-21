import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import HomePage from "./pages/Home";

function App() {
  return (
    <div>
    <MainNavigation/>
    <Routes>
      <Route path="/" element={<HomePage />}/>
    </Routes>
    </div>
  );
}

export default App;
