import React, { Component } from 'react'
import background from '../../images/avataaars.svg';
export default class Home extends Component {


  render() {
    return (
  <>

<div className='Home'>
<div className='container'>

    <div className='col-md-12 d-flex justify-content-center align-items-center my-5 '>
    <img src={background} alt=''height={250}className="mt-5 mb-2"></img>
    </div>
    <div className='col-md-12 d-flex justify-content-center align-items-center '>
      <h1 className='text-white title'>Start React</h1>
    </div>
    <div className='col-md-12 d-flex justify-content-center align-items-center fs-1 content'>
    <span><i className="fa-solid fa-minus min-l "></i></span> <i className="fa-solid fa-star star"></i><span><i className="fa-solid fa-minus min-r"></i></span>
    </div>
    <div className='col-md-12 col-sm-2 d-flex justify-content-center align-items-center fs-1 content'>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  </div>

  </div>
  </>
    )
  }
}
