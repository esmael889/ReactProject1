import React, { Component } from 'react'
import Cabin from '../../images/cabin.png';
import Cake from '../../images/cake.png';
import circus from '../../images/circus.png';
import game from '../../images/game.png';
import submarine from '../../images/submarine.png';
import safe from '../../images/safe.png';




export default class Portfolio extends Component {
 
  render() {
    return (
      <>
         <div className='col-md-12 col-sm-2 d-flex justify-content-center align-items-center fs-1 content2 mt-5'>
        <p className='p2'>Portfolio</p>
      </div>
      <div className='col-md-12 d-flex justify-content-center align-items-center fs-1 content2 mb-5'>
      <span><i className="fa-solid fa-minus min-l2 "></i></span> <i className="fa-solid fa-star star2"></i><span><i className="fa-solid fa-minus min-r2"></i></span>
      </div>
   <div className='Gallary'>
    <div className='container'>
      

    <div className='row d-flex justify-content-center align-items-center gy-5'>
    <div className='col-md-4'>
    <div className="picture">
                <div className="overlay">
              <img src={Cabin}alt=''id="im1"></img>
                <div className="foile">
                <i className="fa-solid fa-circle-plus text-white icon"></i>
                </div>
                </div>
            </div>
    </div>
    <div className='col-md-4'>
    <div className="picture">
                <div className="overlay">
              <img src={Cake}alt=''id="im1"></img>
                <div className="foile">
                <i className="fa-solid fa-circle-plus text-white icon"></i>
                </div>
                </div>
            </div>
    </div>
    <div className='col-md-4'>
    <div className="picture">
                <div className="overlay">
              <img src={circus}alt=''id="im1"></img>
                <div className="foile">
                <i className="fa-solid fa-circle-plus text-white icon"></i>
                </div>
                </div>
            </div>
    </div>
    </div>



    <div className='row d-flex justify-content-center align-items-center gy-3 mt-1 mb-5'>
    <div className='col-md-4'>
    <div className="picture">
                <div className="overlay">
              <img src={game}alt=''id="im1"></img>
                <div className="foile">
                <i className="fa-solid fa-circle-plus text-white icon"></i>
                </div>
                </div>
            </div>
    </div>
    <div className='col-md-4'>
    <div className="picture">
                <div className="overlay">
              <img src={submarine}alt=''id="im1"></img>
                <div className="foile">
                <i className="fa-solid fa-circle-plus text-white icon"></i>
                </div>
                </div>
               
            </div>
    </div>
    <div className='col-md-4'>
    <div className="picture">
                <div className="overlay">
              <img src={safe}alt=''id="im1"></img>
                <div className="foile">
                <i className="fa-solid fa-circle-plus text-white icon"></i>
                </div>
              
                {/* <div className='imicon'>
                <i class="fa-solid fa-circle-plus text-white"></i>
                </div> */}
            </div>
            </div>
    </div>
    </div>
    </div>
   </div>
   <div className='box-container'>
    <div className='innerbox d-flex justify-content-between align-items-center position-relative p-3'>
      <i className='fa-regular fa-circle-xmark fa-2x position-absolute top-0 end-0 m-3'></i>
      <i className='fa-regular fa-circle-left fa-2x'></i>
      <i className='fa-regular fa-circle-right fa-2x'></i>
    </div>
   </div>
 

      </>
    )
  }
}
