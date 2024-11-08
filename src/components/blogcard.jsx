import React from 'react';
import growth from '../assets/growth.png'
import boy from '../assets/boy.png'
import Calander from '../assets/Calander.png'
import comment from '../assets/comment.png'
const Blogcard = () => {
    return (
        <div >
            <div className="row">
            <div className="col-md-4">
    <div className="card">
      <img src={growth} className="card-img-top" alt="..."/>
      <div className="card-body">
        <div className='row'>
            <div className='col-sm-1'>
        <img src={boy} className='rounded-circle'/>
        </div>
       
        <div className='col p-4'>

        <h5 className="card-title">CharLie</h5>
        </div> 
        </div>
     
        <h4 className="card-text">Manage Design System Theme With CSS Color-Contrast</h4>
        <hr/>
        <div className='row'>
          
            <div className='col p-2'>
                <img src={Calander}/>
               {'  '} July 2022
            </div>
            <div className='col'>
            <div className='col p-2'>
                <img src={comment} className='px-2'/>
                   13 Comments
            </div> 
        </div>
        </div>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
 
  
  </div>
  <div className="col-md-4">
    <div className="card">
      <img src={growth} className="card-img-top" alt="..."/>
      <div className="card-body">
        <div className='row'>
            <div className='col-sm-1'>
        <img src={boy} className='rounded-circle'/>
        </div>
       
        <div className='col p-4'>

        <h5 className="card-title">CharLie</h5>
        </div> 
        </div>
     
        <h4 className="card-text">Manage Design System Theme With CSS Color-Contrast</h4>
        <hr/>
        <div className='row'>
          
            <div className='col p-2'>
                <img src={Calander}/>
                13-12-2022
            </div>
            <div className='col'>
            <div className='col p-2'>
                <img src={comment} className='px-2'/>
                   13 Comments
            </div> 
        </div>
        </div>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

  
  </div>
  <div className="col-md-4">
    <div className="card">
      <img src={growth} className="card-img-top" alt="..."/>
      <div className="card-body">
        <div className='row'>
            <div className='col-sm-1'>
        <img src={boy} className='rounded-circle'/>
        </div>
       
        <div className='col p-4'>

        <h5 className="card-title">CharLie</h5>
        </div> 
        </div>
     
        <h4 className="card-text">Manage Design System Theme With CSS Color-Contrast</h4>
        <hr/>
        <div className='row'>
          
            <div className='col p-2'>
                <img src={Calander}/>
                13-12-2022
            </div>
            <div className='col'>
            <div className='col p-2'>
                <img src={comment} className='px-2'/>
                   13 Comments
            </div> 
        </div>
        </div>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  
  </div>
</div>
       
    );
}

export default Blogcard;
