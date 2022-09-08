import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../pages/dashboard/Dashboard'
import Question from '../pages/question/Question'

function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/FrancyLanguage" element={<Question/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
