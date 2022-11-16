import axios from 'axios'
import React, { Component } from 'react'
import notfoundimage from '../../images/notfound.png';
export default class About extends Component {
  state={
    news:[]
  }
   getnews=async()=>{
let {data}= await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-10-15&sortBy=publishedAt&apiKey=b46de35b35e84a0ca3733f7dc247d826');
this.setState({ news: data.articles})
  }
  componentDidMount(){
    this.getnews();
  }
  render() {
    console.log(this.state.news);
    return (
    <>

<h2 className='text-center text-bold'> welcome to our news</h2>
    {/* <div className='parent'>
      <div className='container py-3'>
      <div className='col-md-12 col-sm-2 d-flex justify-content-center align-items-center fs-1 content3 mt-5'>
        <p className='p3 '>About</p>
      </div>
      <div className='col-md-12 d-flex justify-content-center align-items-center fs-1 content3 mb-5'>
      <span><i className="fa-solid fa-minus min-l3 "></i></span> <i className="fa-solid fa-star star3"></i><span><i className="fa-solid fa-minus min-r3"></i></span>
      </div>
      <div className='row d-flex justify-content-evenly align-items-center mb-5  '>
        <div className='leftside col-md-5'>
        <p className='par-left '>
        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
        </div>
        <div className='Rightside col-md-5'>
          <p>
          You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
          </p>
          </div>
      </div>
      </div>
    </div> */}
{this.state.news.length>0? <div className='row gy-3'>
{
    this.state.news.map((newItem,index)=>
      <div className='col-md-4'key={index}>
        <div className='new'>
       {newItem.urlToImage?<img className='w-100' src={newItem.urlToImage} alt=""/>:<img className='w-100' src={notfoundimage} alt=""/>}
          <h3>{newItem.author}</h3>
        </div>
      </div>
    )
  }
</div>:<div className='d-flex justify-content-center align-items-center min-vh-100'>
<i className='fa fa-spinner fa-spin fa-5x'></i>
  </div>}
    </>
    )
  }
}
