import React, { Component } from 'react'
import imagenotfound from'../../images/notfound.png'
export default class Notfound extends Component {
  render() {
    return (
      <>
      <div className='text-center'>
      <img src={imagenotfound}alt=''/>
      </div>
</>
    )
  }
}
