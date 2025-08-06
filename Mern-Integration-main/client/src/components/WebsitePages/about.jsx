import React from 'react';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className='container mt-5'>
        <div className="container px-4 py-5">
          <div className="container marketing">

            <div className="mb-4">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold" style={{ color: '#5F9EA0' }}> Integration</h1>
                <p className="col-md-8 fs-4" style={{ color: 'black' }}>
                  Integration is a web platform where startups can share their profiles, showcase their services, and allow users to follow them for updates. Our community connects startups with essential ASP and IT services to drive growth and innovation.
                </p>
              </div>
            </div>

            {/* <div className="row">
              <div className="col-lg-4">
                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                </svg>
                <h2 className="fw-normal" style={{ color: 'black' }}>Heading 1</h2>
                <p style={{ color: 'black' }}>Explore our platform where startups can network, find collaborators, and share valuable business insights.</p>
              </div>
              <div className="col-lg-4">
                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                </svg>
                <h2 className="fw-normal" style={{ color: 'black' }}>Heading 2</h2>
                <p style={{ color: 'black' }}>Discover the services offered by startups and connect with the right partners to help your business thrive.</p>
              </div>
              <div className="col-lg-4">
                <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                  <title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                </svg>
                <h2 className="fw-normal" style={{ color: 'black' }}>Heading 3</h2>
                <p style={{ color: 'black' }}>Stay updated on the latest developments in the startup ecosystem by following your favorite startups.</p>
              </div>
            </div> */}

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1" style={{ color: '#5F9EA0' }}>Connecting Startups with Essential Services</h2>
                <p className="lead" style={{ color: 'black' }}>Our platform offers essential ASP and IT services to startups, helping them scale efficiently and effectively.</p>
              </div>
              <div className="col-md-5">
               <img
  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  width="500"
  height="500"
  alt="Placeholder"
/>

              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading fw-normal lh-1" style={{ color: '#5F9EA0' }}>Building a Thriving Startup Community</h2>
                <p className="lead" style={{ color: 'black' }}>Join a vibrant community of startups and IT professionals where you can share ideas, collaborate, and grow together.</p>
              </div>
              <div className="col-md-5 order-md-1">
               <img
  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
  src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lZXRpbmd8ZW58MHx8MHx8fDA%3D"
  width="500"
  height="500"
  alt="Placeholder"
/>

              </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
              <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1" style={{ color: '#5F9EA0' }}>Follow Startups for Real-Time Updates</h2>
                <p className="lead" style={{ color: 'black' }}>Stay informed with real-time updates and activities from your favorite startups, and never miss important news.</p>
              </div>
              <div className="col-md-5">
               <img
  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
  src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVwZGF0ZXN8ZW58MHx8MHx8fDA%3D"
  width="500"
  height="500"
  alt="Placeholder"
/>

              </div>
            </div>

          </div>

          <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <div className="col-md-4 d-flex align-items-center">
                <Link to="" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                </Link>
                <span className="mb-3 mb-md-0 text-body-secondary" style={{ color: '#5F9EA0' }}>© 2024 Integration, Inc</span>
              </div>

              <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                  <Link to="https://www.linkedin.com" target="_blank" className="text-body-secondary">
                    <i className="bi bi-linkedin" style={{ fontSize: '1.5em' }}></i>
                  </Link>
                </li>
                <li className="ms-3">
                  <Link to="https://www.instagram.com" target="_blank" className="text-body-secondary">
                    <i className="bi bi-instagram" style={{ fontSize: '1.5em' }}></i>
                  </Link>
                </li>
                <li className="ms-3">
                  <Link to="mailto:your-email@example.com" className="text-body-secondary">
                    <i className="bi bi-envelope" style={{ fontSize: '1.5em' }}></i>
                  </Link>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
