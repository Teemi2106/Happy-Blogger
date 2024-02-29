import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import App from "../App";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<App />} />
      </Routes>
    </AnimatePresence>
  );
};

export default React.memo(AnimatedRoutes);
