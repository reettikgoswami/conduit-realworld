import React from "react"
// import { Route, Router} from "react-router-dom"

import Header from "./common/header"
import Login  from "./login/login";

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <>
      <Header />
       <Login/>     
      </>
    )
  }
};

export default App ;