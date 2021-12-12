import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MessengerContainer from "./components/Messenger/MessengerContainer";
import Review from "./components/Review/Review";
import UsersContainer from "./components/Users/UsersContainer";
import s from "./App.module.css";

import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <div className={s.app}>
          <Header />
          <div className={s.content}>
            <Route
              path="/review"
              render={() => <Review/>}
            />
            <Route
              path="/messenger"
              render={() => <MessengerContainer/>}
            />
             <Route
              path="/users"
              render={() => <UsersContainer/>}
            />
            <Footer />
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
