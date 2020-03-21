import React from "react";
import { Route, Switch } from "react-router-dom";

import "../assets/stylesheets/header.scss";

import Header from "./common/header";
import Signup from "./login/reg";
import Login from "./login/login";
import CreateArticle from "./../components/article/createarticle";
import Home from "./../components/home/home";
import ViewArticle from "./../components/article/viewArticle";
import Profile from "./../components/user/profile";
import UpdateProfile from "./user/updateprofile";

function RequiredAuthRoute(property) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/tag/:tag" component={Home} />
      <Route path="/feed" component={Home} />
      <Route path="/setting" component={UpdateProfile} />
      <Route path="/new" component={CreateArticle} />
      <Route path="/article/:slug" component={ViewArticle} />
      {/* <Route path="/user" component={Profile} /> */}

      <Route
        path="/user"
        render={props => (
          <Profile logoutHandle={property.logoutHandle} {...props} />
        )}
      />

      <Route path="*" render={() => <h1>404 page not found</h1>}></Route>
    </Switch>
  );
}
function NotRequiredAuthRoute(property) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/tag/:tag" component={Home} />
      <Route path="/feed" component={Home} />
      <Route path="/article/:slug" component={ViewArticle} />
      <Route
        path="/login"
        render={props => (
          <Login updateIsLoggedIn={property.updateIsLoggedIn} {...props} />
        )}
      />
      <Route path="/signup" component={Signup} />
      <Route path="*" render={() => <h1>404 page not found</h1>}></Route>
    </Switch>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  updateIsLoggedIn = value => {
    this.setState({ isLoggedIn: value });
  };

  logoutHandle = () => {
    console.log("check history",this.props);
    localStorage.removeItem("conduit-token");
    this.props.history.push("/");
    this.setState({ isLoggedIn: false });
  };

  componentDidMount() {
    if (localStorage["conduit-token"]) {
      fetch(`https://conduit.productionready.io/api/user`, {
        method: "GET",
        headers: {
          authorization: `Token ${localStorage["conduit-token"]}`
        }
      })
        .then(res => {
          return res.json();
        })
        .then(user => {
          this.setState({ isLoggedIn: true });
        })
        .catch(err => {
          this.setState({ isLoggedIn: false });
        });
    }
  }

  render() {
    return (
      <>
        <Header isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <RequiredAuthRoute logoutHandle={this.logoutHandle} />
        ) : (
          <NotRequiredAuthRoute updateIsLoggedIn={this.updateIsLoggedIn} />
        )}
      </>
    );
  }
}

export default App;
