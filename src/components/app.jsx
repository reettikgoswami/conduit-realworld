import React from "react";
import { Route } from "react-router-dom";

import Header from "./common/header";
import Signup from "./login/reg";
import Login from "./login/login";
import CreateArticle from "./../components/article/createarticle" ;
import Home from "./../components/home/home";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/new" component={CreateArticle} />
      </>
    );
  }
}

export default App;
