import React from 'react';
import email from '../assets/email.png'
import contact from '../assets/contact.png'
import location from '../assets/location.png'

const Ideas = () => {
    return (
        <div className='' style={{ backgroundColor: '#f0f7ff' }}>
            <div className='row'>
                <div className='col-sm-5   '>
 <div className="card p-4" style={{ backgroundColor: '#f0f7ff' }}>
            <form className='w-100 h-100'>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-person"></i></span>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text">+92</span>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="000 0000 000"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message <span className="text-danger">*</span></label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary rounded-pill w-25">
                  Let’s Discuss
                </button>
              </div>
            </form>
          </div>


                </div>
                <div className='col-sm-5 text-center '>
                    <h2 className='p-5'>Have an idea in mind?</h2>
                    <p className='p-5 text-bold '>Let’s turn your ideas into reality. Fill<br/> out the form below and our representative <br/> will reach out to you. Alternatively,<br/> skip the wait and connect directly with our team making a call<br/> or email us using the details below.</p>
                    <div className='container'>
                    <img src={email} className="d-inline px-2  text-white"/>
<h5 class="d-inline px-2   text-black">Admin@username.com
   </h5><br/>
   <img src={contact} className="d-inline p-2  text-white"/>
<h5 class="d-inline px-2 py-4  text-black">Admin@username.com
   </h5><br/>
   <img src={email} className="d-inline p-2  text-white"/>
<h5 class="d-inline px-2 py-4  text-black">Admin@username.com
   </h5><br/>
                        <div className='p-5'>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Ideas;
