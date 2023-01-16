import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home";
import "./App.css";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import AboutPage from "./pages/About";
import BrandsPage from "./pages/Brands";
import PersistLogin from "./components/authorization/PersistLogin";
import RequireAuth from "./components/authorization/RequireAuth";
import Missing from "./pages/Missing";
import Cart from "./pages/Cart";
import Unauthorized from "./pages/Unauthorized";
import ServerErrorPage from "./pages/ServerError";
import AccountPage from "./pages/Account";


function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<PersistLogin />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/brands" element={<BrandsPage />} />

          <Route element={<RequireAuth allowedRoles={['User']} />}>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/account" element={<AccountPage />} />
          </Route>
      
          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route path="/internal" element={<ServerErrorPage />} />

          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
