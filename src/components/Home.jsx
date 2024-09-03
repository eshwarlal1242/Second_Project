import React from 'react';
import design from '../assets/design.png'
import building1 from '../assets/building.png'
import peoples from '../assets/peoples.png'


const Home = () => {
    return (
        <div className="justify-content" style={{background:'#001857'}} >
<img style={{margin: '0 auto', Width: '1236px', height: '151px'}} src={design} alt=''/>            <div className="d-flex flex-row" style={{width: '100%'}}>

            <div className='content' style={{width: '60%',marginRight:'25px'}}>
            <h5 className='h' style={{width:'291px', height:'30px', margin:'35px', color:'white',width: '100%' }}>INNOVATE WITH TECHNOLOGY </h5>
            <h1 style={{width:'612px',height:'312px', color:'white', margin:'35px',width: '100%',fontWeight: 'bold'}}>We Drive Innovation <br/> with Custom Digital <br/> Solutions </h1>
            <p className='' style={{
  margin: '20px',
  color: 'white',
  textAlign: 'center'
}}>
  Stay competitive with our expertise in digital solutions,
  from web and mobile development to data science and custom ERP systems.
  We're here to future proof  your business.
</p>
<div>
<img style={{margin: '0 auto', maxWidth: '100%', height: 'auto', margin:'35px'}} src={peoples} alt=''/>
</div>

        </div>
        <div className="d-flex justify-content-center" style={{width: '100%'}}>
  <img src={building1} alt="" style={{maxWidth: '100%', height: 'auto'}}/>
</div>
        </div>
        </div>
    );
}

export default Home;
