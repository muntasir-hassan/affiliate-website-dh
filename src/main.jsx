import React, { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home/Home.jsx";
import Blogs from "./Pages/Blogs/Blogs.jsx";
import Blog1 from "./Pages/Blogs/Blog 1/Blog1.jsx";

// Google Analytics tracking hook
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-LCXTS90DWV", {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

const App = () => {
  usePageTracking();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route
        path="/blogs/how-to-choose-the-perfect-domain-name-for-your-business"
        element={<Blog1 />}
      />
    </Routes>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
