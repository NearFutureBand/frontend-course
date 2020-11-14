import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import NavBar from '../components/NavBar';
import MainPage from '../pages/Main';
import SignInPage from '../pages/SignIn';

export default Navigator = () => {

  const [user, setUserData] = useState(null);

  return (
    <Router>
      <NavBar user={user} />
      {/* <Switch> смотрит в свои внутренние компоненты и
        рендерит первый из них, проп path которого совпадает с текущим URL */}
      <Switch>
        <Route path="/sign-in">
          <SignInPage setUserData={setUserData} />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
};