// Import web pages and components

import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";


import homePage from "./webpages/homePage";
import landingPage from "./webpages/landingPage";
import signupPage from "./webpages/signupPage";


// Render the homepage component
const App = () => {
  return (
    <HashRouter> 
      <Routes>
        <Route path="/" element={<homePage />} />
        <Route path="/landing" element={<landingPage />} />
        <Route path="/signup" element={<signupPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
