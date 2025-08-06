import React from 'react'
import { Link } from 'react-router-dom';

const Apps = () => {
  return (
    <> 
       <div className="container mt-5">
        <div className="continer  my-3">
        <h5  style={{ color: '#5F9EA0' }}>Mobile App Development</h5>

        <div className="container px-4 py-5">
            <div className="row g-4 row-cols-1 row-cols-lg-3">
              
              <div className="col">
                <div className="card h-100">
                  <img src="https://cdn.jotfor.ms/templates/screenshot/app-templates/small-business-crm-app.webp?w=348&v=4219987267" className="card-img-top" alt="Business" style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <h3 className="text-body-emphasis">Business</h3>
                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                    <div className="mt-auto text-center">
                      <Link to="https://www.jotform.com/app-templates/small-business-crm-app" className="btn" style={{ backgroundColor: '#5F9EA0', color: '#fff' }}>
                        Preview
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <img src="https://cdn02.jotfor.ms/templates/screenshot/app-templates/ecommerce-app-template.webp?w=348&v=1191541940" className="card-img-top" alt="E-commerce" style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <h3 className="text-body-emphasis">E-commerce</h3>
                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                    <div className="mt-auto text-center">
                      <Link to="https://www.jotform.com/app-templates/ecommerce-app-template" className="btn" style={{ backgroundColor: '#5F9EA0', color: '#fff' }}>
                        Preview
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <img src="https://cdn03.jotfor.ms/templates/screenshot/app-templates/personal-portfolio-app.webp?w=348&v=1009150773" className="card-img-top" alt="Personal" style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <h3 className="text-body-emphasis">Personal</h3>
                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                    <div className="mt-auto text-center">
                      <Link to="https://www.jotform.com/app-templates/personal-portfolio-app" className="btn" style={{ backgroundColor: '#5F9EA0', color: '#fff' }}>
                        Preview
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <img src="https://cdn03.jotfor.ms/templates/screenshot/app-templates/non-profit-event-rsvp-app.webp?w=348&v=3540165512" className="card-img-top" alt="Non-Profit" style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <h3 className="text-body-emphasis">Non-Profit</h3>
                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                    <div className="mt-auto text-center">
                      <Link to="https://www.jotform.com/app-templates/non-profit-event-rsvp-app" className="btn" style={{ backgroundColor: '#5F9EA0', color: '#fff' }}>
                        Preview
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <img src="https://cdn02.jotfor.ms/templates/screenshot/app-templates/preschool-education-app.webp?w=348&v=3423623599" className="card-img-top" alt="Education" style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <h3 className="text-body-emphasis">Education</h3>
                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                    <div className="mt-auto text-center">
                      <Link to="https://www.jotform.com/app-templates/preschool-education-app" className="btn" style={{ backgroundColor: '#5F9EA0', color: '#fff' }}>
                        Preview
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <img src="https://cdn02.jotfor.ms/templates/screenshot/app-templates/telehealth-app.webp?w=348&v=3883465703" className="card-img-top" alt="Health & Wellness" style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <h3 className="text-body-emphasis">Health & Wellness</h3>
                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                    <div className="mt-auto text-center">
                      <Link to="https://www.jotform.com/app-templates/telehealth-app" className="btn" style={{ backgroundColor: '#5F9EA0', color: '#fff' }}>
                        Preview
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>



  

        </div>
       </div>
    </>
  )
}

export default Apps