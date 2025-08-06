import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


import { FaLinkedinIn } from 'react-icons/fa';
import { SiGooglemeet } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { BiLinkAlt } from 'react-icons/bi';


import styles from "./styles.module.css";

const ProfileView = () => {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/profile/${id}`); // Adjust the API route as per your setup
        if (response.ok) {
          const data = await response.json();
          setUserProfile(data);
        } else {
          throw new Error('Failed to fetch profile');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        // Handle error (e.g., show error message)
      }
    };

    fetchProfile();
  }, [id]);

  return (

    <div className='container mt-3'>
    <div class="container px-4 py-3">
  <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 pt-5 mb-3">
    <div class="col d-flex flex-column align-items-start gap-2">
   
      <div className="col-lg-6 mb-4 mb-lg-0">
        <img
          src={userProfile.uimg?userProfile.uimg : "https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"}
          alt="Profile"
          className="img-thumbnail fixed-size-image"
          style={{ width: "300px", height: "300px" }}
        />
      </div>
      <div className='mt-3'>
       <ul className={styles.icon_links}>
        <li>
          <Link to="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCJTNqGFPCBxzlQzcdSBChjqHgtRlQDSlNLsJhndjVslcVRDcdJPrztZjFBmRsDNDrFXVpPL"><FiMail /></Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/aditya-salkar-9587aa230/"><FaLinkedinIn /></Link>
        </li>
        <li>
          <Link to="https://meet.google.com/"><SiGooglemeet /></Link>
        </li>
        
      </ul>
       </div>
      
    </div>

    <div class="col">
      <div class="row row-cols-1 row-cols-sm-2 g-4">
        <div class="col d-flex flex-column gap-2">
          <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            {/* <svg class="bi" width="1em" height="1em">
       <use xlink:href="#collection"></use>
       </svg> */}
          </div>
          <h2>{userProfile.name? userProfile.name : "Name"}</h2>
          

        </div>
          

        <div class="col d-flex flex-column gap-2">
          <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            {/* <svg class="bi" width="1em" height="1em">
           <use xlink:href="#gear-fill"></use>
         </svg> */}
          </div>
          <h4 class="fw-semibold mb-0 text-body-emphasis">Account Type</h4>
          <p class="text-body-secondary">{userProfile.act ? userProfile.act : "Account Type"}</p>

        </div>

        <div class="col d-flex flex-column gap-2">
          <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            {/* <svg class="bi" width="1em" height="1em">
             <use xlink:href="#speedometer"></use>
          </svg> */}
          </div>
          <h4 class="fw-semibold mb-0 text-body-emphasis">Contacts</h4>
          <p class="text-body-secondary">phone:{userProfile.phone? userProfile.phone : "Phone.no"}</p>
          <p class="text-body-secondary">email:{userProfile.email ? userProfile.email : "Email"}</p>
        </div>

        <div class="col d-flex flex-column gap-2">
          <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            {/* <svg class="bi" width="1em" height="1em">
            <use xlink:href="#table"></use>
           </svg> */}
          </div>
          <h4 class="fw-semibold mb-0 text-body-emphasis">Bio</h4>
          <p class="text-body-secondary">{userProfile.bio ? userProfile.bio : "Bio"}</p>
        </div>


        
      </div>
    </div>
  </div>
</div>

<hr class="featurette-divider" />





<div class="container px-4 mb-3">
  <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
    <div class="col d-flex flex-column align-items-start gap-2">
    <h2 class="featurette-heading fw-normal lh-1">{userProfile.btitle? userProfile.btitle : "Business Title"} </h2>
    <p class="text-body-secondary">{userProfile.bdesc? userProfile.bdesc : "Business Description"}</p>
     
      
    </div>
    <div class="col">
      <div class="row row-cols-1 row-cols-sm-2 g-4">
        <div class="col d-flex flex-column gap-2">
          <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            {/* <svg class="bi" width="1em" height="1em">
             <use xlink:href="#collection"></use>
              </svg> */}
          </div>
          <h4 class="fw-semibold mb-0 text-body-emphasis">Year Founded</h4>
          <p class="text-body-secondary">{userProfile.eyear? userProfile.eyear : "Year Founded"}</p>
        </div>

        <div class="col d-flex flex-column gap-2">
          <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            {/* <svg class="bi" width="1em" height="1em">
             <use xlink:href="#gear-fill"></use>
             </svg> */}
          </div>
          <h4 class="fw-semibold mb-0 text-body-emphasis">Startup Category</h4>
          <p class="text-body-secondary">{userProfile.cat? userProfile.cat : "Startup Category"}</p> 
          
        </div>

        <div class="col d-flex flex-column gap-2">
          <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            {/* <svg class="bi" width="1em" height="1em">
              <use xlink:href="#speedometer"></use>
             </svg> */}
          </div>
          <h4 class="fw-semibold mb-0 text-body-emphasis">Website</h4>
          <p class="text-body-secondary"><BiLinkAlt />{userProfile.web ? userProfile.web : "Website"}</p>
        </div>

        <div class="col d-flex flex-column gap-2">
          <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            {/* <svg class="bi" width="1em" height="1em">
             <use xlink:href="#table"></use>
          </svg> */}
          </div>
          <h4 class="fw-semibold mb-0 text-body-emphasis">Address</h4>
          <p class="text-body-secondary">{userProfile.add? userProfile.add : "Address"}</p>
        </div>
      </div>
    </div>
  </div>
</div>








<div class="container mb-3">
  
<div class="container px-4 mb-3" id="hanging-icons">
            <div class="row g-4 py-3 row-cols-1 row-cols-md-2 row-cols-lg-3">
              <div class="col">
                <div class="card h-100">
                  <div class="card-body text-center">
                    <h4 class="card-title text-body-emphasis">{userProfile.pone ? userProfile.pone : "Postion"}</h4>
                    <p class="card-text">{userProfile.pnone ? userProfile.pnone : "name"}</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100">
                  <div class="card-body text-center">
                    <h4 class="card-title text-body-emphasis">{userProfile.ptwo ? userProfile.ptwo : "Postion"}</h4>
                    <p class="card-text">{userProfile.pntwo ? userProfile.pntwo : "name"}</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100">
                  <div class="card-body text-center">
                    <h4 class="card-title text-body-emphasis">{userProfile.pthree ? userProfile.pthree : "Position"}</h4>
                    <p class="card-text">{userProfile.pnthree ? userProfile.pnthree : "name"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


  <hr class="featurette-divider" />


  <div class="container px-4 py-3" id="hanging-icons">
            <div class="row g-4 py-5 row-cols-1 row-cols-md-2 row-cols-lg-3">
              <div class="col">
                <div class="card h-100">
                  <div class="card-body d-flex flex-column">
                    <h4 class="card-title text-body-emphasis">Target Market</h4>
                    <p class="card-text">{userProfile.tm ? userProfile.tm : "Target Market Desc"}</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100">
                  <div class="card-body d-flex flex-column">
                    <h4 class="card-title text-body-emphasis">Customer Problem</h4>
                    <p class="card-text">{userProfile.cp ? userProfile.cp : "Customer Problem Desc"}</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100">
                  <div class="card-body d-flex flex-column">
                    <h4 class="card-title text-body-emphasis">Sales/Marketing Strategy</h4>
                    <p class="card-text">{userProfile.sms ? userProfile.sms : "Sales/Marketing Strategy Desc"}</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100">
                  <div class="card-body d-flex flex-column">
                    <h4 class="card-title text-body-emphasis">Business Model</h4>
                    <p class="card-text">{userProfile.bm ? userProfile.bm : "Business Model Desc"}</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100">
                  <div class="card-body d-flex flex-column">
                    <h4 class="card-title text-body-emphasis">Major Competitors</h4>
                    <p class="card-text">{userProfile.mjc ? userProfile.mjc : "Major Competitors Desc"}</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100">
                  <div class="card-body d-flex flex-column">
                    <h4 class="card-title text-body-emphasis">Competitive Advantage</h4>
                    <p class="card-text">{userProfile.cad ? userProfile.cad : "Competitive Advantage Desc"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>



  <hr class="featurette-divider" />


  <div class="container px-4 py-5" id="custom-cards">
            <h4 class="fs-4 text-body-emphasis">Time Duretation</h4>

            <p>{userProfile.tp ? userProfile.tp : "Fincial years / Time Duration"}</p>

            <h4 class="fs-4 text-body-emphasis">Financial Desc</h4>
            <p class="pb-2">{userProfile.fdesc ? userProfile.fdesc : "Financial Description"} </p>

            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
              <div className="col">
                <div className="card border-secondary mb-3">
                  <div className="card-body text-end">
                    <h3 className="card-title  fw-normal">{userProfile.rev ? userProfile.rev : "Revenues"}</h3>
                    <p className="card-text">Revenues</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-secondary mb-3">
                  <div className="card-body text-end">
                    <h3 className="card-title fw-normal">{userProfile.expen ? userProfile.expen : "Expenditure"}</h3>
                    <p className="card-text">Expenditure</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border-secondary mb-3">
                  <div className="card-body text-end">
                    <h3 className="card-title  fw-normal">{userProfile.net ? userProfile.net : "Net"}</h3>
                    <p className="card-text">Net</p>
                  </div>
                </div>
              </div>
            </div>
          </div>




  

</div>








</div>


  )
}

export default ProfileView