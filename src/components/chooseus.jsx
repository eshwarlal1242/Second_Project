import React from 'react';
import about from '../assets/about.png'
import Group from '../assets/Group.png'
import frame from '../assets/Frame.png'
import call from '../assets/call.png'
import percent from '../assets/percent.png'
import computer from '../assets/computer.png'
import perc from '../assets/perc.png'

const Chooseus = () => {
    return (
        <div className='bg-white'>
            <div class="row">
        
           <div className="col-sm-7 p-5 ">
           <div className="row">
           <div className="col-sm-1 py-5  text-white  ">

           <img className=' w-auto h-auto' src={Group} alt=''/>
</div>
<div class="col py-5  text-white  ">
            <h4 className='text-primary'>Why Choose Us</h4>
            </div>
            </div>

            <h3 className='text-black'>Delivering Innovative IT Solutions</h3>
            <h1 className='text-info'>Tailored to your Need</h1>
            <span className='py-5'>Our innovative approach combines deep industry knowledge with advanced
                 technology to deliver customized solutions that drive success. We help 
                 businesses transform their operations, optimize efficiency, and achieve
                  measurable growth.</span>
                  <div className='row'>
                  <div className='col'>
                  <div className='container'>
             <div className='row'>
             <div className="col-sm-3 px-2 py-5">
                <img src={perc}/>
                </div>
                <div className="col py-5 ">
                <h5 className='text-body'>Customer Satisfaction</h5>
                <span>Commitment to quality ensures satisfaction.</span>
                </div>
             </div>
             </div>
             </div>
            <div className='col'>

            <div className='row'>
             <div className="col-sm-3  py-5 ">
                <img src={percent} alt=''/>
                </div>
                <div className="col py-5 ">
                <h5 className='text-body'>Expertise in the Field</h5>
                <span>Expert team with deep IT knowledge.</span>
                </div>
             </div>
            </div>
             
             </div>
<div className='row'>
    <div className='col'>
             <button type="button" class="btn  btn-info btn-lg  rounded-pill bg-blue ">Read More  </button>
             </div>
             <div className='col'>

                <img src={ call }/>
                
                
                <span>Call Us On:</span>
                <span className='text-bold'>+92 314 326 2631</span>
             </div>
             </div>
           </div>
           
           <div class="col-sm-5 p-5  text-white  ">

           <img className='w-full mx-auto' src={computer} alt=''/>           </div>
           </div>
        </div>
    );
}

export default Chooseus;
