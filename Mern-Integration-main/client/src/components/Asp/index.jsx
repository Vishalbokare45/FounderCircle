import React from 'react';
import NavbarS from '../Navbar';
import { Link } from 'react-router-dom';

const Asp = () => {
  return (
    <>
      <NavbarS />
      <div className='container mt-5'>
        <div className='container  my-3'>
          <div className="pt-5 row g-3">
        <h3 className='text-start text-muted'>Our Services</h3>
            <div className="col-12 col-md-6 col-lg-4">
              <Link to="/webs" style={{ textDecoration: 'none' }} className="card h-100 text-dark">
                <div className="card-body">
                  <h5 className="card-title  py-2" style={{ color: '#5F9EA0' }}>Web Development and Design Services</h5>
                  <p className="card-text py-2">We create responsive and visually appealing websites tailored to your business needs, ensuring a seamless user experience.</p>
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <Link to="/apps" style={{ textDecoration: 'none' }} className="card h-100 text-dark">
                <div className="card-body">
                  <h5 className="card-title  py-2" style={{ color: '#5F9EA0' }}>Mobile App Development</h5>
                  <p className="card-text py-2">Our mobile app development services deliver high-quality applications for iOS and Android, enhancing user engagement and satisfaction.</p>
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <Link to="/advs" style={{ textDecoration: 'none' }} className="card h-100 text-dark">
                <div className="card-body">
                  <h5 className="card-title  py-2" style={{ color: '#5F9EA0' }}>Advertising Services</h5>
                  <p className="card-text py-2">We offer comprehensive advertising solutions, including digital marketing strategies to boost your brand's visibility and reach.</p>
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <Link to="/sms" style={{ textDecoration: 'none' }} className="card h-100 text-dark">
                <div className="card-body">
                  <h5 className="card-title  py-2" style={{ color: '#5F9EA0' }}>Sales and Marketing Services</h5>
                  <p className="card-text py-2">Our sales and marketing services help you to identify target audiences and implement effective strategies to increase conversions.</p>
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <Link to="/dabis" style={{ textDecoration: 'none' }} className="card h-100 text-dark">
                <div className="card-body">
                  <h5 className="card-title  py-2" style={{ color: '#5F9EA0' }}>Data Analytics and Business Intelligence</h5>
                  <p className="card-text py-2">We provide data analytics and business intelligence solutions to help you make informed decisions based on actionable insights.</p>
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <Link to="/sds" style={{ textDecoration: 'none' }} className="card h-100 text-dark">
                <div className="card-body">
                  <h5 className="card-title  py-2" style={{ color: '#5F9EA0' }}>Software Development</h5>
                  <p className="card-text py-2">Our software development services are designed to deliver high-quality solutions that meet your unique business requirements.</p>
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <Link to="/ecs" style={{ textDecoration: 'none' }} className="card h-100 text-dark">
                <div className="card-body">
                  <h5 className="card-title  py-2" style={{ color: '#5F9EA0' }}>E-commerce Solutions</h5>
                  <p className="card-text py-2">We offer comprehensive e-commerce solutions to help you build and grow your online store, enhancing the shopping experience.</p>
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <Link to="/gds" style={{ textDecoration: 'none' }} className="card h-100 text-dark">
                <div className="card-body">
                  <h5 className="card-title  py-2" style={{ color: '#5F9EA0' }}>Graphic and UI/UX Design</h5>
                  <p className="card-text py-2">Our design services focus on creating stunning graphics and user-friendly interfaces to elevate your brand's identity.</p>
                </div>
              </Link>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <Link to="/cs" style={{ textDecoration: 'none' }} className="card h-100 text-dark">
                <div className="card-body">
                  <h5 className="card-title  py-2" style={{ color: '#5F9EA0' }}>Cloud Services</h5>
                  <p className="card-text py-2">We provide cloud solutions to enhance your business operations, ensuring scalability, security, and flexibility.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Asp;
