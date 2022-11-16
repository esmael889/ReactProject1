import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
    <>
    <div className='grand '>
    <div className='container'>
    <div className='row d-flex justify-content-evenly align-items-center gy-5 '>
    <div className='col-md-4'>
      <h2 className='text-white'>LOCATION</h2>
      <p className='first-p'>2215 John Daniel Drive</p>
      <p> Clark, MO 65243</p>
    </div>
    <div className='col-md-4'>
      <h2 className='text-white mid-head'>AROUND THE WEB</h2>
      <span><i className="fa-brands fa-facebook-f text-white new ic-last "></i></span>
      <span><i className="fa-brands fa-twitter text-white ic-last"></i></span>
      <span><i className="fa-brands fa-linkedin-in text-white ic-last"></i></span>
      <span><i className="fa-brands fa-dribbble text-white ic-last"></i></span>
    </div>
    <div className='col-md-4'>
      <h2 className='text-white'>ABOUT FREELANCER</h2>
      <p>
      Freelance is a free to use,
       MIT licensed Bootstrap 
       theme created by Route
      </p>
    </div>
    </div>
    </div>
    </div>
    <footer>Copyright &copy; Your Website 2021</footer>
    </>
    )
  }
}
