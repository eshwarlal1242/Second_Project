import React from 'react';
import about from '../assets/about.png'
import Group from '../assets/Group.png'
import frame from '../assets/Frame.png'
import call from '../assets/call.png'
const About = () => {
    return (
        <div className='bg-white'>
            <div class="row">
        
           <div class="col-sm-6 p-5  text-white  ">

           <img className='w-auto h-auto mx-auto' src={about} alt=''/>
           </div>
           <div className="col-sm-6 p-3 ">
           <div className="row">
           <div className="col-sm-1 py-5  text-white  ">

           <img className=' w-auto h-auto' style={{width:'24px',height:'30PX'}} src={Group} alt=''/>
</div>
<div class="col py-5  text-white  ">
            <h2 className='text-primary'>About Us</h2>
            </div>
            </div>

            <h3 className='text-black'>Empowering Businesses with</h3>
            <h1 className='text-info'>Cutting-Edge IT Solutions</h1>
            <span className='py-5'>Our innovative approach combines deep industry knowledge with advanced
                 technology to deliver customized solutions that drive success. We help 
                 businesses transform their operations, optimize efficiency, and achieve
                  measurable growth.</span>
                  <div className='row'>
                  <div className='col'>
                  <div className='container'>
             <div className='row'>
             <div className="col-sm-2 px-2 py-5">
                <img src={frame}/>
                </div>
                <div className="col py-5 ">
                <h5 className='text-body'>Trusted Partner</h5>
                <span>High-Quality Reliability</span>
                </div>
             </div>
             </div>
             </div>
            <div className='col'>

            <div className='row'>
             <div className="col-sm-2 px-2 py-5 mx-auto">
                <img src={frame} alt=''/>
                </div>
                <div className="col py-5 ">
                <h5 className='text-body'>Trusted Partner</h5>
                <span>High-Quality Reliability</span>
                </div>
             </div>
            </div>
             
             </div>
<div className='row'>
    <div className='col'>
             <button type="button" class="btn  btn-outline-info btn-lg  rounded-pill bg-blue ">Secondary</button>
             </div>
             <div className='col'>

                <img src={ call }/>
                
                
                <span>Call Us On:</span>
                <span className='text-bold'>+92 314 326 2631</span>
             </div>
             </div>
           </div>
           </div>
        </div>
    );
}

export default About;
