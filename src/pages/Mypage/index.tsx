import React, { useEffect, useState } from "react";
import Header from "containers/Header";


import {
  BrowserRouter as Router,
  Route,
  useHistory,
 
} from "react-router-dom";
import * as S from "./style";
import Homepage from "./Homepage";
import Purchase from "./Purchase";
import Purchase2 from "./Purchase2";
import Home from "./Home";
import Yeolame from "./Yeolame";
import Connect from "./Connect";
import Coming from "components/Coming";
import Login from "components/login";



function MyPage() {



  return (
 
  <Router>
    <div className="App">
      <Header />
      <Route exact path="/">
         <Home/>
        </Route>
        <Route exact  path ="/Yeolmae Company">
							<Yeolame   />
           			</Route>
							<Route exact path ="/Disclosure Indicator">
							<Yeolame/>
							</Route>
							<Route exact path ="/Media Coverage">
							<Yeolame/>
							</Route>
              <Route exact path ="/Group Purchase">
							<Connect/>
							</Route>
              <Route exact path ="/NFT Marketplace">
							<Coming/>
							</Route>
        <Route exact path="/ServiceCenter" >
         <Homepage/>
        </Route>
        <Route exact  path="/Co-ownership status" >
         <Purchase/>
        </Route>
        <Route exact path ="/purchase">
          <Purchase2/>
        </Route>
        <Route exact path ="/Login">
          <Login/>
        </Route>
    </div>
  </Router>
  
  
      
  )
}

export default MyPage;
