import React from 'react';
import Group from '../assets/Group.png';
import female from '../assets/female.png'

const Clientreview = () => {
    return (
        <div className='bg-primary p-4 m-4'>
           <div className='row'>
            <div className='col-sm'>
            <img src={Group} className="img-fluid float-end" />  
            
                        </div>
                <div className='col-sm'>
                <h5 className='text-white '>Client Review</h5>

               
            </div>
           </div>
           <h4 className='text-center p-2' >{'    '}Our Testinomials</h4>
           <h1 className='text-center text-white'>Whate People Are Saying</h1>
           <p className='p-4 text-bold'>Explore what the world’s leading businesses, from startups to global enterprises, have achieved with the
             Nexius Customer Engagement Platform.</p>

             <div className='row'>
                <div className='col-5'>
                    
    <img src={female}/>
    <img src={female} alt=''/>
    <img src={female} alt='' />

                    </div>
                    <div className='col-7'>
                        <h5 className='text-center p-5 text-white  float-end'>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium dolore mquey laudantium, totam rem aperiam eaque 
                            ipsa quae abillo inventore veritatis quase</h5>
                       
                        <h2>Hello</h2>
                  

                </div>
             </div>

            
        </div>
    );
}

export default Clientreview;
