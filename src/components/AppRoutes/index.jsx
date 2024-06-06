import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HireDeveloperScreen from "../../screens/HireDeveloperScreen";
import ApplyForJobScreen from "../../screens/ApplyForJobScreen";
import CompanyBenchScreen from "../../screens/CompanyBenchScreen";
import FindJobScreen from "../../screens/FindJobScreen";
import FindCandidatesScreen from "../../screens/FindCandidatesScreen";
import SignUpScreen from "../../screens/SignUpScreen";
import ContactUsScreen from "../../screens/ContactUsScreen";
import BlogScreen from "../../screens/BlogScreen";
import RegisterScreen from "../../screens/RegisterScreen";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<CompanyBenchScreen />} />
      <Route exact path="/apply-for-job" element={<ApplyForJobScreen />} />
      <Route path="/hire-developer" element={<HireDeveloperScreen />} />
      <Route path="/find-job" element={<FindJobScreen />} />
      <Route path="/find-candidates" element={<FindCandidatesScreen />} />
      <Route path="/blog" element={<BlogScreen />} />
      <Route path="/contact-us" element={<ContactUsScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/sign-in" element={<SignUpScreen />} />
    </Routes>
  );
};

export default AppRoutes;
