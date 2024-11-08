import React from 'react';
import Group from '../assets/Group.png'
import Blogcard from './blogcard';
const Ourblog = () => {
    return (
        <div className='bg-light p-5'>
            <div className='row py-3'>
    <div className='col'>
       
    <img className='float-end ' src={Group}/>        </div>
        <div className='col'>

        <h3 className='float-start'>Our Blog</h3>


        </div>
       
    </div>
    
    <h3 className='text-center'>Read More About Us</h3>  
    <h1 className='text-center text-info text-bold' > Our Latest News and Update</h1>
    <p className='p-3'>Empowering businesses with tailored consulting,
         cutting-edge technology solutions, and strategic marketing, we drive growth 
        through expert insights and innovative approaches.</p>
        <div>
            <Blogcard/>
        </div>
                </div>
    );
}

export default Ourblog;
