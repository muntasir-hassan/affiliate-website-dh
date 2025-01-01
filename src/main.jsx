import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home/Home.jsx";
import Blogs from "./Pages/Blogs/Blogs.jsx";
import Blog1 from "./Pages/Blog 1/Blog1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/blogs/how-to-choose-the-perfect-domain-name-for-your-business"
          element={<Blog1 />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
