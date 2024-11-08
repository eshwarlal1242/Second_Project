import React from 'react';
import skill from './assets/skill.png'
import Group from './assets/Group.png'

const Skill = () => {
    return (
        <div>
            <div className='bg-white'>
            <div class="position-relative">
            <img className='img-fluid w-100 ' src={skill} alt=''/>

            <div class="position-absolute top-0 start-50 p-5 ">
             <div className='row'>
                <div className='col-sm-3'>
                <img src={Group}/>
                </div>
                <div className='col'>
                <h5 className='text-white  centered'></h5>

                </div>
             </div>
               
                        </div>
          


            </div>
                        </div>
        </div>
    );
}

export default Skill;
