import React, { Component } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Home from "../Home/Home";
// import Footer from "../Footer/Footer";
import MasterLayout from "../MasterLayout/MasterLayout";
import Portfolio from '../Portfolio/Portfolio';
import Notfound from'../Notfound/Notfound'
export default class App extends Component {
  routes=createBrowserRouter([
    {path:'',element:<MasterLayout/>,errorElement:<Notfound/>, children:[
      {index:true, element:<Home/>},
      {path:'Portfolio',element:<Portfolio/>},
      {path:'About',element:<About/>},
      {path:'Contacts',element:<Contacts/>},
    ]}
  ])
  render() {
    return (
      <>
      <RouterProvider router={this.routes}/>
     </>
    )
  }
}
