
import React from "react";
import {Route,Routes} from 'react-router-dom';
import HometHOC from "./HOC/Home.HOC";
import ContactHOC from "./HOC/ContactHOC";
import ProfileHOC from "./HOC/ProfileHOC";
import LoginPage from "./Page/Login.page";
import RegistrationPage from "./Page/registration.page";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<HometHOC />} />
          <Route path="/profile" element={<ProfileHOC />} />
          <Route path="/contact" element={<ContactHOC />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </>
  );
}

export default App;
