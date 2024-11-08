import React from 'react';
import laptopman from '../assets/laptopman.png';
import Group from '../assets/Group.png';

const Faq = () => {
    return (
        <div className='bg-white'>
            <div className='p-5 '>
                <div className='row'>
                    <div className='d-flex col-sm-6 p-5'>
                    <img src={Group}  width='30px' height='30px'  />{ ' '} 
                    <h4 className='px-2'>FAQ</h4>
                    <div className='col'><br/>
                    <h5 className='text-black px-1'>Answer to your Questions</h5>
                    <h1 className='text-info'>Your have Questions, We have Answers...!</h1>
                    

                    <div className="dropdown p-4">
                    <button class="btn btn-white dropdown-toggle text-bold fw-bold fs-5 py-3 w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Do you use Practice Groups in Front Desk?
</button>
  <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
  </ul>
  <button class="btn btn-white dropdown-toggle text-bold fw-bold fs-5 py-4 w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
  Do you use Practice Groups in Front Desk?
</button>
  <ul className="dropdown-menu p-3" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
  </ul>
  <button class="btn btn-white dropdown-toggle text-bold fw-bold fs-5 py-3 w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Do you use Practice Groups in Front Desk?
</button>
  <ul className="dropdown-menu p-3" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item fs-3" href="#">If so, do you use them to represent Location <br/>if not how do you show location</a></li>
  </ul>
  <button class="btn btn-white dropdown-toggle text-bold fw-bold fs-5 py-3 w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Do you use Practice Groups in Front Desk?
</button>
  <ul className="dropdown-menu p-3" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
  </ul>
</div>
                    </div>



                    </div>
                    <div className='d-flex col-sm-6'>
                        <img src={laptopman}/>

                        
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default Faq;
