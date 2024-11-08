import React from 'react';
import logo from '../assets/logo1.png'
import image from '../assets/image.png'
import Union from '../assets/Union.png'
import Group3 from '../assets/Group3.png'
import calls from '../assets/calls.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import x from '../assets/x.png'
import youtube from '../assets/youtube.png'

const Footer = () => {
    return (
        <div className="bg-image bg-cover" style={{ backgroundImage: `url(${image})` }}>
          
            <div className='row'>

                <div className='col text-center text-white '>
                    <img src={logo} alt=''/>

<h5 className='p-5' style={{wordSpacing:'15px'}}>Innovative IT solutions for <br/><h5>streamlined patient management,</h5><h5> scheduling, billing, and reporting,</h5> enhancing efficiency with ease. </h5>

<img className='px-3' src={facebook} alt=''/>

<img className='px-3' src={youtube} alt=''/>

<img className='px-3' src={x} alt=''/>

<img className='px-3' src={instagram} alt=''/>

                </div>
                <div className='col text-center p-5 text-white'>
                    <h3 className='text-white p-2'>Our Services</h3>
                    <h5 className='p-2'>Web Design & Development</h5>
                    <h5 className='p-2'>Mobile App Development</h5>
                    <h5 className='p-2'>Custom ERP System Development</h5>
                    <h5 className='p-2'>Data Science & Analytics</h5>


       </div>
      <div className='col text-center p-5'>

      <div className='text-white'>

      <h3 className='text-white p-2'>Contact Us</h3>

      <img src={Union} className="d-inline p-2  text-white"/>

<h5 class="d-inline px-2 py-4  text-white">1234 Innovation Drive, Suite 567 Tech
    <br/> City, ST 89012</h5><br/>
    
    <img src={Group3} className="d-inline p-2  text-white"/>
<h5 class="d-inline px-2 py-4  text-white">Admin@username.com
   </h5><br/>
    <img src={calls} className="d-inline p-2  text-white"/>
<h5 className="d-inline px-2 py-4   text-white">+92 314 3262631
   </h5>



      </div>
</div>
<hr className='text-white'/>
<h5 className='text-white p-1 text-center'>Copyrights 2024 Core revolution technology</h5>



            </div>
            
       
        </div>
    );
}

export default Footer;
