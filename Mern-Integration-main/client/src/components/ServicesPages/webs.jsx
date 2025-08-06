import React from 'react';
import { Link } from 'react-router-dom';

const Webs = () => {
  return (
    <> 
      <div className="container mt-5">
        <div className="continer my-3">
          <h5  style={{ color: '#5F9EA0' }}>Web Development and Design Services</h5>
          <div className="container px-4 py-5">
            <div className="row g-4 row-cols-1 row-cols-lg-3">
              
              <div className="col">
                <div className="card h-100">
                  <img src="https://themewagon.com/wp-content/uploads/2024/09/Rentiz.webp" className="card-img-top" alt="Business" style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <h3 className="text-body-emphasis">Business</h3>
                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                    <div className="mt-auto text-center">
                      <Link to="https://themewagon.github.io/rentiz/" className="btn" style={{ backgroundColor: '#5F9EA0', color: '#fff' }}>
                        Preview
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <img src="https://themewagon.com/wp-content/uploads/2024/10/Kaira.webp" className="card-img-top" alt="E-commerce" style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <h3 className="text-body-emphasis">E-commerce</h3>
                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                    <div className="mt-auto text-center">
                      <Link to="https://themewagon.github.io/kaira/" className="btn" style={{ backgroundColor: '#5F9EA0', color: '#fff' }}>
                        Preview
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <img src="https://themewagon.com/wp-content/uploads/2024/08/JoySeno-2048x1257.webp" className="card-img-top" alt="Personal" style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <h3 className="text-body-emphasis">Personal</h3>
                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                    <div className="mt-auto text-center">
                      <Link to="https://themewagon.github.io/Joyseno/" className="btn" style={{ backgroundColor: '#5F9EA0', color: '#fff' }}>
                        Preview
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <img src="https://themewagon.com/wp-content/uploads/2022/08/screencapture-demo-htmlcodex-2553-free-nonprofit-website-template-index-html-2022-08-10-12_14_12-1.png" className="card-img-top" alt="Non-Profit" style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <h3 className="text-body-emphasis">Non-Profit</h3>
                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                    <div className="mt-auto text-center">
                      <Link to="https://themewagon.github.io/chariteam/" className="btn" style={{ backgroundColor: '#5F9EA0', color: '#fff' }}>
                        Preview
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <img src="https://themewagon.com/wp-content/uploads/2024/04/scholar.png" className="card-img-top" alt="Education" style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <h3 className="text-body-emphasis">Education</h3>
                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                    <div className="mt-auto text-center">
                      <Link to="https://themewagon.github.io/scholar/" className="btn" style={{ backgroundColor: '#5F9EA0', color: '#fff' }}>
                        Preview
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <img src="https://themewagon.com/wp-content/uploads/2021/06/novena-1.png" className="card-img-top" alt="Health & Wellness" style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <h3 className="text-body-emphasis">Health & Wellness</h3>
                    <p>Paragraph of text beneath the heading to explain the heading.</p>
                    <div className="mt-auto text-center">
                      <Link to="https://themewagon.github.io/novena/" className="btn" style={{ backgroundColor: '#5F9EA0', color: '#fff' }}>
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
  );
}

export default Webs;
