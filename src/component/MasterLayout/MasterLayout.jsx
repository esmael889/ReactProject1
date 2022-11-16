import React, { Component } from 'react'
import Navbar from'../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
export default class MasterLayout extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <div className="text-center  container">
       <Outlet></Outlet>
      </div>
      <Footer/>
      </>
    )
  }
}
