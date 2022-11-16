import React, { Component } from 'react'

export default class Contacts extends Component {
  render() {
    return (
    <>
     <div className='col-md-12 col-sm-2 d-flex justify-content-center align-items-center fs-1 content4 mt-5'>
        <p className='p4 '>CONTACT ME</p>
      </div>
      <div className='col-md-12 d-flex justify-content-center align-items-center fs-1 content4 mb-5'>
      <span><i className="fa-solid fa-minus min-l4 "></i></span> <i className="fa-solid fa-star star4"></i><span><i className="fa-solid fa-minus min-r4"></i></span>
      </div>
      <div>


  <div className="mb-3 col-md-5 m-auto">
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
  </div>
  <div className="mb-3 col-md-5 m-auto">
    <input type="email" className="form-control"required id="exampleFormControlInput1" placeholder="Email Address" />
  </div>
  <div className="mb-3 col-md-5 m-auto">
    <input type="tel" className="form-control"required id="exampleFormControlInput1" placeholder="Phone Number" />
  </div>
  <div className="mb-3 col-md-5 m-auto">
    <textarea className="form-control" id="exampleFormControlTextarea1"placeholder='Message' rows={3}cols={5} defaultValue={""} />
    
  <button type='submit' className='btn btn-success mt-3 py-2 px-5 fs-5 mb-5 '>send</button>

  </div>

</div>

    </>
    )
  }
}
