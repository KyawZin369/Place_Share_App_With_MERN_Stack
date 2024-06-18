import React from "react";
import PageForUser from "./user/pages/PageForUser";
import { Route, Routes } from "react-router-dom"; // Make sure you're using 'react-router-dom'
import MainNavigation from "./shared/components/MainNavigation";
import UserPlace from "./places/pages/UserPlace";

const App = () => {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<PageForUser />} />
        <Route path="/:UserId/place" element={<UserPlace/>}/>
      </Routes>
    </div>
  );
};

export default App;