import React, { useCallback, useState } from "react";
import PageForUser from "./user/pages/PageForUser";
import { Route, Routes, useNavigate } from "react-router-dom";
import MainNavigation from "./shared/components/MainNavigation";
import UserPlace from "./places/pages/UserPlace";
import AddPlace from "./places/pages/AddPlace";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./shared/components/Auth";
import { authContext } from "./shared/Context/LoginContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Navigate = useNavigate();

  const login = useCallback(() => {
    setIsLoggedIn(true);
    Navigate('/')
  }, [Navigate]);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    Navigate('/')
  }, [Navigate]);

  console.log(isLoggedIn)

  let RouteAuth;

  if (isLoggedIn) {
    RouteAuth = (
      <Routes>
        <Route path="/" element={<PageForUser />} />
        <Route path="/place/new" element={<AddPlace />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="/:UserId/place" element={<UserPlace />} />
        <Route path="/*" element={<PageForUser/>}/>
      </Routes>
    );
  } else {
    RouteAuth = (
      <Routes>
        <Route path="/" element={<PageForUser />} />
        <Route path="/:UserId/place" element={<UserPlace />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="*" element={<PageForUser/>}/>
      </Routes>
    );
  }

  return (
    <div>
      <authContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          login: login,
          logout: logout,
        }}
      >
        <MainNavigation />
        {RouteAuth}
      </authContext.Provider>
    </div>
  );
};

export default App;
