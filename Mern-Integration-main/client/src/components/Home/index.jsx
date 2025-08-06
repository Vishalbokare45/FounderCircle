import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavbarS from '../Navbar';
import Integration from './integration.png'
import Team from './team.jpg'




export const Home = () => {
  const [profiles, setProfiles] = useState([]);
  const [followedProfiles, setFollowedProfiles] = useState(new Set());
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [followings, setFollowings] = useState([]);




  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/profile/complete');
        setProfiles(response.data);
      } catch (error) {
        console.error('Error fetching complete profiles:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchFollowings = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8080/api/follow/send-follow', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch followings');
        }

        const data = await response.json();
        const followedSet = new Set(data.map(follow => follow.ftid));
        setFollowings(data);
        setFollowedProfiles(followedSet);
      } catch (error) {
        console.error('Error fetching followings:', error);
      }
    };
    fetchFollowings();
  }, []);

  const handleSubmit = async (e, profileid, profilename) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8080/api/follow";
      const payload = { ftid: profileid, ftname: profilename };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setSuccessMessage("You followed this account");
      setFollowedProfiles(prev => new Set([...prev, profileid]));

      setTimeout(() => setSuccessMessage(""), 2000);
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(""), 2000);
    }
  };

  const handleUnfollow = async (e, followId, profileid) => {
    e.preventDefault();

    try {
      const url = `http://localhost:8080/api/follow/${followId}`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setSuccessMessage("Connection Remove Successfully");
      setFollowedProfiles(prev => {
        const updated = new Set(prev);
        updated.delete(profileid);
        return updated;
      });

      setTimeout(() => setSuccessMessage(""), 2000);
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(""), 2000);
    }
  };

  return (
    <div>
      <NavbarS />
    

      <div className='mt-5'>
        <div id="carouselExampleCaptions" className="carousel slide border-bottom  py-3">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active bg-body-tertiary" style={{ minHeight: '80vh' }}>
              <div className="px-4 py-5 my-5 text-center">
                <img className="d-block mx-auto mb-4 mt-5" src={Integration} alt="" width="75" height="75" />
                <h1 className="display-5 fw-bold text-muted">Integration</h1>
                <div className="col-lg-6 mx-auto">
                  <p className="lead mb-4">Our platform enables startups to create profiles, showcase services, and connect with potential clients and partners, setting them up for growth and success.</p>
                  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link to="/about" style={{textDecoration:"none"}}><button
                      type="button"
                      className="btn btn-primary px-4 btn-lg gap-3"
                      style={{ backgroundColor: '#5F9EA0', borderColor: '#5F9EA0' }}
                    >
                      View More
                    </button>
                    </Link>


                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item bg-body-tertiary" style={{ minHeight: '80vh' }}>
              <div className="container my-5 ">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center ">
                  <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-5 fw-bold">
                      <span className='text-muted'>Our </span>
                      <span style={{ color: '#5F9EA0' }}>Services</span>
                    </h1>

                    <p className="lead">We provide tailored ASP and IT solutions that meet the unique needs of startups, supporting secure, scalable, and innovative business growth.

                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">

                      <Link to="/asp" style={{textDecoration:"none"}}><button type="button" className="btn btn-outline-secondary  px-4 btn-lg">View More</button></Link>
                    </div>
                  </div>
                  <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img className="rounded-lg-3 img-fluid" src={Team} alt="" width="720" />
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item bg-body-tertiary" style={{ minHeight: '80vh' }}>
              <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center">
                  <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-5 fw-bold">
                      <span className='text-muted'>Our </span>
                      <span style={{ color: '#5F9EA0' }}>Team</span>
                    </h1>
                    <p className="lead"> Our dedicated team of professionals is committed to empowering startups, fostering community, and driving collaborative success.

                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">

                      <Link to="/team" style={{textDecoration:"none"}}><button type="button" className="btn btn-outline-secondary  px-4 btn-lg">View More</button></Link>
                    </div>
                  </div>
                  <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img className="rounded-lg-3 img-fluid" src={Team} alt="" width="720" />
                  </div>
                </div>
              </div>
            </div>




          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" style={{ filter: 'invert(1)' }} aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" style={{ filter: 'invert(1)' }} aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>



      <div className="container">
        <h6 className="text-muted text-center mt-3 mb-3">Category</h6>
        <h5 className='text-center mb-3'>
          <span style={{ color: '#5F9EA0' }}> Startup Profile</span>
          <span className="text-muted"> Category</span>
        </h5>

        <div className="d-flex flex-wrap gap-3 justify-content-center text-muted mt-5">
  <h6 className="text-center">
    <Link to="/completecat/Technology" className="text-muted" style={{ textDecoration: "none" }}>
      Technology
    </Link>
  </h6>
  <h6 className="text-center">
    <Link to="/completecat/ECommerce" className="text-muted" style={{ textDecoration: "none" }}>
      E-commerce
    </Link>
  </h6>
  <h6 className="text-center">
    <Link to="/completecat/Fintech" className="text-muted" style={{ textDecoration: "none" }}>
      Fintech
    </Link>
  </h6>
  <h6 className="text-center">
    <Link to="/completecat/HealthTech" className="text-muted" style={{ textDecoration: "none" }}>
      HealthTech
    </Link>
  </h6>
  <h6 className="text-center">
    <Link to="/completecat/EdTech" className="text-muted" style={{ textDecoration: "none" }}>
      EdTech
    </Link>
  </h6>
  <h6 className="text-center">
    <Link to="/completecat/GreenTech" className="text-muted" style={{ textDecoration: "none" }}>
      GreenTech
    </Link>
  </h6>
  <h6 className="text-center">
    <Link to="/completecat/FoodTech" className="text-muted" style={{ textDecoration: "none" }}>
      FoodTech
    </Link>
  </h6>
  <h6 className="text-center">
    <Link to="/completecat/RealEstatePropTech" className="text-muted" style={{ textDecoration: "none" }}>
      Real Estate/PropTech
    </Link>
  </h6>
  <h6 className="text-center">
    <Link to="/completecat/TravelTourism" className="text-muted" style={{ textDecoration: "none" }}>
      Travel & Tourism
    </Link>
  </h6>
  <h6 className="text-center">
    <Link to="/completecat/SocialMediaNetworking" className="text-muted" style={{ textDecoration: "none" }}>
      Social Media & Networking
    </Link>
  </h6>
</div>



    <div class="container my-5">
  <div class="p-5 text-center bg-body-tertiary rounded-3">
    
    <h3 class="text-muted mb-3">Build and Share Your Startup Profile </h3>
    <p class="col-lg-8 mx-auto fs-5 text-muted lead mb-3">
    Create and share your startup profile to highlight your business details, offerings, and goals. Connect with potential partners, investors, and collaborators effortlessly.
    </p>
   
      <Link to="/profileform" style={{textDecoration:"none"}}><button class="btn btn-outline-secondary btn-md " type="button">
        Update Profile
      </button>
      </Link>
    
  </div>
</div>

      </div>








      <div className="container px-4 py-5 mt-5">
        <div className="container mb-2">
          <h6 className="text-muted">Profiles</h6>
          <div className="d-flex justify-content-between align-items-center">
            <h5>
              <span style={{ color: '#5F9EA0' }}>Startup</span>
              <span className="text-muted"> Profiles</span>
            </h5>
            <h6>
              <Link to="" className="text-muted" style={{ textDecoration: "none" }}>View All</Link>
            </h6>
          </div>
        </div>


        {error && <div className="alert alert-danger">{error}</div>}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        <div className="row">
          {profiles.length > 0 ? (
            profiles.map(profile => (
              <div className="col-md-3 mb-4" key={profile._id}>
                <Link to={`/profileview/${profile._id}`} style={{ textDecoration: "none" }}>
                  <div className="card">
                    <img
                      src={profile.uimg}
                      className="card-img-top img-fluid"
                      alt="Profile"
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title mb-2">{profile.name}</h5>
                      <p className="card-text mb-1">{profile.cat}</p>
                      <p className="card-text mb-3">{profile.bio?.slice(0, 50) || profile.bdesc}</p>
                      <div className="d-grid col-6 mx-auto">
                        {followedProfiles.has(profile._id) ? (
                          <button
                            className="btn"
                            onClick={(e) => {
                              const follow = followings.find(f => f.ftid === profile._id);
                              handleUnfollow(e, follow?._id, profile._id);
                            }}
                            style={{ backgroundColor: '#D3D3D3', color: 'black' }}
                          >
                            Following
                          </button>
                        ) : (
                          <button
                            className="btn"
                            onClick={(e) => handleSubmit(e, profile._id, profile.name)}
                            style={{ backgroundColor: '#5F9EA0', color: 'white' }}
                          >
                            Follow
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>No complete profiles found.</p>
          )}
        </div>
      </div>



    </div>
  );
};

export default Home;
