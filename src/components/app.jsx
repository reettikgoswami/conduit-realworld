import React from "react"
import { Route } from "react-router-dom"


import Header from "./common/header"
import Signup  from "./login/reg";
import Login from "./login/login";

import Home from "./../components/home/home";

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <>
      <Header />
       <Home/>
      {/* <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/> */}
      </>
    )
  }
};

export default App ;