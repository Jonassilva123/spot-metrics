import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";

export default function UseRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="app" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Navigate to="/app" />
        </Route>
      </Routes>
    </>
  );
}
