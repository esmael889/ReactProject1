import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-dark p-3">
  <div className="container-fluid">
    <a className="navbar-brand ms-3" href="#">start React</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      Menu<span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-2 ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={''}>Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to={'Portfolio'}>Portfolio</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to={'About'}>About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to={'Contacts'}>Contacts</Link>

        </li>
      </ul>
     
    </div>
  </div>
</nav>
  </>
    )
  }
}
