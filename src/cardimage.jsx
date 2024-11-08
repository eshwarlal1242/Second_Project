import React from 'react';

const Cardimage = () => {
    return (
        <div>
             <div className="container py-5">
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-3">
          <div className="card text-center shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-body">
              <div className="icon-container mb-3">
                <i className="fas fa-code fa-3x"></i>
              </div>
              <h5 className="card-title">Web Design & Develop.</h5>
              <p className="card-text">Tailored web solutions using React, Next.js, Blockchain, Bootstrap, Angular, WordPress.</p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>

            </div>
            </div>
            </div>
        
    );
}

export default Cardimage;
